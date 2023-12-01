type A = {
  x: string;
  b: number;
};
const b: A = {
  x: "ss",
  b: 2,
};
const q = "1d";
type O<T> = {
  s: T;
  "1": string;
};
type m<T> = keyof T;
const d: m<A> = "b";
type g = { t: number } | { y: string };
const e: g = {
  t: 1,
  y: "2",
};
const o: O<string> = {
  s: "S",
  // ["ss"]: "sss";
  "1": "d",
};
console.log(o, e);

const fn = <R>(fus: R, body: keyof R) => {};

// fn(b, { x: "s", b: 2 });
