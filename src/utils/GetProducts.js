const GetProducts = async () => {
  try {
    const res = await fetch(`${process.env.DATABASE_URI}/products`);

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();

    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default GetProducts;
