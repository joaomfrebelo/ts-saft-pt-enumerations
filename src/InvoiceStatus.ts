/**
 * Invoice status
 */
export enum InvoiceStatus {

    /**
     * Normal
     */
    N = "N",

    /**
     * Self billing
     */
    S = "S",

    /**
     * Cancelled document
     */
    A = "A",

    /**
     * Summary document for other documents created in other applications and generated in this application
     */
    R = "R",

    /**
     * Invoiced document
     */
    F = "F"
}