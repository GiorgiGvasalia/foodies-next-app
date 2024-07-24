import styles from "./main-header.module.css";
import Link from "next/link";
import siteLogo from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <img src={siteLogo.src} alt="Site logo" />
        NEXTLEVEL FOOD
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals"> Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Visit Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
