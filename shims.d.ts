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
    
    //% weight=62
    //% blockGap=50
    //% mutate=objectdestructuring
    //% mutateText=Packeta
    //% mutateDefaults="myparam:message"
    //% blockId=obloq_mqttCallbackUser 
    //% block="on obloq received"
    function obloq_mqttCallbackUser(cb: (packet: Packeta) => void) {
        obloq_mqttCallback(() => {
            const packet = new Packeta();
            packet.mye = "111"
            packet.myparam = "333";
            cb(packet)
        });
    }
    
    function obloq_mqttCallback(a: Action): void{
        cb = a
    }
    
    function obloqforevers(Action a) {
    if (a != 0) {
          incr(a);
          create_fiber(forever_stubs, (void*)a);
        }
    }
  
    function forever_stubs(void *a) {
        runAction0((Action)a);
    }

    
    
    
}

// Auto-generated. Do not edit. Really.
