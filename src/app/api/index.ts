import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

export enum URL{
    TODO = 'todos',
    TODO_DELETE = 'todos/delete',
    TODO_IS_COMPLETED = 'todos/isCompleted',
    TODO_FIND = 'todos/find'
}

