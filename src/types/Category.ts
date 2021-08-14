import { TransactionType } from "./TransactionType";

export interface Category {
    id: number;
    name: string;
    enabled: boolean;
    type: TransactionType;
}
