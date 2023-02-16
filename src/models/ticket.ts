export enum ThisMajor{
  SI = "SI",
  GE = "GE", 
  MED = "MED"
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: ThisMajor;
  archived?: boolean;
}
