import { getDayOfWeekString } from "../../utils";
import { WeatherCardProps } from "../../interfaces";
import { useDayWeatherCard } from "./use-day-weather-card";

import styles from "./day-weather-card.module.scss";

export function DayWeatherCard({ forecastItem }: WeatherCardProps) {
  const { icon, date, maxTemperature, minTemperature, handleWeatherCardClick } =
    useDayWeatherCard(forecastItem);

  return (
    <div
      className={styles.weatherCardContainer}
      onClick={() => handleWeatherCardClick()}
    >
      <span className={styles.dayName}>{getDayOfWeekString(date)}</span>

      <span className={styles.date}>{date}</span>

      <span className={styles.imageContainer}>
        <img
          alt="weather-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      </span>

      <span className={styles.highLowTemperatureContainer}>
        <span className={styles.highTemperature}>{maxTemperature}°</span>

        <span className={styles.lowTemperature}>{minTemperature}°</span>
      </span>
    </div>
  );
}
