/**
 * The Invoice type without the types used by insurance companies
 */
export enum InvoiceTypeGeneral {

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

}