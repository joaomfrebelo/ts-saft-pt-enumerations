/**
 * Movement of goods documents status
 */
export enum MovementStatus {

    /**
     * Normal
     */
    N ="N",

    /**
     * On behalf of third parties
     */
    T ="T",

    /**
     * Cancelled document
     */
    A ="A",

    /**
     * Invoiced document
     */
    F ="F",

    /**
     * Summary document for other documents created in other
     * applications and generated in this application.
     */
    R ="R",
}