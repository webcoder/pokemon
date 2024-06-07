import { render } from "@testing-library/react";
import WeatherWidget from "./Weather";

test("should render a weather widget correctly, without a fetch request", () => {
  render(<WeatherWidget />);
});
