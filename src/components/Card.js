import '../App.css'

function Card({image, title, price, description}) {
    return (
        <div
            className='card'
            role="article"
            aria-labelledby={`card-title-${title}`}
            aria-describedby={`card-description-${title}`}
        >
            <div className='card-image'>
                <img src={image} alt='food'/>
            </div>
            <div className='body'>
                <div className='card-header'>
                    <h3 id={`card-title-${title}`}>{title}</h3>
                    <p className='price' aria-label={`Price: ${price}`}>{price}</p>
                </div>
                <p id={`card-description-${title}`} className='description'>{description}</p>
                <p aria-label={`Order a delivery for ${title}`} className='footer'>Order a delevery</p>
            </div>
        </div>
    );
}

export default Card;