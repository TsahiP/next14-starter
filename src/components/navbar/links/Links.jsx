"use client";
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import "./links.module.css";
import { useState } from "react";
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
      <button className={`${styles.menuButton} animate__bounceInRight`} onClick={() => setOpen((prev) => !prev)}>Menu</button>

      <div className={styles.mobileLinks}>
      {open && (
          <>
          {links.map((link) => (
              <NavLink key={link.title} item={link} />
          ))}
          </>
        )}
        </div>
    </div>
  );
};

export default Links;
