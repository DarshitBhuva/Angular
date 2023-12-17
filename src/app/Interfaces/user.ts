export interface User {
    id: number,
    userName: string,
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    },
    email: string,
    phone: string,
    gender: string
}
