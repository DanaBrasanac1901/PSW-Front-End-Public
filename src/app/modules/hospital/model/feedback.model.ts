export class Feedback {
  id: number = 0;
  patientName: string = '';
  patientSurname: string = '';
  patientId:number=0;
  text: string = '';
  visibleToPublic: Boolean =false;
  approved: Boolean = false;
  date: Date = new Date();
  anonymous: boolean = false;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.patientName = obj.patientName;
      this.patientSurname = obj.patientSurname;
      this.patientId=obj.patientId;
      this.visibleToPublic = obj.visibleToPublic;
      this.approved = obj.approved;
      this.date = obj.date;
    }
  }
}
