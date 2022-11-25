export class RegDTO {
    email: string = '';
    password:string='';
    name:string='';
    surname:string='';
    adress:string='';
    gender:string='';
    jmbg:string='';
    role: string='';


  
    public constructor(obj?: any) {
      if (obj) {
        this.email = obj.email;
        this.password = obj.password;

        this.name = obj.name;
        this.surname=obj.surname;

        this.adress = obj.adress;
        this.gender = obj.gender;
        this.jmbg = obj.jmbg;

        this.role=obj.role;

      }
    }
  }
  