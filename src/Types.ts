export interface InitialUserstate {
    user: null | {
        uid: string;
        photo: string;
        email: string;
        displayName: string;
    };
}