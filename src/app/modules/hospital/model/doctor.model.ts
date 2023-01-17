export class Doctor {
  id: number=0;
  name: string = '';
  surname: string = '';
  specialty:number=0;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.surname = obj.surname;
    }
  }
}
