"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_container_node_1 = require("pip-services-container-node");
const pip_services_rpc_node_1 = require("pip-services-rpc-node");
const BeaconsServiceFactory_1 = require("../build/BeaconsServiceFactory");
class BeaconsProcess extends pip_services_container_node_1.ProcessContainer {
    constructor() {
        super('beacons', 'Beacons microservice');
        this._factories.add(new BeaconsServiceFactory_1.BeaconsServiceFactory());
        this._factories.add(new pip_services_rpc_node_1.DefaultRpcFactory());
    }
}
exports.BeaconsProcess = BeaconsProcess;
//# sourceMappingURL=BeaconsProcess.js.map