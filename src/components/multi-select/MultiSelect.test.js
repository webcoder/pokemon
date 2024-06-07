import { render, screen } from "@testing-library/react";
import MultiSelect from "./MultiSelect";
test("should work even without pokemons", () => {
  render(<MultiSelect items={[]} selected={[]} />);
});

test("show correct the labels", () => {
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
  render(<MultiSelect items={mockPokemons} selected={[]} />);
  const element = screen.getByText("Mock 2");
  expect(element).toBeInTheDocument();
});
