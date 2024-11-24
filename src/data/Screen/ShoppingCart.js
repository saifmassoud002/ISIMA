import { FlatList } from 'react-native';

import cart from '../Cart';
import CartListItem from '../../components/CartListItem';

const ShoppingCart = () => {
return (
<FlatList
data={cart}
renderItem={({ item }) => <CartListItem cartItem={item} />}
/>
);
};

export default ShoppingCart;