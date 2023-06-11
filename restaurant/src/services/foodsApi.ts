import { Food, NewFood } from "../food"

const url =  "https://localhost:3001/foods"

export async function getFoods(): Promise<Food[]> {
    const resp = await fetch(url);
    return resp.json();
}

// Example search: localhost:3001/foods?q=BBQ%20Rib

export async function searchFood(search:string): Promise<Food[]> {
    const searchUrl = url + "?" + new URLSearchParams({ q: search}).toString()
}