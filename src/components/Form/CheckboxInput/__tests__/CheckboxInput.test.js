import { render, screen } from "@testing-library/react";
import CheckboxInput from "../CheckboxInput";

test("should render checkbox input", () => {
    render(<CheckboxInput />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
});

test("should render correct label", () => {
    render(<CheckboxInput label="Default Checkbox" />);
    const checkboxElement = screen.getByText("Default Checkbox");
    expect(checkboxElement).toBeInTheDocument();
});

test("should show unchecked checkbox when not pass in checked prop", () => {
    render(<CheckboxInput label="Default Checkbox" />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).not.toBeChecked();
});

test("should show unchecked checkbox when pass in false checked prop", () => {
    render(<CheckboxInput label="Default Checkbox" checked={false} />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).not.toBeChecked();
});

test("should show checked checkbox when pass in checked prop", () => {
    render(<CheckboxInput label="Default Checkbox" checked />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeChecked();
});
