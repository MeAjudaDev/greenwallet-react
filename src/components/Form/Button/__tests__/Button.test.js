import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("should render button", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
});
