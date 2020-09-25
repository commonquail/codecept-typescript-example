export interface Ad {
    company: string;
    url: string;
    text: string;
}

export interface UserData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface SingleUser {
    data: UserData;
    ad: Ad;
}

export interface ListUsers {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: ReadonlyArray<UserData>;
    ad: Ad;
}

export interface CreateUser {
    name: string;
    job: string;
    id: string;
    createdAt: string;
}

export interface UpdateUser {
    name: string;
    job: string;
    updatedAt: string;
}

export interface CreateUserInput {
    job: string;
    name: string;
}

export interface PatchUserInput extends CreateUserInput {}
