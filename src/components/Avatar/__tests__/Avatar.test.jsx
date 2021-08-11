import { render, screen } from "@testing-library/react";
import Avatar from "../Avatar";

test("should render div with correct image", () => {
    render(<Avatar url="/images/avatar.svg" />);
    const divElement = screen.getByTestId("avatar");
    expect(divElement).toHaveStyle("background-image: url(/images/avatar.svg)");
});
