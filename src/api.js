
// author: dekitarpg.com
// system: node js module/interface to interact with contabo api
// see: https://api.contabo.com/

const {getName} = require('./fname');
const API = require('./api-wrapper');

// see urls below for each functions valid body
// "request body schema" are the valid/required body/query 
// "query parameters" are the valid query
module.exports = class ContaboAPI {
    // set credentials used for api calls
    // see API.setCredentials();
    static setCredentials() {
        API.setCredentials(...arguments);
    }

    // return an object containing all functions for a specific category
    // category: instances|snapshots|images|storages|networks|tags|users|roles|secrets
    static getCategoryFunctions(category) {
        return API.categories[category].reduce((objekt, funk)=>{
            return {...objekt, [funk]: this[funk]};
        }, {});
    }

    // return an array containing all category names
    static get categories() {
        return Object.keys(API.categories);
    }

    /**
    * ■ INSTANCES:: 
    * The Compute Management API allows you to manage compute resources 
    * (e.g. creation, deletion, starting, stopping) as well as managing 
    * snapshots and custom images. It also supports cloud-init at least 
    * on our default images (for custom images you'll need to provide 
    * cloud-init support packages). The API offers providing cloud-init 
    * scripts via the user_data field. Custom images must be provided 
    * in .qcow2 or .iso format.
    */

    static get instances() {
        return this.getCategoryFunctions(getName());
    }

    // https://api.contabo.com/#tag/Instances/operation/retrieveInstancesList
    static async retrieveInstancesList() {
        return await API.try({name: getName()});
    }
    // https://api.contabo.com/#tag/Instances/operation/createInstance
    static async createInstance(body) {
        return await API.try({name: getName()}, body);
    }
    // https://api.contabo.com/#tag/Instances/operation/retrieveInstance
    static async retrieveInstance(instance_id) {
        return await API.try({name: getName(), instance_id});
    }
    // https://api.contabo.com/#tag/Instances/operation/patchInstance
    static async patchInstance(instance_id, body) {
        return await API.try({name: getName(), instance_id}, body);
    }
    // https://api.contabo.com/#tag/Instances/operation/reinstallInstance
    static async reinstallInstance(instance_id, body) {
        return await API.try({name: getName(), instance_id}, body);
    }
    // https://api.contabo.com/#tag/Instances/operation/cancelInstance
    static async cancelInstance(instance_id) {
        return await API.try({name: getName(), instance_id});
    }
    // https://api.contabo.com/#tag/Instances/operation/upgradeInstance
    static async upgradeInstance(instance_id, body) {
        return await API.try({name: getName(), instance_id}, body);
    }
    // https://api.contabo.com/#tag/Instances-Audits/operation/retrieveInstancesAuditsList
    static async retrieveInstancesAuditsList(query) {
        return await API.try({name: getName()}, query);
    }
    // https://api.contabo.com/#tag/Instance-Actions/operation/start
    static async start(instance_id) {
        return await API.try({name: getName(), instance_id});
    }
    // https://api.contabo.com/#tag/Instance-Actions/operation/restart
    static async restart(instance_id) {
        return await API.try({name: getName(), instance_id});
    }
    // https://api.contabo.com/#tag/Instance-Actions/operation/stop
    static async stop(instance_id) {
        return await API.try({name: getName(), instance_id});
    }
    // https://api.contabo.com/#tag/Instance-Actions/operation/shutdown
    static async shutdown(instance_id) {
        return await API.try({name: getName(), instance_id});
    }
    // https://api.contabo.com/#tag/Instance-Actions-Audits/operation/retrieveInstancesActionsAuditsList
    static async retrieveInstancesActionsAuditsList(query) {
        return await API.try({name: getName()}, query);
    }

    /**
    * ■ SNAPSHOTS::
    * List and filter all your snapshots for a specific instance
    */

    static get snapshots() {
        return this.getCategoryFunctions(getName());
    }

    // https://api.contabo.com/#tag/Snapshots/operation/retrieveSnapshotList
    static async retrieveSnapshotList(query) {
        return await API.try({name: getName()}, query);
    }
    // https://api.contabo.com/#tag/Snapshots/operation/createSnapshot
    static async createSnapshot(instance_id, body) {
        return await API.try({name: getName(), instance_id}, body);
    }
    // https://api.contabo.com/#tag/Snapshots/operation/retrieveSnapshot
    static async retrieveSnapshot(instance_id, snapshot_id) {
        return await API.try({name: getName(), instance_id, snapshot_id});
    }
    // https://api.contabo.com/#tag/Snapshots/operation/updateSnapshot
    static async updateSnapshot(instance_id, snapshot_id, body) {
        return await API.try({name: getName(), instance_id, snapshot_id}, body);
    }
    // https://api.contabo.com/#tag/Snapshots/operation/deleteSnapshot
    static async deleteSnapshot(instance_id, snapshot_id) {
        return await API.try({name: getName(), instance_id, snapshot_id});
    }
    // https://api.contabo.com/#tag/Snapshots/operation/rollbackSnapshot
    static async rollbackSnapshot(instance_id, snapshot_id) {
        return await API.try({name: getName(), instance_id, snapshot_id});
    }
    // https://api.contabo.com/#tag/Snapshots-Audits/operation/retrieveSnapshotsAuditsList
    static async retrieveSnapshotsAuditsList(query) {
        return await API.try({name: getName()}, query);
    }

    /**
    * ■ IMAGES::
    * List and filter all available standard images provided by 
    * Contabo and your uploaded custom images.
    */

    static get images() {
        return this.getCategoryFunctions(getName());
    }

    // https://api.contabo.com/#tag/Images/operation/retrieveImageList
    static async retrieveImageList(query) {
        return await API.try({name: getName()}, query);
    }
    // https://api.contabo.com/#tag/Images/operation/createCustomImage
    static async createCustomImage(body) {
        return await API.try({name: getName()}, body);
    }
    // https://api.contabo.com/#tag/Images/operation/retrieveImage
    static async retrieveImage(image_id) {
        return await API.try({name: getName(), image_id});
    }
    // https://api.contabo.com/#tag/Images/operation/updateImage
    static async updateImage(image_id, body) {
        return await API.try({name: getName(), image_id}, body);
    }
    // https://api.contabo.com/#tag/Images/operation/deleteImage
    static async deleteImage(image_id) {
        return await API.try({name: getName(), image_id});
    }
    // https://api.contabo.com/#tag/Images/operation/retrieveCustomImagesStats
    static async retrieveCustomImagesStats() {
        return await API.try({name: getName()});
    }
    // https://api.contabo.com/#tag/Images-Audits/operation/retrieveImageAuditsList
    static async retrieveImageAuditsList(query) {
        return await API.try({name: getName()}, query);
    }

    /**
    * ■ STORAGE::
    * Manage S3 compatible Object Storage. With the Object Storage API 
    * you can create Object Storage in different locations. Please note 
    * that you can only have one Object Storage per location. 
    * Furthermore you can increase the amount of storage space and 
    * control the autoscaling feature which allows to automatically 
    * perform a monthly upgrade of the disk space to the specified 
    * maximum. You might also inspect the usage. This API is not the 
    * S3 API itself. For accessing the S3 API directly or with S3 
    * compatible tools like aws cli after and after having 
    * created / upgraded your Object Storage please use the S3 URL 
    * from this Storage API and refer to the User Mangement API 
    * to retrieve the S3 credentials.
    */

    static get storages() {
        return this.getCategoryFunctions(getName());
    }

    // https://api.contabo.com/#tag/Object-Storages/operation/retrieveDataCenterList
    static async retrieveDataCenterList(query) {
        return await API.try({name: getName()}, query);
    }
    // https://api.contabo.com/#tag/Object-Storages/operation/retrieveObjectStorageList
    static async retrieveObjectStorageList(query) {
        return await API.try({name: getName()}, query);
    }
    // https://api.contabo.com/#tag/Object-Storages/operation/createObjectStorage
    static async createObjectStorage(body) {
        return await API.try({name: getName()}, body);
    }
    // https://api.contabo.com/#tag/Object-Storages/operation/retrieveObjectStorage
    static async retrieveObjectStorage(storage_id) {
        return await API.try({name: getName(), storage_id});
    }
    // https://api.contabo.com/#tag/Object-Storages/operation/upgradeObjectStorage
    static async upgradeObjectStorage(storage_id, body) {
        return await API.try({name: getName(), storage_id}, body);
    }
    // https://api.contabo.com/#tag/Object-Storages/operation/retrieveObjectStoragesStats
    static async retrieveObjectStoragesStats(storage_id) {
        return await API.try({name: getName(), storage_id});
    }
    // https://api.contabo.com/#tag/Object-Storages/operation/CancelObjectStorage
    static async cancelObjectStorage(storage_id) {
        return await API.try({name: getName(), storage_id});
    }
    // https://api.contabo.com/#tag/Object-Storages-Audits/operation/retrieveObjectStorageAuditsList
    static async retrieveObjectStorageAuditsList(query) {
        return await API.try({name: getName()}, query);
    }

    /**
    * ■ NETWORKS::
    * Private Networking API allows you to create and manage Private 
    * Networks / Virtual Private Vloud (VPC) for your instances 
    * (Cloud VPS/VDS). Private Network / VPC allows private and 
    * direct communication between instances using private IPs. 
    * Traffic doesn't leave a Data Center. This feature requires 
    * a payed add-on for each instance being part of a Private 
    * Network. Instance can be part of multiple Private Networks.
    */        

    static get networks() {
        return this.getCategoryFunctions(getName());
    }

    // https://api.contabo.com/#tag/Private-Networks/operation/retrievePrivateNetworkList
    static async retrievePrivateNetworkList(query) {
        return await API.try({name: getName()}, query);
    }
    // https://api.contabo.com/#tag/Private-Networks/operation/createPrivateNetwork
    static async createPrivateNetwork(body) {
        return await API.try({name: getName()}, body);
    }
    // https://api.contabo.com/#tag/Private-Networks/operation/patchPrivateNetwork
    static async patchPrivateNetwork(network_id, body) {
        return await API.try({name: getName(), network_id}, body);
    }
    // https://api.contabo.com/#tag/Private-Networks/operation/retrievePrivateNetwork
    static async retrievePrivateNetwork(network_id) {
        return await API.try({name: getName(), network_id});
    }
    // https://api.contabo.com/#tag/Private-Networks/operation/deletePrivateNetwork
    static async deletePrivateNetwork(network_id) {
        return await API.try({name: getName(), network_id});
    }
    // https://api.contabo.com/#tag/Private-Networks/operation/assignInstancePrivateNetwork
    static async assignInstancePrivateNetwork(instance_id, network_id) {
        return await API.try({name: getName(), instance_id, network_id});
    }
    // https://api.contabo.com/#tag/Private-Networks/operation/unassignInstancePrivateNetwork
    static async unassignInstancePrivateNetwork(instance_id, network_id) {
        return await API.try({name: getName(), instance_id, network_id});
    }
    // https://api.contabo.com/#tag/Private-Networks-Audits/operation/retrievePrivateNetworkAuditsList
    static async retrievePrivateNetworkAuditsList(query) {
        return await API.try({name: getName()}, query);
    }

    /**
    * ■ TAGS::
    * Tags are Customer-defined labels which can be attached to any 
    * resource in your account. Tag API represent simple CRUD functions 
    * and allow you to manage your tags. Use tags to group your resources. 
    * For example you can define some user group with tag and give them 
    * permission to create compute instances.
    */

    static get tags() {
        return this.getCategoryFunctions(getName());
    }

    // https://api.contabo.com/#tag/Tags/operation/retrieveTagList
    static async retrieveTagList(query) {
        return await API.try({name: getName()}, query);
    }
    // https://api.contabo.com/#tag/Tags/operation/createTag
    static async createTag(body) {
        return await API.try({name: getName()}, body);
    }
    // https://api.contabo.com/#tag/Tags/operation/retrieveTag
    static async retrieveTag(tag_id) {
        return await API.try({name: getName(), tag_id});
    }
    // https://api.contabo.com/#tag/Tags/operation/updateTag
    static async updateTag(tag_id, body) {
        return await API.try({name: getName(), tag_id}, body);
    }
    // https://api.contabo.com/#tag/Tags/operation/deleteTag
    static async deleteTag(tag_id) {
        return await API.try({name: getName(), tag_id});
    }
    // https://api.contabo.com/#tag/Tags-Audits/operation/retrieveTagAuditsList
    static async retrieveTagAuditsList(query) {
        return await API.try({name: getName()}, query);
    }

    /**
    * ■ TAG-ASSIGNMENTS::
    * With Tag Assignments you can assign tags to a resource e.g. a compute instance. 
    * This also called tagging sometimes. This way it helps you organizing your 
    * resources. It also supports User Management to allow access to a limited 
    * set of resources by users defined by you.
    */

    // https://api.contabo.com/#tag/Tag-Assignments/operation/retrieveAssignmentList
    static async retrieveAssignmentList(tag_id, query) {
        return await API.try({name: getName(), tag_id}, query);
    }
    // https://api.contabo.com/#tag/Tag-Assignments/operation/retrieveAssignment
    static async retrieveAssignment(tag_id, resource_type, resource_id) {
        return await API.try({name: getName(), tag_id, resource_type, resource_id});
    }
    // https://api.contabo.com/#tag/Tag-Assignments/operation/createAssignment
    static async createAssignment(tag_id, resource_type, resource_id) {
        return await API.try({name: getName(), tag_id, resource_type, resource_id});
    }
    // https://api.contabo.com/#tag/Tag-Assignments/operation/deleteAssignment
    static async deleteAssignment(tag_id, resource_type, resource_id) {
        return await API.try({name: getName(), tag_id, resource_type, resource_id});
    }
    // https://api.contabo.com/#tag/Tag-Assignments-Audits/operation/retrieveAssignmentsAuditsList
    static async retrieveAssignmentsAuditsList(query) {
        return await API.try({name: getName()}, query);
    }

    /**
    * ■ USERS::
    * Give access to all api endpoints and resources or manage to which endpoints 
    * and resources individual users might have access to. Permissions are organized 
    * in roles. Users can have roles assigned. Roles can grant and restrict access 
    * to different API's or to specific resources. Permissions for resources are 
    * declared by using tags which have been assigned to resources.
    */

    static get users() {
        return this.getCategoryFunctions(getName());
    }

    // https://api.contabo.com/#tag/Users/operation/retrieveUserList
    static async retrieveUserList(query) {
        return await API.try({name: getName()}, query);
    }
    // https://api.contabo.com/#tag/Users/operation/createUser
    static async createUser(body) {
        return await API.try({name: getName()}, body);
    }
    // https://api.contabo.com/#tag/Users/operation/retrieveUser
    static async retrieveUser(user_id) {
        return await API.try({name: getName(), user_id});
    }
    // https://api.contabo.com/#tag/Users/operation/updateUser
    static async updateUser(user_id, body) {
        return await API.try({name: getName(), user_id}, body);
    }
    // https://api.contabo.com/#tag/Users/operation/deleteUser
    static async deleteUser(user_id) {
        return await API.try({name: getName(), user_id});
    }
    // https://api.contabo.com/#tag/Users/operation/resetPassword
    static async resetPassword(user_id) {
        return await API.try({name: getName(), user_id});
    }
    // https://api.contabo.com/#tag/Users/operation/resendEmailVerification
    static async resendEmailVerification(user_id) {
        return await API.try({name: getName(), user_id});
    }
    // https://api.contabo.com/#tag/Users/operation/retrieveUserClient
    static async retrieveUserClient() {
        return await API.try({name: getName()});
    }
    // https://api.contabo.com/#tag/Users/operation/generateClientSecret
    static async generateClientSecret() {
        return await API.try({name: getName()});
    }
    // https://api.contabo.com/#tag/Users/operation/getObjectStorageCredentials
    static async getObjectStorageCredentials(user_id) {
        return await API.try({name: getName(), user_id});
    }
    // https://api.contabo.com/#tag/Users/operation/regenerateCredentials
    static async regenerateCredentials(user_id) {
        return await API.try({name: getName(), user_id});
    }
    // https://api.contabo.com/#tag/Users-Audits/operation/retrieveUserAuditsList
    static async retrieveUserAuditsList(query) {
        return await API.try({name: getName()}, query);
    }

    /**
    * ■ ROLES::
    * List and filter all your roles. A role allows you to specify permission to 
    * api endpoints and resources like compute.
    */

    static get roles() {
        return this.getCategoryFunctions(getName());
    }

    // https://api.contabo.com/#tag/Roles/operation/retrieveRoleList
    static async retrieveRoleList(query) {
        return await API.try({name: getName()}, query);
    }
    // https://api.contabo.com/#tag/Roles/operation/createRole
    static async createRole(body) {
        return await API.try({name: getName()}, body);
    }
    // https://api.contabo.com/#tag/Roles/operation/retrieveRole
    static async retrieveRole(role_id) {
        return await API.try({name: getName(), role_id});
    }
    // https://api.contabo.com/#tag/Roles/operation/updateRole
    static async updateRole(role_id, body) {
        return await API.try({name: getName(), role_id}, body);
    }
    // https://api.contabo.com/#tag/Roles/operation/deleteRole
    static async deleteRole(role_id) {
        return await API.try({name: getName(), role_id});
    }
    // https://api.contabo.com/#tag/Roles/operation/retrieveApiPermissionsList
    static async retrieveApiPermissionsList() {
        return await API.try({name: getName()});
    }
    // https://api.contabo.com/#tag/Roles-Audits/operation/retrieveRoleAuditsList
    static async retrieveRoleAuditsList(query) {
        return await API.try({name: getName()}, query);
    }

    /**
    * ■ SECRETS::
    * The Secret Management API allows you to store and manage your passwords and 
    * ssh-keys. Usage of the Secret Management API is purely optional. As a 
    * convenience feature e.g. it allows you to reuse SSH-keys easily.
    */

    static get secrets() {
        return this.getCategoryFunctions(getName());
    }

    // https://api.contabo.com/#tag/Secrets/operation/retrieveSecretList
    static async retrieveSecretList(query) {
        return await API.try({name: getName()}, query);
    }
    // https://api.contabo.com/#tag/Secrets/operation/createSecret
    static async createSecret(body) {
        return await API.try({name: getName()}, body);
    }
    // https://api.contabo.com/#tag/Secrets/operation/retrieveSecret
    static async retrieveSecret(secret_id) {
        return await API.try({name: getName(), secret_id});
    }
    // https://api.contabo.com/#tag/Secrets/operation/updateSecret
    static async updateSecret(secret_id) {
        return await API.try({name: getName(), secret_id});
    }
    // https://api.contabo.com/#tag/Secrets/operation/deleteSecret
    static async deleteSecret(secret_id) {
        return await API.try({name: getName(), secret_id});
    }
    // https://api.contabo.com/#tag/Secrets-Audits/operation/retrieveSecretAuditsList
    static async retrieveSecretAuditsList(query) {
        return await API.try({name: getName()}, query);
    }
    // End of class <3
}
