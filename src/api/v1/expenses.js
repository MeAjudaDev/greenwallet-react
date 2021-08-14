export async function filterExpenses({  }) {
    /*
        --> filtrar por categoria e mês
        {
            categories: [1, 2, 3],
        }
    */
    return fetch(`${process.env.REACT_APP_API_URL}/expenses-summary`);
}

export function deleteExpenseById(expenseId) {
    return fetch(`${process.env.REACT_APP_API_URL}/expenses/${expenseId}`, {
        method: "DELETE",
    });
}

export function getCategoryById(categoryId) {
    return makeRequest(fetch(`${process.env.REACT_APP_API_URL}/categories/${categoryId}`));
}

export async function updateCategory(category) {
    return makeRequest(fetch(`${process.env.REACT_APP_API_URL}/categories/${category.id}`, {
        method: "PUT",
        body: JSON.stringify(category),
        headers: {
            "Content-Type": "application/json",
        },
    }));
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
