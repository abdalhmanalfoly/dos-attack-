import axios from "axios";

export const getApiproducts = async () => {
  try {
    const apiRequestProducts = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    const data = apiRequestProducts.data;
    console.log(data); 
    return data;
  } catch (error) {
    console.error("An error occurred while fetching the API:", error.message);
    return null;
  }
};

