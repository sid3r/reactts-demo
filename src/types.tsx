export interface Address {
  street: string;
  city: string;
  zip: number;
}
export interface User {
  name: string;
  email: string;
  age: number;
  address: Address;
  admin: boolean;
}
export interface Post {
  title: string;
  body: string;
}
