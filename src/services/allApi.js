import axios from "axios";

const base_url = "https://recipeserver-qn8k.onrender.com"

export const addRecipeApi=async(data)=>{
    return await axios.post(`${base_url}/recipe`,data)
}

export const getRecipeApi=async()=>{
    return await axios.get(`${base_url}/recipe`)
}

export const deleteRecipeApi=async(id)=>{
    return await axios.delete(`${base_url}/recipe/${id}`)
}

export const updateRecipeApi=async(id,data)=>{
    return await axios.put(`${base_url}/recipe/${id}`,data)
}