"use client";
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import "./links.module.css";
import { useState } from "react";
import Image from "next/image";
const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <div className={styles.menuButton}>
        <Image
          alt="menu"
          src="/menu.png"
          width={30}
          height={30}
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
