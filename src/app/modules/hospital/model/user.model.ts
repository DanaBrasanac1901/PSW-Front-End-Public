export class User {
    id: number=0;
    email: string = '';
    password:string='';
    name:string='';
    surname:string='';
    role: string='';

  
    public constructor(obj?: any) {
      if (obj) {
        this.email = obj.email;
        this.password = obj.password;

        this.name = obj.name;

      }
    }
  }
  