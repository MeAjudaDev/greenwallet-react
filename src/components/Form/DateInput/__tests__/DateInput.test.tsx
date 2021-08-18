import { fireEvent, render, screen } from "@testing-library/react";
import DateInput from "../DateInput";

test("should render date input", () => {
    render(<DateInput placeholder="string" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
});

test("should show correct date when a date is selected", () => {
    render(<DateInput placeholder="string" />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "16/07/2021" } });
    expect(inputElement.value).toBe("16/07/2021");
});

test("should show correct placeholder when placeholder prop is passed in", () => {
    render(<DateInput placeholder="Birthday" />);
    const inputElement = screen.getByPlaceholderText("Birthday");
    expect(inputElement).toBeInTheDocument();
});