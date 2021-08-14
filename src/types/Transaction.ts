import { TransactionType } from "./TransactionType";

export interface Transaction {
    id: number;
    categoryId: number;
    description: string;
    value: number;
    isFixed: boolean;
    dueDate?: Date;
    type: TransactionType;
}
