export class Feedback {
  id: number = 0;
  patient: string='';
  text: string = '';
  visibleToPublic: Boolean = false;
  approved: Boolean = false;
  date: Date = new Date();

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.patient = obj.id;
      this.visibleToPublic = obj.visibleToPublic;
      this.approved = obj.approved;
      this.date = obj.date;
    }
  }
}
