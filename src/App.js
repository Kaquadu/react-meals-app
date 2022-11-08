import './App.css';
import MealForm from './components/MealForm';
import MealDescription from './components/MealDescription';
import { useState } from 'react';
import Meal from './middleware/Meal';

function App() {
  const [meals, setMeals] = useState([]);

  function FetchMeals(query) {
    Meal.fetchMeal(query).then(() => setMeals(Meal.getCurrentMeal()));
  }

  return (
    <div>
      <header>
        What did you just eat?
      </header>
      <MealForm fetchMeals={FetchMeals}/>
      <MealDescription meals={meals}/>
    </div>
  );
}

export default App;
