/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type usageRecord = {
    /**
     * Type of object is always `usageRecord`.
     */
    object: string;
    /**
     * Timestamp representing the inclusive lower bound of the aggregation period (e.g. the start of a 24 hour period, subscription period or user-defined set of dates)
     */
    start: string;
    /**
     * Timestamp representing the exclusive upper bound of the aggregation period (e.g. the end of a 24 hour period, subscription period or user-defined set of dates).
     */
    end: string;
    /**
     * Amount of data used in bytes.
     */
    data: number;
    /**
     * Amount of voice usage in seconds.
     */
    voice: number;
    /**
     * Amount of SMS sent and received.
     */
    sms: number;
};

