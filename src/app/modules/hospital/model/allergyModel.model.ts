export class Allergy {
    name:string='';
    checked:Boolean=false;
  
    public constructor(obj?: any) {
      if (obj) {
        this.name = obj.name;
        this.checked=obj.checked;
      }
    }
  }
  