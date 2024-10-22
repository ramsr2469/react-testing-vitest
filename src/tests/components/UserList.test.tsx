import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserList from "../../components/UserList";
import { User } from "../../entities";

describe("User List comp", () => {
  it("should render no user when users array is empty", () => {
    //   const users: User[] = [];
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });
  it("should render no user when users array is empty", () => {
    const users: User[] = [
      {
        id: 1,
        name: "rams",
      },
      {
        id: 2,
        name: "tes",
      },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
