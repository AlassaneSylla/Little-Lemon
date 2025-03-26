import './App.css'

function Card({image, title, price, description}) {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image} alt='food'/>
            </div>
            <div className='body'>
                <div className='card-header'>
                    <h3>{title}</h3>
                    <p className='price'>{price}</p>
                </div>
                <p className='description'>{description}</p>
                <p className='footer'>Order a delevery</p>
            </div>
        </div>
    );
}

export default Card;