import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "@/app";

describe("App component test", () => {
  it("Should render an h1", () => {
    render(<App />);

    const h1Em = screen.getByText("Mindbox Todo List");
    expect(h1Em).toBeInTheDocument();
  });
});
