/**
* ■ ENDPOINT_DATAS::
* List of Contabo.com API endpoints and the desired request type
*/
const ENDPOINT_DATAS = {
    instances: {
        retrieveInstancesList: ['get', 'compute/instances'],
        createInstance: ['post', 'compute/instances'],
        retrieveInstance: ['get', 'compute/instances/instance_id'],
        retrieveInstancesAuditsList: ['get', 'compute/instances/audits'],
        patchInstance: ['patch', 'compute/instances/instance_id'],
        reinstallInstance: ['put', 'compute/instances/instance_id'],
        cancelInstance: ['post', 'compute/instances/instance_id/cancel'],
        upgradeInstance: ['post', 'compute/instances/instance_id/upgrade'],
        start: ['post', 'compute/instances/instance_id/actions/start'],
        restart: ['post', 'compute/instances/instance_id/actions/restart'],
        stop: ['post', 'compute/instances/instance_id/actions/stop'],
        shutdown: ['post', 'compute/instances/instance_id/actions/shutdown'],
        retrieveInstancesActionsAuditsList: ['get', 'compute/instances/actions/audits'],
    },
    snapshots: {
        retrieveSnapshotList: ['get', 'compute/instances/instance_id/snapshots'],
        createSnapshot: ['post', 'compute/instances/instance_id/snapshots'],
        retrieveSnapshot: ['get', 'compute/instances/instance_id/snapshots/snapshot_id'],
        updateSnapshot: ['patch', 'compute/instances/instance_id/snapshots/snapshot_id'],
        deleteSnapshot: ['delete', 'compute/instances/instance_id/snapshots/snapshot_id'],
        rollbackSnapshot: ['post', 'compute/instances/instance_id/snapshots/snapshot_id/rollback'],
        retrieveSnapshotsAuditsList: ['get', 'compute/snapshots/audits'],
    },
    images: {
        retrieveImageList: ['get', 'compute/images'],
        createCustomImage: ['post', 'compute/images'],
        retrieveImage: ['get', 'compute/images/image_id'],
        updateImage: ['patch', 'compute/images/image_id'],
        deleteImage: ['delete', 'compute/images/image_id'],
        retrieveCustomImagesStats: ['get', 'compute/images/stats'],
        retrieveImageAuditsList: ['get', 'compute/images/audits'],
    },
    storages: {
        retrieveDataCenterList: ['get', 'data-centers'],
        retrieveObjectStorageList: ['get', 'object-storages'],
        createObjectStorage: ['post', 'object-storages'],
        retrieveObjectStorage: ['get', 'object-storages/storage_id'],
        upgradeObjectStorage: ['post', 'object-storages/storage_id/resize'],
        cancelObjectStorage: ['patch', 'object-storages/storage_id/cancel'],
        retrieveObjectStoragesStats: ['get', 'object-storages/storage_id/stats'],
        retrieveObjectStorageAuditsList: ['get', 'object-storages/audits'],
    },
    networks: {
        retrievePrivateNetworkList: ['get', 'private-networks'],
        createPrivateNetwork: ['post', 'private-networks'],
        patchPrivateNetwork: ['patch', 'private-networks/network_id'],
        retrievePrivateNetwork: ['get', 'private-networks/network_id'],
        deletePrivateNetwork: ['delete', 'private-networks/network_id'],
        assignInstancePrivateNetwork: ['post', 'private-networks/network_id/instances/instance_id'],
        unassignInstancePrivateNetwork: ['delete', 'private-networks/network_id/instances/instance_id'],
        retrievePrivateNetworkAuditsList: ['get', 'private-networks/audits'],
    },
    tags: {
        retrieveTagList: ['get', 'tags'],
        createTag: ['post', 'tags'],
        retrieveTag: ['get', 'tags/tag_id'],
        updateTag: ['patch', 'tags/tag_id'],
        deleteTag: ['delete', 'tags/tag_id'],
        retrieveTagAuditsList: ['get', 'tags/audits'],
        retrieveAssignmentList: ['get', 'tags/tag_id/assignments'],
        retrieveAssignment: ['get', 'tags/tag_id/assignments/resource_type/resource_id'],
        createAssignment: ['post', 'tags/tag_id/assignments/resource_type/resource_id'],
        deleteAssignment: ['delete', 'tags/tag_id/assignments/resource_type/resource_id'],
        retrieveAssignmentsAuditsList: ['get', 'tags/assignments/audits'],
    },
    users: {
        retrieveUserList: ['get', 'users'],
        createUser: ['post', 'users'],
        retrieveUser: ['get', 'users/user_id'],
        updateUser: ['patch', 'users/user_id'],
        deleteUser: ['delete', 'users/user_id'],
        resetPassword: ['post', 'users/user_id/reset-password'],
        resendEmailVerification: ['post', 'users/user_id/resend-email-verification'],
        retrieveUserClient: ['get', 'users/client'],
        generateClientSecret: ['put', 'users/client/secret'],
        getObjectStorageCredentials: ['get', 'users/user_id/object-storages/credentials'],
        regenerateCredentials: ['patch', 'users/user_id/object-storages/credentials'],
        retrieveUserAuditsList: ['patch', 'users/audits'],
    },
    roles: {
        retrieveRoleList: ['get', 'roles'],
        createRole: ['post', 'roles'], 
        retrieveRole: ['get', 'roles/role_id'], 
        updateRole: ['put', 'roles/role_id'], 
        deleteRole: ['delete', 'roles/role_id'], 
        retrieveApiPermissionsList: ['get', 'roles/api-permissions'],
        retrieveRoleAuditsList: ['get', 'roles/audits'],
    },
    secrets: {
        retrieveSecretList: ['get', 'secrets'],
        createSecret: ['post', 'secrets'],
        retrieveSecret: ['get', 'secrets/secret_id'],
        updateSecret: ['patch', 'secrets/secret_id'],
        deleteSecret: ['delete', 'secrets/secret_id'],
        retrieveSecretAuditsList: ['get', 'secrets/audits'],
    },
}
// stores endpoint categories and uncategorized endpoints
const CATEGORIES = {};
const ENDPOINTS = {};
for (const type of Object.keys(ENDPOINT_DATAS)) {
    CATEGORIES[type] = CATEGORIES[type] || [];
    for (const call of Object.keys(ENDPOINT_DATAS[type])) {
        ENDPOINTS[call] = ENDPOINT_DATAS[type][call];
        CATEGORIES[type].push(call);
    }
}
module.exports={CATEGORIES,ENDPOINTS};
// End Code <3