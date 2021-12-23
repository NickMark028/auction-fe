export type TCategory = {
    id: number;
    name: string;
    path: string;
}

export type TSection = {
    section: string;
    categories: TCategory[]
}

export type TCategoryList = TSection[];

export type TState<T> = {
    status: 'idle' | 'pending' | 'reject' | 'success';
    data?: T;
    errorMsg?: string;
}
