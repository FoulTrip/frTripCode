"use client";

import React, { useState } from "react";
import { useAuth } from "@/components/context/useSession";
import styles from "./page.module.css";
import CreateOrder from "@/components/forms/createOrder";
import Navbar from "@/components/NavBar";
import Current from "@/components/optsDashboard/Current";
import History from "@/components/optsDashboard/History";
import Draft from "@/components/optsDashboard/Draft";

function Dashboard() {
  const { user } = useAuth();
  const [openForm, setOpenForm] = useState(false);
  const [opts, setOpts] = useState(0);

  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };

  if (user?.detailsUser.status == "authenticated") {
    return (
      <>
        <Navbar />
        <div className={openForm ? styles.boxCreateTrue : styles.boxCreate}>
          <div className={styles.subBoxCreate}>
            <div className={styles.btnOpen} onClick={handleOpenForm}>
              {!openForm ? (
                <div>
                  <p>New Order</p>
                </div>
              ) : (
                <>
                  <div className={styles.introForm}>
                    <h2 className={styles.titleForm}>
                      Create your software with the best developers
                    </h2>
                    <p className={styles.subtitle}>
                      Once the order is created, you have to wait for a
                      developer to take charge of your project and he will
                      schedule an appointment for a virtual meeting.
                    </p>
                    <div className={styles.btns}>
                      <div className={styles.subBtns}>
                        <div
                          className={styles.btnCancelForm}
                          onClick={handleOpenForm}
                        >
                          Cancel Order
                        </div>
                        <div className={styles.btnSaveDraft}>Save in draft</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          {openForm ? (
            <div className={styles.subBoxCreate}>
              <CreateOrder />
            </div>
          ) : null}
        </div>
        <div className={styles.boxOptions}>
          <div className={styles.subBoxOptions}>
            <p
              onClick={() => setOpts(0)}
              className={opts == 0 ? styles.select : styles.normal}
            >
              Current
            </p>
            <p
              className={opts == 1 ? styles.select : styles.normal}
              onClick={() => setOpts(1)}
            >
              History
            </p>
            <p
              className={opts == 2 ? styles.select : styles.normal}
              onClick={() => setOpts(2)}
            >
              Draft
            </p>
          </div>
        </div>
        {opts == 0 ? <Current /> : null}
        {opts == 1 ? <History /> : null}
        {opts == 2 ? <Draft /> : null}
      </>
    );
  } else {
    if (typeof window !== "undefined") {
      window.location.href = "/account/signin";
    }
  }
}

export default Dashboard;
