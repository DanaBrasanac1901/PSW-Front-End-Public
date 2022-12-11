export class Appointment {
    doctorName: string='';
    startDate: string='';
    startTime: string='';
    roomNumber: string='';
    doctorId:string='';
  
    public constructor(obj?: any) {
      if (obj) {
        this.doctorName=obj.doctorName;
        this.startDate=obj.date;
        this.startTime=obj.time;
        this.roomNumber=obj.room;
        this.doctorId=obj.doctorId;
      }
    }
  }
  