import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';

import { BeaconV1 } from '../interfaces/data/version1/BeaconV1';

export interface IBeaconsPersistence {
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<BeaconV1>) => void): void;
    
    getOneById(correlationId: string, id: string, 
        callback: (err: any, item: BeaconV1) => void): void;
    
    getOneByUdi(correlationId: string, udi: string, 
        callback: (err: any, item: BeaconV1) => void): void;

    create(correlationId: string, item: BeaconV1, 
        callback: (err: any, item: BeaconV1) => void): void;
    
    update(correlationId: string, item: BeaconV1, 
        callback: (err: any, item: BeaconV1) => void): void;

    deleteById(correlationId: string, id: string, 
        callback: (err: any, item: BeaconV1) => void): void;
}