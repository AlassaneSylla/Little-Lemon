import { menuItems } from '../utils/api';

export default function Menu() {
    return (
      <section id='menu' className="menu">
        <div className="container">
            <div>
                <h1 aria-labelledby="menu-title">🍋 Flavors to Savor</h1>
                <p className='lead-text' aria-describedby="menu-description">The best dishes in New York city !</p>
            </div>
            <div className='menuContainer'>
                <div className='menuCard'>
                    {menuItems.map((menuItem, index) => (
                    <div key={index} className="menuItem">
                        <div className='dishPicture'>
                            <img src={menuItem.image} alt='' />
                        </div>
                        <div className='cardMenuItemBody'>
                            <h3>{menuItem.name}</h3>
                            <p>{menuItem.description}</p>
                            <p className="price">{menuItem.price}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    );
}





