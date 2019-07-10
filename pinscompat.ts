//% noRefCounting fixedInstances
interface DigitalInOutPin {
    digitalRead(): boolean;

    digitalWrite(value: boolean): void;

    onPulsed(pulse: PulseValue, body: () => void): void;

    onEvent(event: PinEvent, body: () => void): void;

    pulseIn(value: PulseValue, maxDuration?: number): number;

    setPull(pull: PinPullMode): void;
}

//% noRefCounting fixedInstances
interface AnalogInPin extends DigitalInOutPin {
    analogRead(): number;
}

//% noRefCounting fixedInstances
interface AnalogOutPin extends DigitalInOutPin {
    analogWrite(value: number): void;
}

//% noRefCounting fixedInstances
interface AnalogInOutPin extends AnalogInPin, AnalogOutPin {
}

//% noRefCounting fixedInstances
interface PwmOnlyPin extends DigitalInOutPin, AnalogOutPin {
    //% parts=microservo trackArgs=0
    analogSetPeriod(period: number): void;

    //% parts=microservo trackArgs=0
    servoWrite(value: number): void;

    //% parts=microservo trackArgs=0
    servoSetPulse(duration: number): void;
}

//% noRefCounting fixedInstances
interface PwmPin extends PwmOnlyPin, DigitalInOutPin, AnalogInPin {
}

//% noRefCounting fixedInstances
class DevicePin implements AnalogInPin, AnalogOutPin, AnalogInOutPin, PwmOnlyPin {
    public id: number;
    constructor(id: number) {
        this.id = id;
    }

    protected digitalId(): DigitalPin {
        return <DigitalPin>this.id;
    }

    protected analogId(): AnalogPin {
        return <AnalogPin>this.id;
    }

    digitalRead(): boolean {
        return pins.digitalReadPin(this.digitalId()) != 0;
    }

    digitalWrite(value: boolean): void {
        pins.digitalWritePin(this.digitalId(), value ? 1 : 0);
    }

    onPulsed(pulse: PulseValue, body: () => void): void {
        pins.onPulsed(this.digitalId(), pulse, body);
    }

    onEvent(event: PinEvent, body: () => void): void {
        // TODO
    }

    pulseIn(value: PulseValue, maxDuration?: number): number {
        return pins.pulseIn(this.digitalId(), value, maxDuration);
    }

    setPull(pull: PinPullMode): void {
        pins.setPull(this.digitalId(), pull);
    }

    analogRead(): number {
        return pins.analogReadPin(this.analogId());
    }

    analogWrite(value: number): void {
        pins.analogWritePin(this.analogId(), value);
    }

    analogSetPeriod(period: number): void {
        pins.analogSetPeriod(this.analogId(), period);
    }

    servoWrite(value: number): void {
        pins.servoWritePin(this.analogId(), value);
    }

    servoSetPulse(duration: number): void {
        pins.servoSetPulse(this.analogId(), duration);
    }
}

namespace pins {
    /**
     * Pin P0
     */
    //% fixedInstance whenUsed
    export const P0: PwmPin = new DevicePin(DigitalPin.P0);

    /**
     * Pin P1
     */
    //% fixedInstance whenUsed
    export const P1: PwmPin = new DevicePin(DigitalPin.P1);

    /**
     * Pin P2
     */
    //% fixedInstance whenUsed
    export const P2: PwmPin = new DevicePin(DigitalPin.P2);

    /**
     * Pin P3
     */
    //% fixedInstance whenUsed
    export const P3: AnalogInPin = new DevicePin(DigitalPin.P3);

    /**
     * Pin P4
     */
    //% fixedInstance whenUsed
    export const P4: AnalogInPin = new DevicePin(DigitalPin.P4);

    /**
     * Pin P5
     */
    //% fixedInstance whenUsed
    export const P5: DigitalInOutPin = new DevicePin(DigitalPin.P5);

    /**
     * Pin P6
     */
    //% fixedInstance whenUsed
    export const P6: DigitalInOutPin = new DevicePin(DigitalPin.P6);

    /**
     * Pin P7
     */
    //% fixedInstance whenUsed
    export const P7: DigitalInOutPin = new DevicePin(DigitalPin.P7);

    /**
     * Pin P8
     */
    //% fixedInstance whenUsed
    export const P8: DigitalInOutPin = new DevicePin(DigitalPin.P8);

    /**
     * Pin P9
     */
    //% fixedInstance whenUsed
    export const P9: DigitalInOutPin = new DevicePin(DigitalPin.P9);

    /**
     * Pin P10
     */
    //% fixedInstance whenUsed
    export const P10: AnalogInPin = new DevicePin(DigitalPin.P10);

    /**
     * Pin P3
     */
    //% fixedInstance whenUsed
    export const P11: DigitalInOutPin = new DevicePin(DigitalPin.P11);

    /**
     * Pin P12
     */
    //% fixedInstance whenUsed
    export const P12: DigitalInOutPin = new DevicePin(DigitalPin.P12);

    /**
     * Pin P13
     */
    //% fixedInstance whenUsed
    export const P13: DigitalInOutPin = new DevicePin(DigitalPin.P13);

    /**
     * Pin P14
     */
    //% fixedInstance whenUsed
    export const P14: DigitalInOutPin = new DevicePin(DigitalPin.P14);

    /**
     * Pin P15
     */
    //% fixedInstance whenUsed
    export const P15: DigitalInOutPin = new DevicePin(DigitalPin.P15);

    /**
     * Pin P16
     */
    //% fixedInstance whenUsed
    export const P16: DigitalInOutPin = new DevicePin(DigitalPin.P16);

    /**
     * Pin P19
     */
    //% fixedInstance whenUsed
    export const P19: DigitalInOutPin = new DevicePin(DigitalPin.P19);

    /**
     * Pin P19
     */
    //% fixedInstance whenUsed
    export const P20: DigitalInOutPin = new DevicePin(DigitalPin.P20);
}
