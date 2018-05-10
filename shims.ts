let cb: Action
let mycb: Action
let e        = "1"
let param    = "9"





//% weight=10 color=#008B00 icon="\uf1eb" block="DFIR"
namespace IR{
  
    export class Packeta {
        public mye: string;
        public myparam: string;
    }
    
   

    //% advanced=true shim=IR::init
    function init(pin: Pins):void{
        return
    }
    //% advanced=true shim=IR::onPressEvent
    function onPressEvent(btn: RemoteButton,body: Action):void{
        return
    }
     //% advanced=true shim=IR::getParam
    function getParam():string {
        return ""
    }

    //% blockId=ir_init2
    //% block="connect ir receiver to pin|%pin"
    export function initIR(pin: Pins): void{
        init(pin)
    }
  
    //% weight=62
    //% blockGap=50
    //% mutate=objectdestructuring
    //% mutateText=Packeta
    //% mutateDefaults="myparam:message"
    //% blockId=DFIR_callbackUser block="on obloq received"
    export function DFIR_callbackUser(cb: (packet: Packeta) => void) {
        DFIR_callback(() => {
            const packet = new Packeta();
            packet.mye = e;
            param=getParam();
            packet.myparam = param;
            cb(packet)
        });
    }
    
    function DFIR_callback(a: Action): void{
        cb=a
        onPressEvent(0,cb)
        onPressEvent(1,cb)
        onPressEvent(2,cb)
        onPressEvent(4,cb)
        onPressEvent(5,cb)
        onPressEvent(6,cb)
        onPressEvent(8,cb)
        onPressEvent(9,cb)
        onPressEvent(0x0a,cb)
        onPressEvent(0x0c,cb)
        onPressEvent(0x0d,cb)
        onPressEvent(0x0e,cb)
        onPressEvent(0x10,cb)
        onPressEvent(0x11,cb)
        onPressEvent(0x12,cb)
        onPressEvent(0x14,cb)
        onPressEvent(0x15,cb)
        onPressEvent(0x16,cb)
        onPressEvent(0x18,cb)
        onPressEvent(0x19,cb)
        onPressEvent(0x1a,cb)
    }
    
    
  
}