import { ITicket } from '../models/ticket.model';

export const ticketMock: ITicket = {
  price: 1230,
  airlines: 'Airlines',
  segments: [
    {
      origin: { label: 'ASD', time: 123123 },
      destination: { label: 'QWE', time: 123123123 },
      date: new Date().toString(),
      stops: ['ASD', 'QWE', 'RTY'],
      duration: 123123123,
    },
    {
      origin: { label: 'ASD', time: 123123 },
      destination: { label: 'QWE', time: 12312312312 },
      date: new Date().toString(),
      stops: ['ASD', 'QWE', 'RTY'],
      duration: 123123123,
    },
  ],
};
