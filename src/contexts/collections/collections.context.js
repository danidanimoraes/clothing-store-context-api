import { createContext } from 'react';
import SHOP_DATA from './shop.data.js';

// initial context value = SHOP_DATA
const CollectionsContext = createContext({
    collections: SHOP_DATA,
    getCollectionsForPreview: () => { }
});

export default CollectionsContext