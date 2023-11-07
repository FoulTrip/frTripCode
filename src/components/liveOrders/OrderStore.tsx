import { create } from "zustand";
import { orderItems } from "../cards/cardOrders";

interface OrderStore {
  orders: orderItems[] | null;
  setOrders: (orders: orderItems[] | null) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: null,
  setOrders: (orders) => set({ orders }),
}));
