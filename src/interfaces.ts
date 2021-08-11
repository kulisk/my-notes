export interface LoginDataInterface {
    login: string
    password: string
}

export interface SignUpDataInterface {
    login: string
    email: string
    password: string
}

export interface CreateDataInterface {
    title: string
    tags?: string[]
    files?: FileList | null
    content: string
}
