import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ParamTypes } from '@pages/ProductDetail/ProductDetail';
import { motion } from 'framer-motion';
import { RootStore } from '@store/Store';
import { GetData, SendProduct } from '@store/MobileStore/MobileStore.services';
import { GetUserData, UpdateUser } from '@store/User/User.services';
import { GET_PRODUCTS, SENT_ORDER } from '@store/MobileStore/MobileStore.actions';
import pageTransitionFM from '@pages/pageTransition';
import Button from '@components/Ui/Button/Button';
import useForm from '@hooks/useForm';
import Loader from '@components/Ui/Loader/Loader';
import ErrorModal from '@components/Ui/ErrorModal/ErrorModal';
import styles from './FormOrder.module.css';

const emialRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const OrderForm: React.FC = () => {
    const { productName } = useParams<ParamTypes>();
    const history = useHistory();
    const dispatch = useDispatch();
    const { products, loading, sent: isSent, error } = useSelector((state: RootStore) => state.mobileStore);
    const { totalAmount, quantityOfOrders } = useSelector((state: RootStore) => state.user);
    // GET DATA AGAIN
    useEffect(() => {
        dispatch(GetUserData());
        dispatch(GetData(`/products-header`, GET_PRODUCTS));
        dispatch({ type: SENT_ORDER, payload: false });
    }, [dispatch]);

    const {
        value: nameValue,
        handleValue: handleNameValue,
        handleIsTouched: handleNameIsTouched,
        error: handleNameError,
        isValid: isNameValid,
    } = useForm((value: string) => value.trim() !== '');
    const {
        value: emailValue,
        handleValue: handleEmailValue,
        handleIsTouched: handleEmailIsTouched,
        error: handleEmailError,
        isValid: isEmailValid,
    } = useForm((value: string) => emialRegex.test(value));
    const {
        value: cityValue,
        handleValue: handleCityValue,
        handleIsTouched: handleCityIsTouched,
        error: handleCityError,
        isValid: isCityValid,
    } = useForm((value: string) => value.trim() !== '');
    const {
        value: postalValue,
        handleValue: handlePostalValue,
        handleIsTouched: handlePostalIsTouched,
        error: handlePostalError,
        isValid: isPostalValid,
    } = useForm((value: string) => value.trim() !== '');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const product = products!.find(product => product.id === productName);
        delete product!.visible;
        const date = new Date().toISOString().slice(0, 19);

        const userData = { name: nameValue, email: emailValue, city: cityValue, postalCode: postalValue };
        const orderedProduct = { id: 'any', productInfo: { ...product! }, userData: { ...userData, date } };

        const newTotalAmount = totalAmount + product!.price;
        const newQuantityOfOrders = quantityOfOrders + 1;

        dispatch(SendProduct(orderedProduct));
        dispatch(UpdateUser(newTotalAmount, newQuantityOfOrders));
    };

    const handleClose = () => history.replace('/home');

    let isFormValid = isNameValid && isEmailValid && isCityValid && isPostalValid;

    const nameError = handleNameError && <p>Please enter a valid Full Name!</p>;
    const emailError = handleEmailError && <p>Please enter a valid Email!</p>;
    const cityError = handleCityError && <p>Please enter a valid City!</p>;
    const postalError = handlePostalError && <p>Please enter a valid Postal Code!</p>;
    const buttonInfo = !isFormValid && <p>Please fill all required fields (*)</p>;

    const formContext = (
        <>
            <article>
                <p>You're ordering</p>
                <h2>{productName}</h2>
            </article>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">
                    *Full Name
                    <input
                        onBlur={handleNameIsTouched}
                        onChange={handleNameValue}
                        value={nameValue}
                        id="fullname"
                        type="text"
                    />
                    {nameError}
                </label>
                <label htmlFor="email">
                    *Email
                    <input
                        onBlur={handleEmailIsTouched}
                        onChange={handleEmailValue}
                        value={emailValue}
                        id="email"
                        type="text"
                    />
                    {emailError}
                </label>
                <label htmlFor="city">
                    *City
                    <input
                        onBlur={handleCityIsTouched}
                        onChange={handleCityValue}
                        value={cityValue}
                        id="city"
                        type="text"
                    />
                    {cityError}
                </label>
                <label htmlFor="postalCode">
                    *Postal Code
                    <input
                        onBlur={handlePostalIsTouched}
                        onChange={handlePostalValue}
                        value={postalValue}
                        id="postalCode"
                        type="text"
                    />
                    {postalError}
                </label>
                <Button isDisabled={!isFormValid}>buy</Button>
                {buttonInfo}
            </form>
        </>
    );

    const successComponent = (
        <>
            <p className={styles.success}>Your order has been processed</p>
            <Button click={handleClose}>close</Button>
        </>
    );

    return (
        <motion.div {...pageTransitionFM} className={styles.formOrder}>
            {!loading && !isSent ? formContext : null}
            {loading ? <Loader /> : null}
            {!loading && isSent && error === '' ? successComponent : null}
            {!loading && error !== '' ? <ErrorModal /> : null}
        </motion.div>
    );
};

export default OrderForm;
