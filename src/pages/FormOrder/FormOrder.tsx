import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ParamTypes } from '@pages/ProductDetail/ProductDetail';
import { motion } from 'framer-motion';
import { RootStore } from '@store/Store';
import { GetProducts, SendProduct } from '@store/Services/MobileStore.services';
import { SENT_ORDER } from '@store/Actions/MobileStore.actions';
import pageTransitionFM from '@pages/pageTransition';
import Button from '@components/Ui/Button/Button';
import styles from './FormOrder.module.css';
import useForm from '@hooks/useForm';
import Loader from '@components/Ui/Loader/Loader';

const emialRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const OrderForm: React.FC = () => {
    const { productName } = useParams<ParamTypes>();
    const history = useHistory();
    const dispatch = useDispatch();
    const { products, loading, sent: isSent, error } = useSelector((state: RootStore) => state.mobileStore);

    useEffect(() => {
        if (products?.length === 0) dispatch(GetProducts());
        dispatch({ type: SENT_ORDER, payload: false });
    }, [dispatch, products]);

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
        const date = new Date().toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'long' });

        const userData = { name: nameValue, email: emailValue, city: cityValue, postalCode: postalValue };
        const orderedProduct = { productInfo: { ...product! }, userData: { ...userData, date } };

        dispatch(SendProduct(orderedProduct));
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
                <p>Your're ordering</p>
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
            {!loading && isSent && error !== '' ? <p className={styles.fail}>{error}</p> : null}
        </motion.div>
    );
};

export default OrderForm;
