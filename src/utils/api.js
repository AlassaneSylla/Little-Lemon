import bruchetta from '../assets/bruchetta.svg';
import greek from '../assets/greek salad.jpg';
import lemon from '../assets/lemon dessert.jpg';
import spaghettiPomodoro from '../assets/spaghetti pomodoro.jpg';
import margaritaPizza from '../assets/margarita pizza.jpg';
import grilledSalmon from '../assets/grilled salmon.jpg';
import stuffedPepper from '../assets/stuffed pepper.jpg';
import tiramisu from '../assets/Tiramisu.jpg';

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}
const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
export const submitAPI = function(formData) {
    return true;
};

export const testimonials = [
    {
      id: 1,
      name: "Alice",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      message: "Little Lemon is the best restaurant in New York City. The food is just amazing!",
    },
    {
      id: 2,
      name: "John",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      message: "The ambiance and the service were top-notch. Will definitely come again!",
    },
    {
      id: 3,
      name: "Sophie",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      message: "I loved their Greek salad! Fresh and delicious. Highly recommend this place!",
    },
    {
      id: 4,
      name: "Papa Alassane",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      message: "A wonderful dining experience! The staff was friendly, and the food was superb.",
    },
];

export const menuItems = [
    {
        id: 0,
        image: bruchetta,
        name: "Bruschetta",
        description: "Grilled bread topped with garlic, tomatoes, and basil",
        price: '$6.99',
    },
    {
        id: 1,
        image: greek,
        name: "Greek Salad",
        description: "Fresh salad with feta cheese, olives, and vinaigrette",
        price: '$8.49',
    },
    {
        id: 2,
        image: lemon,
        name: "Lemon Dessert",
        description: "Creamy lemon tart with a buttery crust",
        price: '$5.99',
    },
    {
        id: 3,
        image: spaghettiPomodoro,
        name: "Spaghetti Pomodoro",
        description: "Classic tomato and basil pasta",
        price: '$9.99',
    },
    {
        id: 4,
        image: margaritaPizza,
        name: "Margherita Pizza",
        description: "Stone-baked pizza with fresh mozzarella and basil",
        price: '$11.99',
    },
    {
        id: 5,
        image: grilledSalmon,
        name: "Grilled Salmon",
        description: "Served with roasted vegetables and lemon butter sauce",
        price: '$14.5',
    },
    {
        id: 6,
        image: stuffedPepper,
        name: "Stuffed Peppers",
        description: "Bell peppers filled with seasoned rice and beef",
        price: '$10.25',
    },
    {
        id: 7,
        image: tiramisu,
        name: "Tiramisu",
        description: "Traditional Italian coffee-flavored dessert",
        price: '$6.75',
    },
];


// export const initializeTimes = () => [
//     "12:00", "12:30", "13:00", "13:30",
//     "18:00", "18:30", "19:00", "19:30"
// ];
export const initializeTimes = (selectedDate) => {
    const date = selectedDate ? new Date(selectedDate) : new Date();
    return fetchAPI(date);
};

export const timesReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            return initializeTimes(action.date);
        default:
            return state;
    }
};