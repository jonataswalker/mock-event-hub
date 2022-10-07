import { Message } from "rhea";
export interface CreateCbsAcceptedOptions {
    correlationId?: string;
    toLinkName?: string;
}
export declare function createCbsAccepted(options?: CreateCbsAcceptedOptions): Message;
