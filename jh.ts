


//% weight=10 color=#008B00 icon="\uf1eb" block="DFIR"
namespace DFIR{

  

  //% blockId=ir_init
  //% block="connect ir receiver to %pin"
  export function init2(pin: Pins): void{
    return init(pin)
  }
    
  //% advanced=true shim=IR::init
  function init(pin: Pins):void{
    return
  }
  
  
}