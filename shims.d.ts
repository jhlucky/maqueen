// Auto-generated. Do not edit.


let cb: Action
    //% color=50 weight=80
    //% icon="\uf1eb"
declare namespace IR {
  
    class Packeta {
        /**
         * Obloq receives commands.
         */
        public mye: string;
        /**
         * Obloq receives the message content.
         */
        public myparam: string;
    }

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="on |%btn| button pressed" shim=IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="connect ir receiver to %pin" shim=IR::init
    function init(pin: Pins): void;
    
    
    
    
    
    
}

// Auto-generated. Do not edit. Really.
