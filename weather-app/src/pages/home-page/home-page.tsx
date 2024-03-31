import { DayWeatherCard } from "../../components";

import { useHomePage } from "./use-home-page";

import styles from "./home-page.module.scss";

export function HomePage() {
  const { fiveDayForecast } = useHomePage();

  return (
    <div className={styles.homePage}>
      <section className={styles.weatherCardsSection}>
        {fiveDayForecast.map((forecastItem) => (
          <DayWeatherCard forecastItem={forecastItem} />
        ))}
      </section>
    </div>
  );
}
