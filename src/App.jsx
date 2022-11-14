import './App.css';
import MealForm from './components/meal_form/MealForm';
import MealDescription from './components/meal_description/MealDescription';
import { useState } from 'react';
import useFetch from './hooks/UseFetch'
// import Meal from './middleware/Meal';

function App() {
  const [body, setBody] = useState('');

  let headers = {
    'Content-Type': 'application/json',
    'x-app-id': process.env.REACT_APP_NUTRI_API_APP_ID,
    'x-app-key': process.env.REACT_APP_NUTRI_API_APP_SECRET
  }
  const {data, status} = useFetch('https://trackapi.nutritionix.com/v2/natural/nutrients', body, headers);

  return (
    <div>
      <header>
        What did you just eat?
      </header>
      <MealForm setBody={setBody}/>
      <MealDescription meals={data}/>
      <div>{ status }</div>
    </div>
  );
}

export default App;
