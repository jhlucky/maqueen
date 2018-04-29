
let cb:Action

//% weight=10 color=#008B00 icon="\uf1eb" block="DFIR"
namespace IR{
    //% advanced=true shim=IR::init
    function init(pin: Pins):void{
        return
    }
    //% advanced=true shim=IR::onPressEvent
    function onPressEvent(btn: RemoteButton,body: Action):void{
        return
    }
    //% advanced=true shim=IR::onPacket
    function onPacket(pack: Packeta,body: Action):void{
        return
    }

    //% blockId=ir_init2
    //% block="connect ir receiver to pin %pin"
    export function initIR(pin: Pins): void{
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
    //% blockId=IRcallback block="on receive IR"
    export function IRcallback(cb: (packet: Packeta) => void) {
        setIRcallback(() => {
            const packet = new Packeta();
            packet.myparam = "7";
            cb(packet)
        });
    }
    
    function setIRcallback(a: Action): void{
        //onPressEvent(0,a)
        //cb=a
    }
 
}