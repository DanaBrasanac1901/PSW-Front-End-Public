export class Patient {
    email: string = '';
    name:string='';
    adress:string='';
    gender:string='';
    jmbg:string='';


  
    public constructor(obj?: any) {
      if (obj) {
        this.email = obj.email;
        this.name = obj.name;
        this.adress = obj.adress;
        this.gender = obj.gender;
        this.jmbg = obj.jmbg;

      }
    }
  }
  