import { Ticket, ThisMajor } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'Titre 1',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: ThisMajor.SI,
    archived : false 
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: ThisMajor.GE,
    archived : true 
  },
];
