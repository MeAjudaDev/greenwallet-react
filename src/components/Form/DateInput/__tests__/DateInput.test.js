import { render, screen, fireEvent } from "@testing-library/react";
import DateInput from "../DateInput";

test("should render date input", () => {
    render(<DateInput />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
});

test("should show correct date when a date is selected", () => {
    render(<DateInput />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "16/07/2021" } });
    expect(inputElement.value).toBe("16/07/2021");
});

test("should show correct placeholder when placeholder prop is passed in", () => {
    render(<DateInput placeholder="Birthday" />);
    const inputElement = screen.getByPlaceholderText("Birthday");
    expect(inputElement).toBeInTheDocument();
});
