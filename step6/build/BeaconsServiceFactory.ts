import { Factory, Descriptor } from 'pip-services-commons-node';

import { BeaconsMemoryPersistence } from '../../step3/persistence/BeaconsMemoryPersistence';
import { BeaconsFilePersistence } from '../../step3/persistence/BeaconsFilePersistence';
import { BeaconsMongoDbPersistence } from '../../step3/persistence/BeaconsMongoDbPersistence';
import { BeaconsController } from '../../step4/logic/BeaconsController';
import { BeaconsHttpServiceV1 } from '../../step5/services/version1/BeaconsHttpServiceV1';

export class BeaconsServiceFactory extends Factory{
    public static MemoryPersistenceDescriptor = new Descriptor('pip-samples-beacons', 'persistence', 'memory', '*', '1.0');
    public static FilePersistenceDescriptor = new Descriptor('pip-samples-beacons', 'persistence', 'file', '*', '1.0');
    public static MongoDbPersistenceDescriptor = new Descriptor('pip-samples-beacons', 'persistence', 'mongodb', '*', '1.0');
    public static ControllerDescriptor = new Descriptor('pip-samples-beacons', 'controller', 'default', '*', '1.0');
    public static HttpServiceV1Descriptor = new Descriptor('pip-samples-beacons', 'service', 'http', '*', '1.0');
    
    constructor(){
        super();

        this.registerAsType(BeaconsServiceFactory.MemoryPersistenceDescriptor, BeaconsMemoryPersistence);
        this.registerAsType(BeaconsServiceFactory.FilePersistenceDescriptor, BeaconsFilePersistence);
        this.registerAsType(BeaconsServiceFactory.MongoDbPersistenceDescriptor, BeaconsMongoDbPersistence);
        this.registerAsType(BeaconsServiceFactory.ControllerDescriptor, BeaconsController);
        this.registerAsType(BeaconsServiceFactory.HttpServiceV1Descriptor, BeaconsHttpServiceV1);
    }
}