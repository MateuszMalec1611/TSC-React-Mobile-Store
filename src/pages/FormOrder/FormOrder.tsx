import React from 'react';
import { motion } from 'framer-motion';
import pageTransitionFM from '@pages/pageTransition';
import Button from '@components/Ui/Button/Button';
import styles from './FormOrder.module.css';
import useForm from '@hooks/useForm';

const emialRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const OrderForm: React.FC = () => {
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
        console.log(`submited`);
    };

    let isFormValid = isNameValid && isEmailValid && isCityValid && isPostalValid;

    const nameError = handleNameError && <p>Please enter a valid Full Name!</p>;
    const emailError = handleEmailError && <p>Please enter a valid Email!</p>;
    const cityError = handleCityError && <p>Please enter a valid City!</p>;
    const postalError = handlePostalError && <p>Please enter a valid Postal Code!</p>;
    const buttonInfo = !isFormValid && <p>Please fill all required fields (*)</p>;
    return (
        <motion.div {...pageTransitionFM} className={styles.formOrder}>
            <article>
                <p>Your're ordering</p>
                <h2>Iphone11</h2>
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
                <Button isDisabled={!isFormValid}>Submit</Button>
                {buttonInfo}
            </form>
        </motion.div>
    );
};

export default OrderForm;
