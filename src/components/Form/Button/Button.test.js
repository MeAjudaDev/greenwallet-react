import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button test", () => {
    test("should render button", () => {
        render(<Button />);
        expect(screen.getByText("default")).toBeInTheDocument();
    });
});
