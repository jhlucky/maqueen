let cb: Action
let mycb: Action
let e        = "1"
let param    = 0
const MOTER_ADDRESSS = 0x10

enum PingUnit {
//% block="cm"
Centimeters,
//% block="μs"
MicroSeconds
}


//% weight=10 color=#008B00 icon="\uf1eb" block="DFRobot miniQ"
namespace maqueen{
  
    export class Packeta {
        public mye: string;
        public myparam: number;
    }
    
    export enum Motors {
        //% blockId="M1" block="M1"
        M1 = 0x0,
        //% blockId="M2" block="M2"
        M2 = 0x1
    }
    
    export enum Dir {
        //% blockId="CW" block="CW"
        CW = 0x0,
        //% blockId="CCW" block="CCW"
        CCW = 0x1
    }
    
    export enum Patrol{
        //% blockId="PatrolLeft" block="PatrolLeft"
        PatrolLeft=13,
        //% blockId="PatrolRight" block="PatrolRight"
        PatrolRight=14
    }
    
    export enum LED{
        //% blockId="LEDLeft" block="LEDLeft"
        LEDLeft=8,
        //% blockId="LEDRight" block="LEDRight"
        LEDRight=12
    }
    
    export enum LEDswitch{
        //% blockId="turnOn" block="turnOn"
        turnOn=0x01,
        //% blockId="turnOff" block="turnOff"
        turnOff=0x00
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
    function getParam():number {
        return 0
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
    
    //% blockId=ultrasonic_sensor block="sensor unit|%unit"
    //% weight=95
    export function sensor(unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(DigitalPin.P1, PinPullMode.PullNone);
        pins.digitalWritePin(DigitalPin.P1, 0);
        control.waitMicros(2);
        pins.digitalWritePin(DigitalPin.P1, 1);
        control.waitMicros(10);
        pins.digitalWritePin(DigitalPin.P1, 0);

        // read pulse
        let d = pins.pulseIn(DigitalPin.P2, PulseValue.High, maxCmDistance * 42);
        console.log("Distance: " + d/42);

        switch (unit) {
            case PingUnit.Centimeters: return d / 42;
            default: return d ;
        }
    }
    
    //% weight=90
    //% blockId=motor_MotorRun block="Motor|%index|dir|%Dir|speed|%speed"
    //% speed.min=0 speed.max=255
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    export function MotorRun(index: Motors, direction:Dir, speed: number): void {
        let buf = pins.createBuffer(3);
        if (index==0){
            buf[0]=0x00;
        }
        if (index==1){
            buf[0]=0x02;
        }
        buf[1]=direction;
        buf[2]=speed;
        pins.i2cWriteBuffer(0x10, buf);
    }
    
    //% weight=20
    //% blockId=motor_motorStop block="Motor stop|%index"
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2 
    export function motorStop(index: Motors):void {
        let buf = pins.createBuffer(3);
        if(index==0){
            buf[0]=0x00;
        }
        if(index==1){
            buf[0]=0x02;
        }
        buf[1]=0;
        buf[2]=0;
        pins.i2cWriteBuffer(0x10, buf);
    }
    
    //% weight=10
    //% blockId=motor_motorStopAll block="Motor Stop All"
    export function motorStopAll(): void {
        let buf = pins.createBuffer(3);
        buf[0]=0x00;
        buf[1]=0;
        buf[2]=0;
        pins.i2cWriteBuffer(0x10, buf);
        buf[0]=0x02;
        pins.i2cWriteBuffer(0x10, buf);
    }
    
    //% weight=20
    //% blockId=read_Patrol block="Read Patrol|%patrol"
    //% patrol.fieldEditor="gridpicker" patrol.fieldOptions.columns=2 
    export function readPatrol(patrol:Patrol):number{
        if(patrol==Patrol.PatrolLeft){
            return pins.digitalReadPin(DigitalPin.P13)
        }else if(patrol==Patrol.PatrolRight){
            return pins.digitalReadPin(DigitalPin.P14)
        }else{
            return -1
        } 
    }
    
    //% weight=20
    //% blockId=writeLED block="led|%led|ledswitch|%ledswitch"
    //% led.fieldEditor="gridpicker" led.fieldOptions.columns=2 
    //% ledswitch.fieldEditor="gridpicker" ledswitch.fieldOptions.columns=2
    export function writeLED(led:LED, ledswitch:LEDswitch):void{
        if(led==LED.LEDLeft){
            pins.digitalWritePin(DigitalPin.P8, ledswitch)
        }else if(led==LED.LEDRight){
            pins.digitalWritePin(DigitalPin.P12, ledswitch)
        }else{
            return
        } 
    }
    

  
}