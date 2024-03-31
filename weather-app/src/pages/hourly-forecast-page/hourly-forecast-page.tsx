import { HourWeatherCard } from "../../components";

import { useHourlyForecastPage } from "./use-hourly-forecast-page";

import styles from "./hourly-forecast-page.module.scss";

export function HourlyForecastPage() {
  const { hourlyForecast, navigateToHomePage } = useHourlyForecastPage();

  return (
    <div className={styles.hourlyForecastPage}>
      <section className={styles.weatherCardsSection}>
        {hourlyForecast.map((forecastItem) => (
          <HourWeatherCard forecastItem={forecastItem} />
        ))}
      </section>

      <button className={styles.homeButton} onClick={navigateToHomePage}>
        Back to Home
      </button>
    </div>
  );
}
