import Product from './subcomponents/Product/Product';

const procuct = [
    {
        name: `Iphone11`,
        price: 699,
        description: `The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a "Liquid Retina HD Display.`,
        img: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/IPhone_11_White.svg/299px-IPhone_11_White.svg.png`,
        id: 1,
    },
];

const Products: React.FC = () => {
    const productsList = procuct.map(p => <Product key={p.id} {...p} />);

    return <ul>{productsList}</ul>;
};

export default Products;
