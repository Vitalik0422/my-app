import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:'http://localhost:3001/'
})

export enum URL{
    TODO = 'todos',
    TODO_DELETE = 'todos/delete',
}

