import { ProcessContainer } from 'pip-services-container-node';
import { DefaultRpcFactory } from 'pip-services-rpc-node';
//import { DefaultOssFactory } from 'pip-services-mongodb-node';

import {BeaconsServiceFactory} from '../build/BeaconsServiceFactory';

export class BeaconsProcess extends ProcessContainer{
    public constructor(){
        super('beacons', 'Beacons microservice');

        this._factories.add(new BeaconsServiceFactory());
        this._factories.add(new DefaultRpcFactory());
        //this._factories.add(new DefaultOssFactory());
    }
}