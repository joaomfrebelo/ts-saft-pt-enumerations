/**
 * Payments tax code
 */
export enum PaymentTaxCode {
    /**
     * Reduced tax rate
     */
    RED = "RED",

    /**
     * Intermediate tax rate
     */
    INT = "INT",

    /**
     * Normal tax rate
     */
    NOR = "NOR",

    /**
     * Exempted;
     */
    ISE = "ISE",

    /**
     * Others, applicable to the special VAT regimes.<br>
     * In case field 2.5.1.1. – TaxType = IS, it shall be filled in with:<br>
     * The correspondent code of the Stamp Duty’s table;<br>
     * In case it is not subject to tax it shall be filled in with “NS”.
     * In receipts issued without tax discriminated it shall be filled in with “NA”.
     *
     */
    OUT = "OUT",

    /**
     * In receipts issued without tax discriminated it shall be filled in with “NA”
     */
    NS = "NA"
}