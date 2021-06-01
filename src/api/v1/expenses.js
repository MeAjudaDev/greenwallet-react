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
        method: "DELETE",
    });
}

export function getCategoryById(categoryId) {
    return makeRequest(fetch(`${process.env.REACT_APP_API_URL}/categories/${categoryId}`));
}

function makeRequest(promise) {
    return promise.then((response) => {
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.json();
    }).catch((err) => {
        console.error(err);
    });
}
