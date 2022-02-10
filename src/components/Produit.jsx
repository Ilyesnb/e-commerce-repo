
const Produit = ({apple,prix, Commander }) => {
const handleClick =()=>{
    Commander(prix)
}
    return (
        <div className="items" >
            <h4>{apple}</h4>
            <p className='silver'>{prix}</p>
            <button className='nothing'onClick={handleClick} >ajouter au panier</button>
        </div>
    );
};

export default Produit;