import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import { reduxStore } from "../../redux";
import { mockForecastItem } from "../mocks";
import { HourWeatherCard } from "../../components";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("HourWeatherCard component", () => {
  test("renders hour weather card with correct data", () => {
    const { getByText, getByAltText } = render(
      <Provider store={reduxStore}>
        <HourWeatherCard forecastItem={mockForecastItem} />
      </Provider>
    );

    expect(getByText("15:00:00")).toBeInTheDocument();
    expect(getByAltText("weather-icon")).toHaveAttribute(
      "src",
      "https://openweathermap.org/img/wn/01d@2x.png"
    );
    expect(getByText("25°")).toBeInTheDocument();
  });
});
