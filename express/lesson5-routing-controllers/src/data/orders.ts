export interface Order {
  id: string;
  customerName: string;
  flavor: string;
  quantity: number;
  pickupDate: string;
}

export const orders: Order[] = [
  {
    id: "1",
    customerName: "Maria",
    flavor: "Vanilla",
    quantity: 2,
    pickupDate: "2026-05-25"
  }
];