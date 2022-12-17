/**
 * Work documents type
 */
export enum WorkType {

    /**
     * Table checks
     */
    CM ="CM",

    /**
     * Consignment credit note
     */
   CC ="CC",

    /**
     * Consignment invoice according to art. 38 of the Portuguese VAT Code;
     */
   FC ="FC",

    /**
     * Worksheets [to record the service rendered or the work performed];
     */
   FO ="FO",

    /**
     * Purchase order
     */
   NE ="NE",

    /**
     * Budgets
     */
   OU ="OU",

    /**
     * Others [not specified in the remaining WorkTypes]
     */
   OR ="OR",

    /**
     * Pro forma invoice
     */
   PF ="PF",

    /**
     * Premium or Premium receipt
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
     * Accepted reinsurance
     */
   RA ="RA"
}