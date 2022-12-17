/**
 * The Invoice types used in the by insurance companies
 */
export enum InvoiceTypeInsurance {

    /**
     * Premium or premium receipt;
     */
    RP ="RP",

    /**
     * Return insurance or receipt of return insurance
     */
    RE ="RE",

    /**
     * Imputation to co-insurance companies
     */
    CS ="CS",

    /**
     * Imputation to a leader co-insurance company
     */
    LD ="LD",

    /**
     * Accepted reinsurance. (a) For data up to 2012-12-31
     */
    RA ="RA"
}