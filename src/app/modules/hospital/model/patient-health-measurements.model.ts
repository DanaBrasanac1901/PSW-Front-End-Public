export class PatientHealthMeasurements {

    patientId: string;
    weight: string;
    bloodPressureUpper: string;
    bloodPressureLower: string;
    heartbeat: string;
    temperature: string;
    bloodSugarLevel: string;

    public constructor(obj?: any){
        if(obj){
            this.patientId = obj.patientId;
            this.weight = obj.weight;
            this.bloodPressureUpper = obj.bloodPressureUpper;
            this.bloodPressureLower = obj.bloodPressureLower;
            this.heartbeat = obj.hearteat;
            this.temperature = obj.temperature;
            this.bloodSugarLevel = obj.bloodSugarLevel;
        }
    }
}