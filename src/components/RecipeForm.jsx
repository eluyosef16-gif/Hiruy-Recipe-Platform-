function RecipeForm({ onAddRecipe, onCancel }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      title: e.target.title.value,
      image: e.target.image.value,
      description: e.target.description.value,
      category: e.target.category.value,
      servings: e.target.servings.value,
      ingredients: e.target.ingredients.value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };

    onAddRecipe(newRecipe);

    e.target.reset();
  };

  return (
    <section className="add-recipe-section">
      <div className="add-recipe-card">

        {/* Form Header */}
        <div className="form-header">
          <div>
            <h2>Add Your Recipe</h2>

            <p className="form-description">
              Share your favorite recipe with everyone!
            </p>
          </div>

          <button
            type="button"
            className="close-form-button"
            onClick={onCancel}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Recipe Name */}
          <div className="form-group">
            <label>Recipe Name</label>

            <input
              type="text"
              name="title"
              placeholder="Enter recipe name"
              required
            />
          </div>

          {/* Image */}
          <div className="form-group">
            <label>Image URL</label>

            <input
              type="url"
              name="image"
              placeholder="Paste image URL"
              required
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              placeholder="Describe your recipe..."
              rows="5"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <select name="category" required>
              <option value="">Select a category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
              <option value="Snack">Snack</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>

          {/* Servings */}
          <div className="form-group">
            <label>Servings</label>

            <input
              type="number"
              name="servings"
              placeholder="Example: 4"
              min="1"
              required
            />
          </div>

          {/* Ingredients */}
          <div className="form-group">
            <label>Ingredients</label>

            <input
              type="text"
              name="ingredients"
              placeholder="Example: Chicken, Onion, Garlic, Salt"
              required
            />

            <small>
              Separate each ingredient with a comma.
            </small>
          </div>

          {/* Buttons */}
          <div className="form-buttons">
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="add-recipe-button"
            >
              Add Recipe
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default RecipeForm;