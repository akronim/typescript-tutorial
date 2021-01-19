// strategy pattern - an interface and two strategies

export interface BodyCleaning {
    cleanBody(): void;
}
export class BasicBodyCleaning implements BodyCleaning {
    cleanBody() {
        console.log('Soaping car');
        console.log('Rinsing Car');
    }
}
export class ExecutiveBodyCleaning extends BasicBodyCleaning {
    cleanBody() {
        super.cleanBody();
        console.log('Waxing car');
        console.log('Blow drying car');
    }
}