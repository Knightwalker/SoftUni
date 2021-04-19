import styles from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li className="listItem">
      <a className={styles.navListItem} href="/">{props.children}</a>
    </li>
  );
}

export default NavigationItem;