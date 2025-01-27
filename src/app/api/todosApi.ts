import { axiosInstance, URL } from ".";
import { deleteId, todoCreate,updateTodo } from "@/store/todosStore/types";


export const todosApi = {
    create(data: todoCreate){
        return axiosInstance.post(URL.TODO, data)
    },
    get(id: deleteId){
        return axiosInstance.post(URL.TODO_FIND, id)
    },
    getAll(){
        return axiosInstance.get(URL.TODO)
    },
    update(data: updateTodo){
        return axiosInstance.put(URL.TODO, data)
    },
    delete(data: deleteId){
        return axiosInstance.post(URL.TODO_DELETE, data)
    },
    isCompleted(data: {id: number, isCompleted: boolean}){
        return axiosInstance.post(URL.TODO_IS_COMPLETED, data)
    }
}