import axios from "axios";
import { Category } from "../../types/Category";
import { CategorySummary } from "../../types/CategorySummary";

const api = axios.create({
    url: process.env.REACT_APP_API_URL,
});

export async function filterExpenses() {
    return api.get<CategorySummary[]>("/expenses");
}

export function deleteExpense(expenseId: number) {
    return api.delete(`/expenses/${expenseId}`);
}

export function getCategoryById(categoryId: number) {
    return api.get<Category>(`/categories/${categoryId}`);
}

export async function updateCategory(category: Category) {
    return api.put(`/categories/${category.id}`, category);
}
