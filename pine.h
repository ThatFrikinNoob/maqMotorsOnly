#ifndef PINE
#define PINE

 DevicePin *getPinAddress(int id);
 int digitalReadPin(DigitalPin name);
 void digitalWritePin(DigitalPin name, int value);
 int analogReadPin(AnalogPin name);
 void analogWritePin(AnalogPin name, int value);
 void analogSetPeriod(AnalogPin name, int micros);
 void onPulsed(DigitalPin name, PulseValue pulse, Action body);
 int pulseDuration();
 int pulseIn(DigitalPin name, PulseValue value, int maxDuration = 2000000);
 
#endif
