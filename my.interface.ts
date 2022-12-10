export interface Person {
  name: string;
  age: number;
  height: string;
}

export interface Student extends Person {
  level: number;
}
