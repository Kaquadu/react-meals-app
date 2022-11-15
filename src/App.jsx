import './App.css';
import MealForm from './components/meal_form/MealForm';
import MealDescription from './components/meal_description/MealDescription';
import { useState } from 'react';
import useApiPost from './hooks/UseApiPost'
// import Meal from './middleware/Meal';

function App() {
  const [body, setBody] = useState({query: ""});

  const {data, status} = useApiPost('https://trackapi.nutritionix.com/v2/natural/nutrients', body);

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
