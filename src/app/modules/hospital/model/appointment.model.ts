export class Appointment {
    doctorName: string='';
    dateString:string='';
    startDateString: string=''
    endDateString:string='';
    timeString:string='';
    roomNumber: string='';
    doctorId:string='';
    patientId:string='';
    status:string='';
    public constructor(obj?: any) {
      if (obj) {
        this.doctorName=obj.doctorName;
        this.dateString=obj.dateString;
        this.startDateString=obj.startDateString;
        this.endDateString=obj.endDateString;
        this.timeString=obj.timeString;
        this.roomNumber=obj.roomNumber;
        this.doctorId=obj.doctorId;
        this.patientId=obj.patientId;
        this.status=obj.status;
      }
    }
  }
  