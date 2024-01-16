import { Name } from "./types";

export function fullnameFormat(name: Name): string {
  return `${name.title} ${name.first} ${name.last}`;
}
