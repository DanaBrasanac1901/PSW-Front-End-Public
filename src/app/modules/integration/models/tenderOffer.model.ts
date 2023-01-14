export class TenderOffer {
    tenderId: number = 0;
    price: number = 0;
    bloodBankId: string = '';
    public constructor(obj?: any) {
        if (obj) {
            this.tenderId = obj.tenderId;
            this.price = obj.price;
            this.bloodBankId = obj.bloodBankId;          
        }
    }
}