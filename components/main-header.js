import styles from "./main-header.module.css";
import Link from "next/link";
import siteLogo from "@/assets/logo.png";
import Image from "next/image";
import NavLink from "./nav-link/nav-link";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={siteLogo} alt="Site logo" priority />
        NEXTLEVEL FOOD
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
