import styles from "./main-header.module.css";
import Link from "next/link";
import siteLogo from "@/assets/logo.png";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={siteLogo} alt="Site logo" priority/>
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
