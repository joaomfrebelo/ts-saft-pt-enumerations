/**
 * Source billing documents and Payments source billing
 */
export enum SourceBilling {

    /**
     * Document created in the invoicing program;
     */
    P = "P",

    /**
     * Document integrated and produced in a different invoicing program
     */
    I = "I",

    /**
     * Recovered or manually issued document
     */
    M = "M"
}