[<img src="https://raw.githubusercontent.com/Dekita/contabo.js/master/contabo.png" style="margin-top: 28px;">](https://contabo.com/)
--------------------------------------------------------------------------------

# What is Contabo.js? 
Contabo.js is a node.js interface to the Contabo API. Contabo is a cloud vps/dedicated server provider that offers competitve prices on their vps products. This module allows you to create/destroy/manage all aspects of your vps/object-storage/images etc. Basically, its a full node.js implementation of the Contabo API.

For API Information See: https://api.contabo.com/
For Contabo VPS Info See: https://contabo.com/en/

## License TLDR
```MIT - Copyright (c) 2021 Dekita (dekitarpg@gmail.com)```
[[view license]](https://github.com/Dekita/contabo.js/blob/main/license)

## API Documentation
[https://api.contabo.com/](https://api.contabo.com/)

## System Requirements
[node.js](https://nodejs.org/) 

## Author Information
[website](https://dekitarpg.com/) | 
[email](mailto://dekitarpg@gmail.com) | 
[github](https://github.com/dekita/md-embed/)

## How To Use This Module In Your Own Projects:
Assuming you already have a `node.js` project, simply add the module to your project, and view the examples below to get started!

NOTE: The examples below also detail optional, but HIGHLY recommended steps for how to keep your api/login credentials secure. 


## Install Contabo.js (REQUIRED)
```
yarn add contabo.js
```
OR 
```
npm i contabo.js
```

## Install DotEnv (Optional: Recommended)
DotEnv allows us to read .env variable files into the node.js 
system environment. This allows us to keep credentials safe!
```
yarn add dotenv
```
OR
```
npm i dotenv
```

## Create .env File (Optional: Recommended)
DotEnv files MUST be named `.env` (include the dot).
Add the variables below to your .env file and set
the values according to your own details
```ini
contabo_client_id=YOUR-CLIENT-ID
contabo_client_secret=YOUR-CLIENT-SECRET
contabo_username=YOUR_CONTABO_LOGINUSERNAME
contabo_password=YOUR_CONTABO_LOGINPASSWORD
```

## Add .env To Your .gitignore (Optional: Recommended)
If you are pushing your code to a git repo, add `.env` to the file. This ensures your private credentials are not uploaded when you push your repo. 

## Create Config File (Optional: Recommended)
This example assumes the file name is `config.js`.
```js
// load dotenv (.env file) variables into process environment
(require('dotenv')).config();

// export custom application config
module.exports = {
    // set credentials from environment variables
    credentials: {
        client_id: process.env.contabo_client_id,
        client_secret: process.env.contabo_client_secret,
        username: process.env.contabo_username,
        password: process.env.contabo_password,        
    }
};
```


## Contabo.js Example Setup (REQUIRED)
```js
// load config module/credentials (detailed above)
const config = require('./config');
// load contabo.js api interface
const ContaboAPI = require('contabo.js');

// basic async function wrapper so we can 'await' api calls
(async()=>{"use strict";
    // shorthand reference to console log:
    const {log} = console;

    // get all api call categories:
    log('\napi categories:..');
    log(ContaboAPI.categories);

    // get list of all functions of 'instances' category:
    log('\ninstance functions:..');
    log(ContaboAPI.instances);

    // set credentials before performing any actual api call:
    // note: listing api call categories and category function 
    // lists (as shown above) does not count as an api call.
    log('\nsetting credentials:..');
    ContaboAPI.setCredentials(config.credentials);

    log('\ngetting instances:..');
    log(await ContaboAPI.retrieveInstancesList());

    log('\ngetting instances by id:..');
    log(await ContaboAPI.retrieveInstance(987654321));
    
    log('\ngetting instances audits:..');
    log(await ContaboAPI.retrieveInstancesAuditsList({
        instanceId: 987654321,
    }));

})();
```

[<img src="https://dekitarpg.com/img/logo.png" style="margin-top: 28px;">](https://dekitarpg.com/)