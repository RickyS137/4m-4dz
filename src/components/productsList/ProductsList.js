import React from 'react';

function ProductsList({productsList}) {
    return (
        <div>
            {productsList.map((product , key) => <li key={key}>{product}</li>)}
        </div>
    );
}

export default ProductsList;