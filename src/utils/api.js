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


// export const initializeTimes = () => [
//     "12:00", "12:30", "13:00", "13:30",
//     "18:00", "18:30", "19:00", "19:30"
// ];
export const initializeTimes = (selectedDate) => {
    const date = selectedDate ? new Date(selectedDate) : new Date(); // Utilisation de la date passée ou de la date actuelle
    return fetchAPI(date); // Appeler fetchAPI avec la date sélectionnée
};

export const timesReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            return initializeTimes(action.date); // Utiliser la date passée dans l'action
        default:
            return state;
    }
};