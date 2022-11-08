function MealDescription(props) {
  let mealIngriedientsList = null;
  if (!props.meals) {
    mealIngriedientsList = null;
  } else {
    mealIngriedientsList = props.meals.map((ingriedient) => {
      return (
        <li key={ingriedient.food_name}>
          Name: {ingriedient.food_name}, calories: {ingriedient.nf_calories}
        </li>)
    });
  }

  return (
    <div>
      <ul>
        {mealIngriedientsList}
      </ul>
    </div>
  )
}

export default MealDescription;