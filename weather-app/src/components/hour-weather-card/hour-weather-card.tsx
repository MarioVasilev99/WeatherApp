import { WeatherCardProps } from "../../interfaces";
import { useHourWeatherCard } from "./use-hour-weather-card";

import styles from "./hour-weather-card.module.scss";

export function HourWeatherCard({ forecastItem }: WeatherCardProps) {
  const { time, icon, temp } = useHourWeatherCard(forecastItem);

  return (
    <div className={styles.hourWeatherCardContainer}>
      <span className={styles.time}>{time}</span>

      <span className={styles.imageContainer}>
        <img
          alt="weather-icon"
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      </span>

      <span className={styles.temperature}>{temp}°</span>
    </div>
  );
}
