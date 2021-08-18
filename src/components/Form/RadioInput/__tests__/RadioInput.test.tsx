import { render, screen } from "@testing-library/react";
import RadioInput from "../RadioInput";

test("should render radio input", () => {
    render(<RadioInput labelText="label" inputName="name" />);
    const radioElement = screen.getByRole("radio");
    expect(radioElement).toBeInTheDocument();
});

test("should render correct label", () => {
    render(<RadioInput inputName="name" labelText="Default Radio" />);
    const radioElement = screen.getByText("Default Radio");
    expect(radioElement).toBeInTheDocument();
});

test("should show unchecked radio when not pass in checked prop", () => {
    render(<RadioInput inputName="name" labelText="Default Radio" />);
    const radioElement = screen.getByRole("radio");
    expect(radioElement).not.toBeChecked();
});

test("should show unchecked radio when pass in false checked prop", () => {
    render(<RadioInput inputName="name" labelText="Default Radio" checked={false} />);
    const radioElement = screen.getByRole("radio");
    expect(radioElement).not.toBeChecked();
});

test("should show checked radio when pass in checked prop", () => {
    render(<RadioInput inputName="name" labelText="Default Radio" checked />);
    const radioElement = screen.getByRole("radio");
    expect(radioElement).toBeChecked();
});
