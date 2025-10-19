import axios from 'axios'

const API = axios.create({
    baseURL: "https://image-generator-eight-wine.vercel.app/api/"
})

export const getPosts = async () => await API.get('/post/') ;
export const createPost = async (data) => await API.post('/post/create/' , data) ;
export const generateImage = async (data) => await API.post('/ai/generate' , data) ;