import './MealForm.css';
import {useRef} from 'react';

export default function MealForm({setBody}) {
  const mealRef = useRef(null);

  return (
    <form onSubmit={(e) => {
      setBody({query: mealRef.current.value});
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