function RecipeCard({
  title,
  image,
  description,
  category,
  servings,
  ingredients,
}) {
  return (
    <article className="recipe-card">
      <img src={image} alt={title} />

      <div className="recipe-card-content">
        <h3>{title}</h3>

        {/* Category */}
        {category && (
          <div className="recipe-category">
            {category}
          </div>
        )}

        <p className="recipe-description">
          {description}
        </p>

        {/* Servings */}
        {servings && (
          <p className="servings">
            <strong>Servings:</strong> {servings}
          </p>
        )}

        {/* Ingredients */}
        <div className="ingredients-section">
          <h4>Ingredients</h4>

          <ul>
            {ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;