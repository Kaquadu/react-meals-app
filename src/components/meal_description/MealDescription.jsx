function MealDescription({meals}) {
  let mealIngriedientsList = null;

  if (!meals) {
    mealIngriedientsList = null;
  } else {
    mealIngriedientsList = meals.map((ingriedient) => {
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