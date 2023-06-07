import axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "00c24f1d-a625-483f-8a89-0e5f78771e42"
        }
    }
)
export const usersAPI = {
    getUsers (currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    getUsers2 (id)  {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    getUsers3 (id)  {
        return instance.post(`follow/${id}`,{})
            .then(response => {
                return response.data
            })
    }
}

