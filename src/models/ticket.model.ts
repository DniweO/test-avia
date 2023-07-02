export interface IStop {
  label: string;
  time: number;
}

export interface ISegment {
  origin: IStop;
  destination: IStop;
  date: string;
  stops: string[];
  duration: number;
}

export interface ITicket {
  price: number;
  airlines: string;
  segments: ISegment[];
}
