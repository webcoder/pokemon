import { render } from "@testing-library/react";
import MultiSelect from "../../components/multi-select/MultiSelect";

test("should render a multi-select component", () => {
  const mockPokemons = [
    {
      name: "Mock 1",
      url: "fake-url",
    },
    {
      name: "Mock 2",
      url: "fake-url",
    },
  ];
  render(<MultiSelect selected={[]} items={mockPokemons} />);
});
