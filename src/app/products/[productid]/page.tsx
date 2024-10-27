import { Metadata } from "next";
type Props = {
    params: {
        productid: string;
    };
};

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title:`Product ${params.productid}`,
    };
};

export default function ProductDetails({
    params,
 }: {
    params: {productid: string};
}) {

    return <h1>Details about Product {params.productid}</h1>
}