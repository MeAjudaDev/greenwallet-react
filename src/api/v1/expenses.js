export async function filterExpenses(filter) {
    /*
        --> filtrar por categoria
        {
            categories: [1, 2, 3],
        }
    */
    return fetch(`${process.env.REACT_APP_API_URL}/expenses`);
}

export function deleteExpense(expenseId) {
    return fetch(`${process.env.REACT_APP_API_URL}/expenses/${expenseId}`, {
        method: "DELETE"
    });
}
