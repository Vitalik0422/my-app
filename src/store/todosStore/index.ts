import { todosApi } from "@/app/api/todosApi";
import { todoCreate ,updateTodo } from "./types";

export const todosStore = {

    async createTodo(data:todoCreate )
    {
        const response = await todosApi.create(data)
        return response
    },
    async getTodo(){
        const response = await todosApi.getAll()
        return response.data
    },
    async deleteTodo(ids: number[]){
        const response = await todosApi.delete(ids)
        return response.data 
    },  
    async updateTodo(data: updateTodo){
        const response = await todosApi.update(data)
        return response.data
    }
}