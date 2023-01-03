export class PatientData {

    patientId: number;
    weight: string;
    bloodPressureUpper: string;
    bloodPressureLower: string;
    heartBeat: string;
    temperature: string;
    bloodSugarLevel: string;

    public constructor(obj?: any){
        this.patientId = obj.patientId;
        this.weight = obj.weight;
        this.bloodPressureUpper = obj.bloodPressureUpper;
        this.bloodPressureLower = obj.bloodPressureLower;
        this.heartBeat = obj.heartBeat;
        this.temperature = obj.temperature;
        this.bloodSugarLevel = obj.bloodSugarLevel;
    }
}