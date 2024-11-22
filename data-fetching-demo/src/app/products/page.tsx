type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
};


export default async function ProductPage() {

    const response = await fetch("http://localhost:3000/products")
    const products = await response.json()
    return (
        <ul>
            {products.map((product: Product) => (
                <li key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>

                </li>
            ))}
        </ul>
    )
}