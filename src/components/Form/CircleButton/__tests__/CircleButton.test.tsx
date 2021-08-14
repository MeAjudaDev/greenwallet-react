import { render, screen } from "@testing-library/react";
import addIcon from "../../../../assets/add.svg";
import CircleButton from "../CircleButton";

test("should render circle button", () => {
    render(<CircleButton />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
});

test("should render circle button with plus sign", () => {
    render(<CircleButton icon={addIcon} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    const iconImgElement = screen.getByRole("img");
    expect(buttonElement).toContainElement(iconImgElement);
    expect(iconImgElement).toHaveAttribute("src", addIcon);
});
