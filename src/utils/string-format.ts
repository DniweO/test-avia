export function PriceToEtc(item: number) {
  return item.toLocaleString('etc');
}

export function TimeToISO(item: number) {
  return new Date(item).toISOString().slice(11, 16);
}

export function TimeToSeparated(item: number) {
  const time = TimeToISO(item);
  return `${time.slice(0, 2)}ч ${time.slice(3, 5)}м`;
}
