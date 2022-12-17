/**
 * Type of program
 */
export enum TaxAccountingBasis {

    /**
     * Accounting
     */
    C ="C",

    /**
     * Invoices issued by third parties
     */
    E ="E",

    /**
     * Invoicing
     */
    F ="F",

    /**
     * Invoicing and accounting integrated data
     */
    I ="I",

    /**
     * Invoicing partial data
     */
    P ="P",

    /**
     * Receipts
     */
    R ="R",

    /**
     * Self-billing
     */
    S ="S",

    /**
     * Transport documents
     */
    T ="T",
}