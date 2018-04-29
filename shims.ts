// Auto-generated. Do not edit.



//% weight=10 color=#008B00 icon="\uf1eb" block="DFIR"
namespace DFIR {

    //% advanced=true shim=IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body:Action): void{
      return
    }

    //% advanced=true shim=IR::init
    function init(pin: Pins): void{
      return
    }
    
    //% blockId=ir_received_left_event22
    //% block="on |%btn| button pressed"
    export function onPressEvent2(btn:RemoteButton,body: () => void):void{
      onPressEvent(btn,body)
    }
    
    //% blockId=ir_init22
    //% block="connect ir receiver to %pin"
    export function init2(pin:Pins):void{
      init(pin)
    }
}

// Auto-generated. Do not edit. Really.
