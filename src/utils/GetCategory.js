const GetCategory = async () => {
  try {
    const res = await fetch(`${process.env.DATABASE_URI}/categories`);

    if (!res.ok) {
      throw new Error("Failed to fetch category");
    }

    const data = await res.json();

    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default GetCategory;
