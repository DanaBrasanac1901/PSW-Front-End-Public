export class PatientDTO {
    id:number=0;
    email: string = '';
    name:string='';
    surname:string='';
    address:string='';
    gender:string='';
    jmbg:string='';
    age:number=0;
    bloodType: string='';
    allergies: string[] = [];
    chosenDoctor:string='';


    public constructor(obj?: any) {
      if (obj) {
        this.id=obj.id;
        this.email = obj.email;
        this.name = obj.name;
        this.address = obj.adress;
        this.gender = obj.gender;
        this.jmbg = obj.jmbg;
        this.age = obj.age;
        this.bloodType = obj.bloodType;
        this.allergies = obj.allergies;
        this.chosenDoctor = obj.chosenDoctor;
      }
    }
  }
  