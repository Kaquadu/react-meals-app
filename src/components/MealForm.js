import './MealForm.css';
import {useRef} from 'react';

function MealForm(props) {
  const mealRef = useRef(null);

  return (
    <form onSubmit={(e) => {
      props.fetchMeals(mealRef.current.value);
      e.preventDefault();
    }}>
      <label>
        Describe your meal:
      </label>
      <textarea ref={mealRef} name="name" />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default MealForm;