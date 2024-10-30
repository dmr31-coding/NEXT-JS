import { Metadata } from "next";
import { resolve } from "path";
type Props = {
    params: {
        productid: string;
    };
};

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {

    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iphone ${params.productid}`)
        }, 100)
    })

    return {
        title:`Product ${title}`,
    };
};

export default function ProductDetails({
    params,
 }: {
    params: {productid: string};
}) {

    return <h1>Details about Product {params.productid}</h1>
}