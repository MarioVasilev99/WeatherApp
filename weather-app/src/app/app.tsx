import { Outlet } from "react-router-dom";

import { useApp } from "./use-app";

import styles from "./app.module.scss";

export function App() {
  const { city, units, handleSetUnits } = useApp();

  return (
    <div className={styles.appContainer}>
      <header>
        <span className={styles.locationInfoContainer}>
          <p className={styles.locationText}>Location: {city}</p>
        </span>

        <div className={styles.unitsRadioButtonsContainer}>
          <span className={styles.radioButtonContainer}>
            <input
              id="metric"
              type="radio"
              name="units"
              value="metric"
              checked={units === "metric"}
              className={styles.radioButton}
              onChange={(e) => handleSetUnits(e.target.value)}
            />
            <label htmlFor="metric" className={styles.radioButtonLabel}>
              Metric
            </label>
          </span>

          <span className={styles.radioButtonContainer}>
            <input
              type="radio"
              name="units"
              id="imperial"
              value="imperial"
              checked={units === "imperial"}
              className={styles.radioButton}
              onChange={(e) => handleSetUnits(e.target.value)}
            />
            <label htmlFor="imperial" className={styles.radioButtonLabel}>
              Imperial
            </label>
          </span>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
