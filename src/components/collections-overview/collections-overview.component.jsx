import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';
import CollectionsContext from '../../contexts/collections/collections.context';

const CollectionsOverview = () => {
  const { collections } = useContext(CollectionsContext);
  const getCollectionsForPreview = () => Object.keys(collections).map(key => collections[key]);
  const collectionsPreview = getCollectionsForPreview();

  return (
    <div className='collections-overview'>
      {collectionsPreview.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
};

export default CollectionsOverview;
