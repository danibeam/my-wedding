export interface Guest {
    id: string;
    name: string;
    email: string;
    attendance: string; // '0' = not confirmed, '1' = confirmed, '-1' = declined
    token: string;
}

export interface GuestExtraInfo {
    guestId: number;
    mealPreference: string;
    notes: string;
    participate: boolean;
}

export type GuestWithExtraInfo = Guest & {
    guestId?: number;
    meal_preference?: string;
    allergies?: string;
    notes?: string;
    participate?: boolean;
};
