// Auto-generated. Do not edit.



    //% color=50 weight=80
    //% icon="\uf1eb"
declare namespace IR {
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
    //% weight=62
    //% blockGap=50
    //% mutate=objectdestructuring
    //% mutateText=Packeta
    //% mutateDefaults="myparam:message"
    //% blockId=obloq_mqttCallbackUser block="on obloq received"
    function obloq_mqttCallbackUser(cB:(packet: Packeta)  => void):void;

    
    

    
    
    
}

// Auto-generated. Do not edit. Really.
