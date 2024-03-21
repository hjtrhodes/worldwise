import PropTypes from "prop-types";
import styles from "./CountryItem.module.css";

function CountryItem({ country, emoji }) {
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.city}>{country}</h3>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};

export default CountryItem;
