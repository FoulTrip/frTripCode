"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useMediaQuery } from "@react-hook/media-query";

import { useAuth } from "./context/useSession";

import iconLogo from "@/assets/logo-tripcode.png";
import { AiOutlineMenu } from "react-icons/ai";
import { HiChevronDown, HiChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

// interface NavBarProps {
//   openModal: (content: React.ReactNode) => void;
// }

function Navbar() {
  const responsive = useMediaQuery("(min-width: 900px)");
  const [chevron, setChevron] = useState();
  const { user } = useAuth();

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    window.location.reload();
  };

  const handlerChevron = () => {};

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.imageLogo}>
            <Image className={styles.iconLogo} src={iconLogo} alt="iconLogo" />
          </div>
          <Link href="/" className={styles.logoTitle}>
            TripCode
          </Link>
        </div>
        {responsive ? (
          <div className={styles.account}>
            <div className={styles.subAccount}>
              {user ? (
                <>
                  <Link href="/dashboard" className={styles.login}>
                    Dashboard
                  </Link>
                  <div onClick={handleLogout} className={styles.login}>
                    Logout
                  </div>
                </>
              ) : (
                <Link href="/account/signin" className={styles.login}>
                  Account
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.menuIcon}>
            <div className={styles.menuImg}>
              <AiOutlineMenu />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
