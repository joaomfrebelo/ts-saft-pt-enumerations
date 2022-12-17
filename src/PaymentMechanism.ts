/**
 * Payment mechanism
 */
export enum PaymentMechanism {

    /**
     * Credit card
     */
    CC ="CC",

    /**
     * Debit card
     */
   CD ="CD",

    /**
     * Bank cheque
     */
   CH ="CH",

    /**
     * International Letter of Credit
     */
   CI ="CI",

    /**
     * Gift cheque or gift card
     */
   CO ="CO",

    /**
     * Balance compensation in current account
     */
   CS ="CS",

    /**
     * Electronic Money, for example, on fidelity or points card
     */
   DE ="DE",

    /**
     * Commercial Bill
     */
   LC ="LC",

    /**
     * Payment references for ATM
     */
   MB ="MB",

    /**
     * Cash
     */
   NU ="NU",

    /**
     * Other means not mentioned
     */
   OU ="OU",

    /**
     * Exchange of goods
     */
   PR ="PR",

    /**
     * Banking transfer or authorized direct debit
     */
   TB ="TB",

    /**
     * Non-wage compensation titles regardless of their support
     */
   TR ="TR"
}