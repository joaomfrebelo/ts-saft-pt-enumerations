/**
 * Product type
 */
export enum ProductType {

    /**
     * Products
     */
    P ="P",

    /**
     * Services
     */
    S ="S",

    /**
     * Others (e.g. charged freights, advance payments received or sale of assets)
     */
    O ="O",

    /**
     * Excise duties - (e.g. IABA, ISP, IT);<br>
     */
    E ="E",

    /**
     * Taxes, tax rates and para fiscal charges except VAT and Stamp Duty
     * which shall appear in table 2.5. – TaxTable and Excise Duties which
     * shall be filled in with the "E" code.
     */
    I ="I"
}