export async function filterExpenses(filter) {
    /*
        --> filtrar por categoria
        {
            categories: [1, 2, 3],
        }
    */
    return [
        {
            id: 1,
            userId: 2,
            categoryId: 3,
            description: "some description",
            value: 123.45,
            isFixed: true,
            dueDate: "2021-12-25",
            expenseType: "E",
            expenseState: "A",
        },
    ];
}
