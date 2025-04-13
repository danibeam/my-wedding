export interface Guest {
    id: string;
    name: string;
    email: string;
    attendance: string; // '0' = not confirmed, '1' = confirmed
    token: string;
}
