import { CommandableHttpService } from 'pip-services-net-node';
import { Descriptor } from 'pip-services-commons-node';

export class BeaconsHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/beacons');
        this._dependencyResolver.put('controller', new Descriptor('pip-samples-beacons', 'controller', '*', '*', '1.0'));
    }
}