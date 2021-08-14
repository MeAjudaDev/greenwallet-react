import { render, screen } from "@testing-library/react";
import ListItems from "../ListItems";

const categories = [
    { description: "Alimentação", value: 831.66 },
    { description: "Casa", value: 1956.0 },
    { description: "Transporte", value: 200.0 },
];

test("should render default test when no data is passed in", () => {
    render(<ListItems />);

    const defaultTextElement = screen.getByTestId("default-text");
    expect(defaultTextElement).toBeInTheDocument();

    const listElement = screen.queryByTestId("list");
    expect(listElement).not.toBeInTheDocument();
    expect(listElement).toBeNull();
});

test("should render list with correct items count", () => {
    render(<ListItems categories={categories} />);
    const listElement = screen.getByTestId("list");
    expect(listElement.children.length).toBe(3);
});

test("should render list with correct items description", () => {
    render(<ListItems categories={categories} />);
    const listDescriptionElements = screen.getAllByTestId("list-description");
    expect(listDescriptionElements[0].textContent).toBe("Alimentação");
    expect(listDescriptionElements[1].textContent).toBe("Casa");
    expect(listDescriptionElements[2].textContent).toBe("Transporte");
});

test("should render list with correct items value", () => {
    render(<ListItems categories={categories} />);
    const listValueElements = screen.getAllByTestId("list-value");
    expect(listValueElements[0].textContent).toBe("R$ 831,66");
    expect(listValueElements[1].textContent).toBe("R$ 1956,00");
    expect(listValueElements[2].textContent).toBe("R$ 200,00");
});
