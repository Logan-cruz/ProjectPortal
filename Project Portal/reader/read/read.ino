// for SPI Communication
#include <SPI.h>
#include <Adafruit_PN532.h>
#include <NfcAdapter.h>
PN532_SPI interface(SPI, 10); // create a PN532 SPI interface with the SPI CS terminal located at digital pin 10
NfcAdapter nfc = NfcAdapter(interface); // create an NFC adapter object
String tagId = "None";
 
void setup() 
{
 Serial.begin(115200);
 Serial.println("System initialized");
 nfc.begin();
}
 
void loop() 
{
 readNFC();
  Serial.println("reading...");
}
 
void readNFC() {
 if (nfc.tagPresent())
 {
   NfcTag tag = nfc.read();
   tag.print();
   tagId = tag.getUidString();
 }
 delay(1000);
}
