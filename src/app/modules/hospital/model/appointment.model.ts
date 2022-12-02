export class Appointment {
    doctorName: string='';
    date: string='';
    time: string='';
    room: number=0;
  
    public constructor(obj?: any) {
      if (obj) {
        this.doctorName=obj.doctorName;
        this.date=obj.date;
        this.time=obj.time;
        this.room=obj.room;
      }
    }
  }
  