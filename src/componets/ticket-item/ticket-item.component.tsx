import React from 'react';
import './ticket-item.styles.scss';
import mockLogo from '../../assets/images/mock-airlines-logo.svg';
import { ITicketItem } from './ticket-item.model';
import { PriceToEtc, TimeToISO, TimeToSeparated } from '../../utils/string-format';

export const TicketItemComponent = ({ ticket }: ITicketItem) => {
  return (
    <div className="ticket-item">
      <div className="ticket-item__header">
        <div className="ticket-item__price">{PriceToEtc(ticket.price)} $</div>
        <div className="ticket-item__logo">
          <img src={mockLogo} alt="airlines-logo" />
        </div>
      </div>
      {ticket.segments.map(({ origin, destination, date, stops, duration }) => (
        <div key={`${origin}-${destination}-${date}`} className="ticket-description-list">
          <div className="ticket-description-list__item">
            <div className="ticket-description-list__label">
              {origin.label} – {destination.label}
            </div>
            <div className="ticket-description-list__value">
              {TimeToISO(origin.time)} – {TimeToISO(destination.time)}
            </div>
          </div>
          <div className="ticket-description-list__item">
            <div className="ticket-description-list__label">В ДОРОЗІ</div>
            <div className="ticket-description-list__value">{TimeToSeparated(duration)}</div>
          </div>
          <div className="ticket-description-list__item">
            <div className="ticket-description-list__label">{stops.length} пересадки</div>
            <div className="ticket-description-list__value">{stops.join(' ,')}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
