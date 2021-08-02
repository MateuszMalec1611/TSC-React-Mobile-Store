import React from 'react';
import Button from '@components/Ui/Button/Button';
import styles from './FormOrder.module.css';
export interface OrderFormProps {}

const OrderForm: React.FC<OrderFormProps> = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(`submited`);
    };

    return (
        <div className={styles.formOrder}>
            <article>
                <p>Your're ordering</p>
                <h2>Iphone11</h2>
            </article>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">
                    Full Name
                    <input id="fullname" type="text" />
                </label>
                <label htmlFor="email">
                    Email
                    <input id="email" type="text" />
                </label>
                <label htmlFor="city">
                    City
                    <input id="city" type="text" />
                </label>
                <label htmlFor="postalCode">
                    Postal Code
                    <input id="postalCode" type="text" />
                </label>
                <Button>Submit</Button>
            </form>
        </div>
    );
};

export default OrderForm;
