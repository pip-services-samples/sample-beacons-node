"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_rpc_node_1 = require("pip-services-rpc-node");
const pip_services_commons_node_1 = require("pip-services-commons-node");
class BeaconsHttpServiceV1 extends pip_services_rpc_node_1.CommandableHttpService {
    constructor() {
        super('v1/beacons');
        this._dependencyResolver.put('controller', new pip_services_commons_node_1.Descriptor('beacons', 'controller', '*', '*', '1.0'));
    }
}
exports.BeaconsHttpServiceV1 = BeaconsHttpServiceV1;
//# sourceMappingURL=BeaconsHttpServiceV1.js.map