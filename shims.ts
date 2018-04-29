// Auto-generated. Do not edit.



//% weight=10 color=#008B00 icon="\uf1eb" block="DFIR"
namespace DFIR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="on |%btn| button pressed" shim=IR::onPressEvent
    export function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="connect ir receiver to %pin" shim=IR::init
    export function init(pin: Pins): void;
}

// Auto-generated. Do not edit. Really.
