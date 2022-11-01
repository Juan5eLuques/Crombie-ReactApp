export const deleteProduct = async (id: number) => {
  try {
    await fetch(
      `https://express-production.up.railway.app/product/delete/${id}`,
      {
        method: "DELETE",
      }
    );
  } catch (err) {
    console.log(err);
  }
};
