/**
 * Movement fo goods document type
 */
export enum MovementType {

    /**
     * Delivery note
     */
    GR ="GR",

    /**
     * Transport guide (include here the global transport documents)
     */
    GT ="GT",

    /**
     * Transport document for own fixed assets
     */
    GA ="GA",

    /**
     * Consignment note
     */
    GC ="GC",

    /**
     * Return note
     */
    GD ="GD"
}