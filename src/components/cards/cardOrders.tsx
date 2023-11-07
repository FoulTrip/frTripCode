import React from "react";
import styles from "./card.module.css";
import {
  CiGrid31,
  CiTrash,
  CiEdit,
  CiRoute,
  CiCircleInfo,
  CiCircleCheck,
} from "react-icons/ci";

export interface orderItems {
  type_project: string;
  fullname: string;
  email: string;
  phone: string;
  meeting: string;
  meeting_day: string
  status: string;
  developer: string
  user: string;
  _id: string;
}

interface OrderCardProps {
  order: orderItems;
}

function CardOrders({ order }: OrderCardProps) {
  return (
    <>
      <div className={styles.boxOrderItems}>
        <div className={styles.headerCard}>
          <div className={styles.title_header}>
            <CiGrid31 />
            <p>{order.type_project} Services</p>
          </div>
          <div className={styles.boxStatus}>
            <div className={styles.boxStatusText}>
              {order.status == "In Progress" ? (
                <CiCircleInfo className={styles.statusIconWait} />
              ) : (
                <CiCircleCheck className={styles.statusIconOk} />
              )}
            </div>
            <p className={styles.textStatus}>{order.status}</p>
          </div>
        </div>
        <p>OrderId {order._id}</p>
        <p>ClientId: {order.user}</p>
        <p>Email: {order.email}</p>
        <p>Phone: {order.phone}</p>
        <p>Service: {order.type_project}</p>
        <p>Meeting: {order.meeting}</p>
        <p>Meeting Day: {order.meeting_day}</p>
        <p>Developer: {order.developer}</p>

        <div className={styles.boxActions}>
          <div className={styles.subBoxActions}>
            <div className={styles.actionBtnDelete}>
              <div className={styles.centerBtn}>
                <div className={styles.boxIcon}>
                  <CiTrash />
                </div>
                <p>Delete</p>
              </div>
            </div>
            <div className={styles.actionBtnEdit}>
              <div className={styles.centerBtn}>
                <div className={styles.boxIcon}>
                  <CiEdit />
                </div>
                <p>Modify</p>
              </div>
            </div>
            <div className={styles.actionBtnProcess}>
              <div className={styles.centerBtn}>
                <div className={styles.boxIcon}>
                  <CiRoute />
                </div>
                <p>Process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardOrders;
