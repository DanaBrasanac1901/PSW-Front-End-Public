export class Appointment {
    doctorName: string='';
    dateString: string='';
    timeString:string='';
    roomNumber: string='';
    doctorId:string='';
    patientId:string='';
    public constructor(obj?: any) {
      if (obj) {
        this.doctorName=obj.doctorName;
        this.dateString=obj.dateString;
        this.timeString=obj.timeString;
        this.roomNumber=obj.roomNumber;
        this.doctorId=obj.doctorId;
        this.patientId=obj.patientId;
      }
    }
  }
  