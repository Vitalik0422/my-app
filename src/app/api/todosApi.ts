import { axiosInstance, URL } from ".";
import { todoCreate,updateTodo } from "@/store/todosStore/types";


export const todosApi = {
    create(data: todoCreate){
        return axiosInstance.post(URL.TODO, data)
    },
    get(id: string){
        return axiosInstance.get(URL.TODO + `/${id}`)
    },
    getAll(){
        return axiosInstance.get(URL.TODO)
    },
    update(data: updateTodo){
        return axiosInstance.put(URL.TODO, data)
    },
    delete(id: number[]){
        return axiosInstance.post(URL.TODO_DELETE, id)
    }
}