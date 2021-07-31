import Product from '@components/Product/Product';
import styles from './Home.module.css'

export interface HomeProps {}

const procuct = [
    {
        name: `Iphone 11`,
        price: 699,
        description: `The iPhone 11 succeeds the iPhone XR, and it features a 6.1-inch LCD display that Apple calls a "Liquid Retina HD Display.`,
        img: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/IPhone_11_White.svg/299px-IPhone_11_White.svg.png`,
        id: 1,
    },
];

const Home: React.FC<HomeProps> = () => {
    const productsList = procuct.map(p => <Product key={p.id} {...p} />);

    return (
        <div className={styles.home}>
            <h2>Our phones on sale</h2>
            <ul>{productsList}</ul>
        </div>
    );
};

export default Home;
