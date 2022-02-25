export const fetchData = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      return undefined;
    }
    return response.json();
  } catch (err) {
    throw err;
  }
}