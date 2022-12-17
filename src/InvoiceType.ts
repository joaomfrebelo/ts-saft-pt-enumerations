

/**
 * Invoice type
 */
export enum InvoiceType{
    /**
     * Invoice
     */
    FT = "FT",

    /**
     * Simplified Invoice issued according to article 40 of the VAT code
     */
    FS = "FS",

    /**
     * Invoice-receipt
     */
    FR = "FR",

    /**
     * Debit note
     */
    ND = "ND",

    /**
     * Credit note
     */
    NC = "NC",

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