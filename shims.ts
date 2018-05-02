let cb: Action
let mycb: Action
let e        = "1"
let param    = "9"

//% weight=10 color=#008B00 icon="\uf1eb" block="DFIR"
namespace IR{
  
    export class Packeta {
        myparam: string;
    }
    

    //% advanced=true shim=IR::init
    function init(pin: Pins):void{
        return
    }
    //% advanced=true shim=IR::onPressEvent
    function onPressEvent(btn: RemoteButton,body: Action):void{
        return
    }
    
    //% advanced=true shim=IR::onPressEvent3
    function onPressEvent3(btn: RemoteButton,body: Action):void{
        return
    }

    //% blockId=ir_init2
    //% block="connect ir receiver to pin %pin"
    export function init2(pin: Pins): void{
        init(pin)
        
    }
      
    //% blockId=ir_received_left_event2
    //% block="on |%btn| button pressed"
    export function onPressEvent2(btn: RemoteButton, body: Action): void{
        onPressEvent(btn,body)
    }
  
  
    //% weight=62
    //% blockGap=50
    //% mutate=objectdestructuring
    //% mutateText=Packeta
    //% mutateDefaults="myparam:message"
    //% blockId=obloq_mqttCallbackUser block="on obloq received"
    export function obloq_mqttCallbackUser(cb: (packet: Packeta) => void) {
        obloq_mqttCallback(() => {
            const packet = new Packeta();
            packet.myparam = param;
            cb(packet)
        });
    }
    
    function obloq_mqttCallback(a: Action): void{
        cb = a
        //onPressEvent3(0,cb)
    }
    

  
}