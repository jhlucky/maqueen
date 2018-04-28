#include "pxt.h"
#include <map>
#include <vector>
#include "ReceiverIR.h"
using namespace pxt;
typedef vector<Action> vA;






enum class Pins{
  P0=  3,
  P1=  2,
  P2=  1,
  P3=  4,
  P4=  5,
  P5=  17,
  P6=  12,
  P7=  11,
  P8=  18,
  P9=  10,
  P10= 6,
  P11= 26,
  P12= 20,
  P13= 23,
  P14= 22,
  P15= 21,
  P16= 16,
  P19= 0,
  P20= 30
};

enum class RemoteButton {
  Power = 0x0,
  VolUp = 0x01,
  FuncStop = 0x02,
  Left = 0x04,
  Suspended = 0x05,
  Right = 0x06,
  Down = 0x08,
  VolDonw = 0X09,
  Up = 0x0a,
  Zero = 0x0c,
  EQ = 0X0d,
  StRept = 0X0e,
  One = 0x10,
  Two = 0x11,
  Three = 0x12,
  Four = 0x14,
  Five = 0x15,
  Six = 0x16,
  Seven = 0x18,
  Eight = 0x19,
  Nine = 0x1a
};

//% color=50 weight=80
//% icon="\uf1eb"
namespace IR { 
  map<RemoteButton, vA> actions;
  map<RemoteButton, uint32_t> lastact;
  Timer tsb; 
  uint8_t buf[32];
  uint32_t now;
  ReceiverIR *rx;
  RemoteIR::Format fmt = RemoteIR::UNKNOWN;

  /**
  * button pushed.
  */
  //% blockId=ir_received_left_event
  //% block="on |%btn| button pressed"
  void onPressEvent(RemoteButton btn, Action body) {
    //if(actions.find(btn) == actions.end()) actions[btn] = new vector();
    actions[btn].push_back(body);
  }

  void cA(vA runner){for(int i=0;i<runner.size();i++){runAction0(runner[i]);} }

  void onReceivable(){
    int x = rx->getData(&fmt, buf, 32 * 8);
    if(actions.find((RemoteButton)buf[2]) == actions.end()) return;
    now = tsb.read_ms();
    if(now - lastact[(RemoteButton)buf[2]] < 100) return;
    lastact[(RemoteButton)buf[2]] = now;
    cA(actions[(RemoteButton)buf[2]]); 
  }

  void monitorIR(){
    while(1){
      while(rx->getState() != ReceiverIR::Received){ 
        uBit.sleep(50);
      }
      onReceivable();
    }
  }

  /**
  * initialises local variablesssss
  */
  //% blockId=ir_init
  //% block="connect ir receiver to %pin"
  void init(Pins pin){
    rx = new ReceiverIR((PinName)pin);
    tsb.start(); //interrupt timer for debounce
    create_fiber(monitorIR);
  }
  //% weight=62
  //% blockGap=50
  //% mutate=objectdestructuring
  //% mutateText=Packeta
  //% mutateDefaults="myparam:message"
  //% blockId=obloq_mqttCallbackUser block="on obloq received"
  void obloq_mqttCallbackUser(cb: (packet: Packeta) => void) {
        obloq_mqttCallback(() => {
            const packet = new Packeta();
            packet.mye = e
            packet.myparam = param;
            cb(packet)
        });
    }
  
  void obloq_mqttCallback(a: Action): void{
      cb = a
  }





  
}