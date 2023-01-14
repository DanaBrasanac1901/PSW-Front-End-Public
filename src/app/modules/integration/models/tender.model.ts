export class Tender {
    id: number = 0;
    hospitalName: string = '';
    expiration: Date = new Date();
    amountOfO: number=0.0;
    amountOfAB: number=0.0;
    amountOfA: number=0.0;
    amountOfB: number=0.0;
    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.hospitalName = obj.hospitalName;
            this.expiration = obj.expiration;
            this.amountOfO = obj.amountOfO;
            this.amountOfAB = obj.amountOfAB;      
            this.amountOfA = obj.amountOfA;
            this.amountOfB = obj.amountOfB;              
        }
    }
}