const GetCategory = async () => {
  try {
    const res = await fetch(
      "https://nakshatiles-json-server.onrender.com/categories",
    );

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
