


//% weight=10 color=#008B00 icon="\uf1eb" block="DFIR"
namespace DFIR{

  
  //% blockId=ir_received_left_event
  //% block="on |%btn| button pressed" shim=IR::onPressEvent
  export function onPressEvent(btn: RemoteButton, body: () => void):void{
    return
  }
  
  //% blockId=ir_init
  //% block="connect ir receiver to %pin" shim=IR::init
  export function init(pin: Pins): void{
    return
  }
    
  
  
  
  
}