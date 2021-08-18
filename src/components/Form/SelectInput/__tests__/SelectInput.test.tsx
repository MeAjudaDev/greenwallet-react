import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectInput from "../SelectInput";

const mockedOptions = [{
    value: 1,
    label: "Água",
}, {
    value: 2,
    label: "Luz",
}, {
    value: 3,
    label: "Internet",
}];

test("should render correct label text", () => {
    render(<SelectInput name="select_name" labelText="Categorias" options={mockedOptions} />);
    const labelElement = screen.getByText("Categorias");
    expect(labelElement).toBeInTheDocument();
});

test("should render select with no options when no options is passed in", () => {
    render(<SelectInput name="select_name" labelText="Categorias" options={mockedOptions} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement.children.length).toBe(0);
});

test("should render select with no options when empty array is passed in", () => {
    render(<SelectInput name="select_name" labelText="Categorias" options={[]} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement.children.length).toBe(0);
});

test("should render select with correct options", () => {
    render(<SelectInput name="select_name" labelText="Categorias" options={mockedOptions} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement.children.length).toBe(3);
    expect(selectElement.children[0].textContent).toBe("Água");
    expect(selectElement.children[1].textContent).toBe("Luz");
    expect(selectElement.children[2].textContent).toBe("Internet");
});

test("should show selected option", () => {
    render(<SelectInput name="select_name" labelText="Categorias" options={mockedOptions} />);
    const selectElement = screen.getByRole("combobox") as HTMLSelectElement;

    userEvent.selectOptions(selectElement, "1");
    expect(selectElement.value).toBe("1");

    const optionElements = screen.getAllByRole("option") as HTMLOptionElement[] ;
    expect(optionElements[0].selected).toBeTruthy();
    expect(optionElements[1].selected).toBeFalsy();
    expect(optionElements[2].selected).toBeFalsy();
});
