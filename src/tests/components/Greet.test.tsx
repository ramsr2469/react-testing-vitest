import { render, screen } from "@testing-library/react";
import Greet from "../../components/Greet";
import "@testing-library/jest-dom";

describe("group", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="rams" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/rams/i);
  });
  it("should render login button when the name when name is not provided", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
