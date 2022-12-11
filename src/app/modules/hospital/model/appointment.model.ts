export class Appointment {
    doctorName: string='';
    startDate: string='';
    startTime: string='';
    roomId: string='';
    doctorId:string='';
    patientId:string='';
    public constructor(obj?: any) {
      if (obj) {
        this.doctorName=obj.doctorName;
        this.startDate=obj.date;
        this.startTime=obj.time;
        this.roomId=obj.room;
        this.doctorId=obj.doctorId;
        this.patientId=obj.patientId;
      }
    }
  }
  