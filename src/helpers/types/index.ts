export type Currency = {
    id: number,
    name: string,
    abreviature: string
}

export type Category = {
    id: number,
    name: string
}

export type Client = {
    id: number,
    name: string,
    email: string,
    photo_url: string,
    date_of_birth: string
}

export type Transaction = {
    id: number,
    title: string,
    amount: number,
    date?: string,
    description: string,
    type_id: number,
    category_id: number,
    currency_id: number
    type?: string,
    category?: string,
    currency?: string,
    accounts?: Array<{balance: string, currency: string}>
}
// Por como vienen los datos del mock se implemento asi momentaneamente