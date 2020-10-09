import React from 'react'
import '../collection-item/collection-item.styles.scss';

const CollectionItem = ({id,imageUrl, price, name}) => (
    <div className='collection-item'>
    <div className='image' style={{
    backgroundImage:  `url(${imageUrl})`
    }}>
    </div>
    <div>
        <span className='name'>{name}</span>
        <span className='price'>{price}$</span>
    </div>

    </div>
)

export default CollectionItem;