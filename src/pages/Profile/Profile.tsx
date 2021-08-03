import OrderedProduct from '@components/OrderedProduct/OrderedProduct';

const Profile: React.FC = () => {
    return (
        <div>
            <h2>Your Orders</h2>
            <div>
                <OrderedProduct />
            </div>
        </div>
    );
};

export default Profile;
