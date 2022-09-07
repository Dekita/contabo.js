/**
* ■ API::
* Wrapper class to handle fetch requests to contabo api
* this class handles cache-ing of the token, as well as
* catching errors for all api requests. 
*/

const uuid = require('uuid');
const fetch = require('node-fetch');
const Dekache = require('./dekache');
const {CATEGORIES,ENDPOINTS} = require('./endpoints');
const Tokache = new Dekache({name:'token-cache', mins: 60});
const AUTH_URL = "https://auth.contabo.com/auth/realms/contabo/protocol/openid-connect/token";
const BASE_URL = "https://api.contabo.com/v1/";

// api wrapper class: 
module.exports = class API { 
    // private variables:
    static #credentials;
    static #x_trace_id;
    // get auth and base api url
    static get auth_url(){return AUTH_URL};
    static get base_url(){return BASE_URL};
    // return an object containing all functions for a specific category
    // category: instances|snapshots|images|storages|networks|tags|users|roles|secrets
    static get categories() {return CATEGORIES};
    // set credentials used for api calls
    // credentials.client_id: contabo client id
    // credentials.client_secret: contabo client id
    // credentials.username: contabo account username
    // credentials.password: contabo account password     
    // x_trace_id: some uuid for tracing all requests
    static setCredentials(credentials, x_trace_id) {
        this.#credentials = credentials;
        this.#x_trace_id = x_trace_id;
    }
    // authorize user with set credentials
    // => gets token for future requests
    static async authorize() {
        try {
            const response = await fetch(this.auth_url, {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: new URLSearchParams({grant_type: 'password',...this.#credentials}),
                method: "post"
            });
            return await response.json();
        } catch (error) {
            return {error};
        }
    }
    // fetch token from cache, or call tryFetchToken to get new
    static async getToken() {
        // all properties of data:
        // const {
        //     error, access_token, expires_in,
        //     refresh_token, refresh_expires_in,
        //     token_type, session_state, scope,
        // } = data;
        const data = await Tokache.get('token', async()=>{
            return await API.authorize();
        });
        return data?.access_token;
    }
    // format string using object properties as replacers
    // eg: format("hi NAME!", {NAME: 'mr hankey'});
    static format(str, objekt) {
        const keys = Object.keys(objekt);
        if (!keys.length) return str;
        const regstr = keys.join("|");
        const regexp = new RegExp(regstr,"gi");
        return str.replace(regexp, matched => {
            return objekt[matched.toLowerCase()];
        });
    }
    // try run fetch request using given arguments
    static async try(api_call_data, body_or_query=null, x_request_id=null) {
        try {
            // get method type and route from api call name
            const [method, route] = ENDPOINTS[api_call_data.name];
            // in case some api call has 'name' within the url 
            delete api_call_data.name; // remove function name ref
            // format additional route arguments using api_call_data
            const real_route = this.format(route, api_call_data);
            // check api_call data for undefined properties and error:
            for (const key of Object.keys(api_call_data)) {
                if (!api_call_data[key] && api_call_data[key] !== 0) {
                    throw new Error(`missing property: "${key}"`);
                }
            }
            // get the token from cache or throw error
            const token = await this.getToken();
            if (!token) throw new Error("invalid-token!");
            // prepare the request data
            const req_data = {
                method,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                    "x-request-id": x_request_id || uuid.v4(),
                    "x-trace-id": this.#x_trace_id,
                },
            };
            // if body or query data is given
            if (body_or_query !== null) {
                body_or_query = new URLSearchParams(body_or_query);
                // if method is get, then its query
                if (method.toLowerCase() === 'get') {
                    real_route.concat(`?${body_or_query.toString()}`);
                } else { // other methods are body
                    req_data.body = body_or_query;
                }
            }
            // send the request and return json:
            const url = `${this.base_url}${real_route}`;
            const response = await fetch(url, req_data);
            return await response.json();
        } catch (error) {
            return {error};
        }
    }
}
