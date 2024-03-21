import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
import PropTypes from "prop-types";

function CityList({ cities }) {
  return (
    <>
      {cities.length > 0 ? (
        <ul className={styles.cityList}>
          {cities.map((city) => (
            <CityItem key={city.id} city={city} />
          ))}
        </ul>
      ) : (
        <Message message="Add your first city by clicking a city on the map" />
      )}
    </>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CityList;
