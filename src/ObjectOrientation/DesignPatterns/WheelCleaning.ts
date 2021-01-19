// strategy pattern - an interface and two strategies

export interface WheelCleaning {
    cleanWheels(): void;
}
export class BasicWheelCleaning implements WheelCleaning {
    cleanWheels() {
        console.log('Soaping Wheel');
        console.log('Brushing wheel');
    }
}
export class ExecutiveWheelCleaning extends BasicWheelCleaning {
    cleanWheels() {
        super.cleanWheels();
        console.log('Waxing Wheel');
        console.log('Rinsing Wheel');
    }
}