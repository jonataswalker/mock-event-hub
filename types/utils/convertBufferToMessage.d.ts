/// <reference types="node" />
import { Message } from "rhea";
/**
 * Converts `Buffer`s received from `onMessage` events to an array of messages.
 */
export declare function convertBufferToMessages(buf: Buffer): Message[];
