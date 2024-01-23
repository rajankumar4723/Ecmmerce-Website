// components/Navbar.js
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  // const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!isMobileMenuOpen);
  // };
  return (
    <div className={styles.mainNavbar}>
      <div className={styles.nav}>
        <ul className={styles.flex}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/laptop/laptop">Laptop</Link>
            <ul className={styles.submenu}>
              <li>
                <Link href="/laptop/hp">HP</Link>
              </li>
              <li>
                <Link href="/laptop/apple">Apple</Link>
              </li>
              <li>
                <Link href="/laptop/dell">Dell</Link>
              </li>
              <li>
                <Link href="/laptop/lenvo">Lenvo</Link>
              </li>

              {/* Add more Men's links as needed */}
            </ul>
          </li>{" "}
          <li>
            <Link href="/mobile/mobile">Mobile</Link>
            <ul className={styles.submenu}>
            <li>
                <Link href="/mobile/vivo">Vivo</Link>
              </li>
              <li>
                <Link href="/mobile/apple">Apple</Link>
              </li>
              <li>
                <Link href="/mobile/android">Android</Link>
              </li>
              <li>
                <Link href="/mobile/Sumsung">SumSung</Link>
              </li>

              {/* Add more Men's links as needed */}
            </ul>
          </li>
          <li>
            <Link href="/men/men">Men's</Link>
            <ul className={styles.submenu}>
              <li>
                <Link href="/men/pants">Shirts</Link>
              </li>
              <li>
                <Link href="/men/pants">Pants</Link>
              </li>
              <li>
                <Link href="/men/pants">T Sirt</Link>
              </li>
              <li>
                <Link href="/men/pants">Shoes</Link>
              </li>

              {/* Add more Men's links as needed */}
            </ul>
          </li>
          <li>
            <Link href="/women/women">Women's</Link>
            <ul className={styles.submenu}>
              <li>
                <Link href="/women/dresses">Dresses</Link>
              </li>
              <li>
                <Link href="/women/shoes">Jeans</Link>
              </li>
              <li>
                <Link href="/women/shoes">Shoes</Link>
              </li>
              {/* Add more Women's links as needed */}
            </ul>
          </li>
          <li>
            <Link href="/cartpage">Cart</Link>
          </li>
          <li>
            <Link href="/signUp">Signup</Link>
          </li>
          <li>
            <Link href="/logIn">Login</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
