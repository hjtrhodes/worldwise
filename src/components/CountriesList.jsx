import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import PropTypes from "prop-types";

function CountryList({ cities }) {
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    else return arr;
  }, []);

  return (
    <>
      {countries.length > 0 ? (
        <ul className={styles.countryList}>
          {countries.map((country) => (
            <CountryItem
              key={country.id}
              country={country.country}
              emoji={country.emoji}
            />
          ))}
        </ul>
      ) : (
        <Message message="Add your first city by clicking a city on the map" />
      )}
    </>
  );
}

CountryList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CountryList;
