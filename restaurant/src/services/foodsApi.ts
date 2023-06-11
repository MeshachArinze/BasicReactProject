import { Food, NewFood } from "../food";

const url = "https://localhost:3001/foods";

export async function getFoods(): Promise<Food[]> {
  const resp = await fetch(url);
  return resp.json();
}

// Example search: localhost:3001/foods?q=BBQ%20Rib

export async function searchFood(search: string): Promise<Food[]> {
  const searchUrl = url + "?" + new URLSearchParams({ q: search }).toString();
  const resp = await fetch(searchUrl);
  return resp.json();
}

export async function addFood(food: NewFood): Promise<Food> {
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  return resp.json();
}

export async function deleteFood(id: number): Promise<void> {
  const resp = await fetch(url + "/" + id, {
    method: "DELETE",
  });
  return resp.json();
}
