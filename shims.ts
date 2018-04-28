

//% weight=10 color=#008B00 icon="\uf1eb" block="DFIR"
namespace IR{

    //% advanced=true shim=IR::init
    function init(pin: Pins):void{
        return
    }

    //% blockId=ir_init2
    //% block="connect ir receiver to pin %pin"
    export function init2(pin: Pins): void{
        init(pin)
        
    }
      
    //% blockId=ir_received_left_event
    //% block="on |%btn| button pressed" shim=IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;
  
  
}