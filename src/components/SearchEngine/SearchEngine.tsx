import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '@store/Store';
import styles from './SearchEngine.module.css';
import { DISPLAY_PRODUCT } from '@store/MobileStore/MobileStore.actions';

const SearchEngine: React.FC = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const products = useSelector((state: RootStore) => state.mobileStore.products);

    const displayCertainProduct = () => {
        const text = searchRef.current!.value.toLocaleLowerCase();

        const newProductsList = products.map(product => {
            if (product.name.toLocaleLowerCase().includes(text)) {
                return { ...product, visible: true };
            } else {
                return { ...product, visible: false };
            }
        });

        dispatch({ type: DISPLAY_PRODUCT, payload: newProductsList });
    };

    return (
        <div className={styles.searchEngine}>
            <input onChange={displayCertainProduct} ref={searchRef} placeholder="Search" type="text" />
        </div>
    );
};

export default SearchEngine;
