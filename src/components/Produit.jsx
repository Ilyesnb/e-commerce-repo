import React from 'react';

const Produit = ({apple,prix}) => {
    return (
        <div >
             <h4>{apple}</h4>
            <p className='silver'>{prix}</p>
            <button className='nothing'>ajouter au panier</button>
            
        </div>
    );
};

export default Produit;