import axios from "axios";

export async function listar(){
    const request = await axios.get('http://localhost:8080/material/1',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    })
    return request    
}