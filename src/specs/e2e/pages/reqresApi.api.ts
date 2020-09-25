import * as axios from "axios";
import * as reqres from "reqres/user";

const { I } = inject();

export = {
    user: {
        createUser: (payload?: reqres.CreateUserInput, headers?: Record<string, string>):
            Promise<axios.AxiosResponse<reqres.CreateUser>> => {
            return I.sendPostRequest<reqres.CreateUserInput, reqres.CreateUser>("/api/users", payload, headers);
        },
        emplaceUser: (id: number, payload?: reqres.CreateUserInput, headers?: Record<string, string>):
            Promise<axios.AxiosResponse<reqres.UpdateUser>> => {
            return I.sendPutRequest<reqres.CreateUserInput, reqres.UpdateUser>(`/api/users/${id}`, payload, headers);
        },
        getUser: (id: number, headers?: Record<string, string>): Promise<axios.AxiosResponse<reqres.SingleUser>> => {
            return I.sendGetRequest<reqres.SingleUser>(`/api/users/${id}`, headers);
        },
        listUsers: (headers?: Record<string, string>): Promise<axios.AxiosResponse<reqres.ListUsers>> => {
            return I.sendGetRequest<reqres.ListUsers>("/api/users", headers);
        },
    },
};
