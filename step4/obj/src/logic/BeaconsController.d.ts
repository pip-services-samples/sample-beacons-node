import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { IConfigurable } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { IReferenceable } from 'pip-services-commons-node';
import { BeaconV1 } from '../../src/data/version1/BeaconV1';
import { IBeaconsController } from './IBeaconsController';
export declare class BeaconsController implements IBeaconsController, IConfigurable, IReferenceable {
    private _persistence;
    constructor();
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<BeaconV1>) => void): void;
    getBeaconById(correlationId: string, beaconId: string, callback: (err: any, page: BeaconV1) => void): void;
    getBeaconByUdi(correlationId: string, beaconId: string, callback: (err: any, page: BeaconV1) => void): void;
    calculatePosition(correlationId: string, siteId: string, udis: string[], callback: (err: any, position: any) => void): void;
    createBeacon(correlationId: string, beacon: BeaconV1, callback: (err: any, beacon: BeaconV1) => void): void;
    updateBeacon(correlationId: string, beacon: BeaconV1, callback: (err: any, beacon: BeaconV1) => void): void;
    deleteBeaconById(correlationId: string, beaconId: string, callback: (err: any, beacon: BeaconV1) => void): void;
}
