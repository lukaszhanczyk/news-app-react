import {useEffect, useState} from "react";
import axiosClient from "../clients/axios-client.jsx";

export const  useUser = () => {

    const [user, setUser] = useState()

    useEffect(() => {
    axiosClient.get('/user')
        .then(response => {
            const user = response.data;
            console.log(user)
            setUser(user)
        })
        .catch((err) => {
            if (err){
                setUser({})
            }
        })
    }, []);

    return user;
}

