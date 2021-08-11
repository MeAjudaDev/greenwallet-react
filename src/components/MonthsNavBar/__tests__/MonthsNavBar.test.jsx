import { render, screen } from "@testing-library/react";
import MonthsNavBar from "../MonthsNavBar";

const months = [
    { label: "Janeiro", link: "#", selected: true },
    { label: "Fevereiro", selected: false },
    { label: "Março", link: "#", selected: false },
];

test("should not render an option element when no items is passed in", () => {
    render(<MonthsNavBar />);
    const listElement = screen.getByRole("list");
    expect(listElement.children.length).toBe(0);
});

test("should not render an option element when no items an empty array", () => {
    render(<MonthsNavBar items={[]} />);
    const listElement = screen.getByRole("list");
    expect(listElement.children.length).toBe(0);
});

test("should render correct items count", () => {
    render(<MonthsNavBar items={months} />);
    const listElement = screen.getByRole("list");
    expect(listElement.children.length).toBe(3);
});

test("should render correct link label", () => {
    render(<MonthsNavBar items={months} />);
    const linkElement = screen.getAllByRole("link");
    expect(linkElement[0]).toHaveTextContent("Janeiro");
    expect(linkElement[1]).toHaveTextContent("Fevereiro");
    expect(linkElement[2]).toHaveTextContent("Março");
});

test("should have correct link href", () => {
    render(<MonthsNavBar items={months} />);
    const linkElement = screen.getAllByRole("link");
    expect(linkElement[0]).toHaveAttribute("href", "#");
    expect(linkElement[1]).toHaveAttribute("href", "#");
    expect(linkElement[2]).toHaveAttribute("href", "#");
});

test("should have default link href when item.link is null", () => {
    render(<MonthsNavBar items={months} />);
    const linkElement = screen.getByText("Fevereiro");
    expect(linkElement).toHaveAttribute("href", "#");
});

test("should have active class when item is selected", () => {
    render(<MonthsNavBar items={months} />);
    const linkElement = screen.getAllByRole("link");
    expect(linkElement[0]).toHaveClass("active");
    expect(linkElement[2]).not.toHaveClass("active");
    expect(linkElement[1]).not.toHaveClass("active");
});
