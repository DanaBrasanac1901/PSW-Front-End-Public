export class RegDTO {
    email: string = '';
    password:string='';
    name:string='';
    surname:string='';
    address:string='';
    gender:string='';
    jmbg:string='';
    bloodType:string='';
    doctorId:number=0;
    allergies:string[]=[];
    age:number=0;

  
    public constructor(obj?: any) {
      if (obj) {
        this.email = obj.email;
        this.password = obj.password;

        this.name = obj.name;
        this.surname=obj.surname;

        this.address = obj.adress;
        this.gender = obj.gender;
        this.jmbg = obj.jmbg;

        this.bloodType=obj.bloodType;

      }
    }
  }
  