export class Patient {
    email: string = '';
    name:string='';
    surname:string='';
    adress:string='';
    gender:number=0;
    jmbg:string='';
    age:number=0;
    bloodType: number = 0;
    allergies: string[] = [];
    doctorId: string = '';
    blocked: string='';


    public constructor(obj?: any) {
      if (obj) {
        this.email = obj.email;
        this.name = obj.name;
        this.adress = obj.adress;
        this.gender = obj.gender;
        this.jmbg = obj.jmbg;
        this.age = obj.age;
        this.bloodType = obj.bloodType;
        this.allergies = obj.allergies;
        this.doctorId = obj.doctorId;
      }
    }
  }
  