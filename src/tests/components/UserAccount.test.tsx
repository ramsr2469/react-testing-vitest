import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { User } from "../../entities";
import UserAccount from "../../components/UserAccount";

describe("group", () => {
  it("should render Edit with the admin privilige", () => {
    const user: User = {
      name: "rams",
      id: 1,
    };
    render(<UserAccount user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
  it("should render Edit button when the user is not admin", () => {
    const user: User = {
      name: "rams",
      id: 1,
      isAdmin: true,
    };
    render(<UserAccount user={user} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });
  it("should not render Edit button when the user is not admin", () => {
    const user: User = {
      name: "rams",
      id: 1,
    };
    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
