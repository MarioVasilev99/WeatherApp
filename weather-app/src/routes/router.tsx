import { createBrowserRouter } from "react-router-dom";

import { App } from "../app/app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => <h1>Loading App...</h1>,
    children: [
      {
        index: true,
        async lazy() {
          const { HomePage } = await import("../pages");
          return { Component: HomePage };
        },
      },
      {
        path: "/hourly-forecast",
        async lazy() {
          const { HourlyForecastPage } = await import("../pages");
          return { Component: HourlyForecastPage };
        },
      },
    ],
  },
]);
