import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "../TextInput";

test("should render correct label text", () => {
    render(<TextInput labelText="Valor" />);
    const spanElement = screen.getByText("Valor");
    expect(spanElement).toBeInTheDocument();
});

test("should show correct placeholder text", () => {
    render(<TextInput placeholder="Insira o valor da conta" />);
    const inputElement = screen.getByPlaceholderText("Insira o valor da conta");
    expect(inputElement).toBeInTheDocument();
});

test("should not have focus when autoFocus prop is not passed in", () => {
    render(<TextInput />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).not.toHaveFocus();
});

test("should not have focus when autoFocus prop is false", () => {
    render(<TextInput autoFocus={false} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).not.toHaveFocus();
});

test("should have focus when autoFocus prop is true", () => {
    render(<TextInput autoFocus />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveFocus();
});

test("should update input when user types in", () => {
    render(<TextInput autoFocus />);
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    userEvent.type(inputElement, "25.00");

    expect(inputElement.value).toBe("25.00");
});
