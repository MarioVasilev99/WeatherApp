import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import { reduxStore } from "../../redux";
import { mockForecastItem } from "../mocks";
import { DayWeatherCard } from "../../components";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("DayWeatherCard component", () => {
  test("renders day weather card with correct data", () => {
    const { getByText, getByAltText } = render(
      <Provider store={reduxStore}>
        <DayWeatherCard forecastItem={mockForecastItem} />
      </Provider>
    );

    expect(getByText("Monday")).toBeInTheDocument();
    expect(getByText("2024-04-01")).toBeInTheDocument();
    expect(getByAltText("weather-icon")).toHaveAttribute(
      "src",
      "https://openweathermap.org/img/wn/01d@2x.png"
    );
    expect(getByText("20°")).toBeInTheDocument();
    expect(getByText("30°")).toBeInTheDocument();
  });
});
