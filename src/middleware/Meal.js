import axios from 'axios';
// depreciated
const Meal = {
  CURRENT_MEAL: [],

  fetchMeal(query) {
    // get query and update current meal
    let body = {
      query: query
    }

    let headers = {
      'Content-Type': 'application/json',
      'x-app-id': process.env.REACT_APP_NUTRI_API_APP_ID,
      'x-app-key': process.env.REACT_APP_NUTRI_API_APP_SECRET
    }

    const promise = axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients', body, {headers: headers}).then((response) => {
      this.CURRENT_MEAL = response.data.foods;
    });

    return promise;
  },

  getCurrentMeal() {
    return this.CURRENT_MEAL;
  }
}

export default Meal;