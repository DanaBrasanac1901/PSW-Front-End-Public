export class Patient {
    email: string = '';
    password:string='';
    name:string='';
    adress:string='';
    gender:string='';
    jmbg:string='';


  
    public constructor(obj?: any) {
      if (obj) {
        this.email = obj.email;
        this.password = obj.password;

        this.name = obj.name;
        this.adress = obj.adress;
        this.gender = obj.gender;
        this.jmbg = obj.jmbg;

      }
    }
  }
  