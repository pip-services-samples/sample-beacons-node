import { Factory } from 'pip-services-components-node';
import { Descriptor } from 'pip-services-commons-node';
export declare class BeaconsClientFactory extends Factory {
    static NullClientDescriptor: Descriptor;
    static DirectClientDescriptor: Descriptor;
    static HttpClientDescriptor: Descriptor;
    constructor();
}
