"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/useSession";
import CardOrders, { orderItems } from "../cards/cardOrders";
import styles from "./styles.module.css";

function Current() {
  const [orders, setOrders] = useState<orderItems[]>([]);
  const { user } = useAuth();

  console.log(orders)

  useEffect(() => {
    async function getOrders() {
      const user_id: string | undefined = user?.detailsUser._id;

      try {
        const response = await axios.post("/api/order/all", { user_id });
        const data = response.data;
        // console.log(data);
        setOrders(data);
      } catch (error) {
        console.error("Error en la solicitud al servidor", error);
      }
    }

    getOrders();
  }, [user]);

  return (
    <div className={styles.afterBoxOrder}>
      {orders ? (
        <div className={styles.boxOrders}>
          {orders.map((order) => (
            <CardOrders key={order._id} order={order} />
          ))}
        </div>
      ) : (
        <p>Loading dates...</p>
      )}
      {orders?.length == 0 ? <p>No orders</p> : null}
    </div>
  );
}

export default Current;
