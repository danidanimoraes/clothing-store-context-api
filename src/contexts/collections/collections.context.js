import { createContext } from 'react';
import SHOP_DATA from '../../redux/shop/shop.data';

// initial context value = SHOP_DATA
const CollectionsContext = createContext(SHOP_DATA);


export default CollectionsContext