import axios from "axios";

const uri = 'https://reqres.in/api/';
export const api = axios.create({baseURL: uri});

export const getDepartment = ()=>(
    [
        {id: '1', title: 'CSE'},
        {id: '2', title: 'EEE'},
        {id: '3', title: 'Civil'},
        {id: '4', title: 'Physics'},
    ]
);
