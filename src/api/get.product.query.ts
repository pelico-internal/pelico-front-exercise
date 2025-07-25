export function getProduct(id: string) {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
}
