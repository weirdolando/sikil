import differenceInDays from "date-fns/differenceInDays";

export function formatPrice(price: number) {
  return `$${price / 100}`;
}

export function pluralize(string: string, num: number) {
  return num === 1 ? `1 ${string}` : `${num} ${string}s`;
}

export function isNewShoe(releaseDate: number) {
  return differenceInDays(new Date(), releaseDate) < 30;
}
