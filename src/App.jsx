import { useState } from "react";
import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";
import Footer from "./components/Footer";
import RecipeForm from "./components/RecipeForm";

function App() {
  // State for showing and hiding recipes
  const [showRecipes, setShowRecipes] = useState(true);

  // State for Add Recipe form
  const [showAddRecipe, setShowAddRecipe] = useState(false);

  // State for the search input
  const [searchTerm, setSearchTerm] = useState("");

  // Recipe data
  const [recipes, setRecipes] = useState([
    {
      title: "Vegetable Soup",
      image: "/images/vegetable-soup.jpg",
      description:
        "A delicious and comforting vegetable soup made with fresh vegetables and a flavorful broth.",
      category: "Lunch",
      servings: 4,
      ingredients: ["Carrots", "Potatoes", "Onions", "Tomatoes"],
    },
    {
      title: "Grilled Chicken Sandwich",
      image: "/images/grilled-chicken-sandwich.png",
      description:
        "A tasty grilled chicken sandwich made with tender chicken, fresh vegetables, and bread.",
      category: "Lunch",
      servings: 2,
      ingredients: ["Chicken", "Bread", "Lettuce", "Tomato"],
    },
    {
      title: "Doro Wot",
      image: "/images/doro-wat.jpg",
      description:
        "A traditional Ethiopian chicken stew prepared with spices, onions, and a rich sauce.",
      category: "Dinner",
      servings: 4,
      ingredients: ["Chicken", "Onions", "Berbere", "Eggs"],
    },
  ]);

  // Add a new recipe
  const handleAddRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [
      ...currentRecipes,
      newRecipe,
    ]);

    // Close form after adding
    setShowAddRecipe(false);
  };

  // Filter recipes based on search input
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header
        showAddRecipe={showAddRecipe}
        setShowAddRecipe={setShowAddRecipe}
      />

      <main>
        {/* Welcome message */}
        {!showAddRecipe && (
          <p className="welcome-message">
            Welcome to the Hiruy Recipe Platform, a place to discover and
            explore delicious recipes from different cuisines. Find simple
            recipes, learn how to prepare them, and enjoy cooking at home.
          </p>
        )}

        {/* Add Recipe Form */}
        {showAddRecipe && (
          <RecipeForm
            onAddRecipe={handleAddRecipe}
            onCancel={() => setShowAddRecipe(false)}
          />
        )}

        {/* Recipes Section */}
        {!showAddRecipe && (
          <section className="recipes-section">
            <h2>Recipes</h2>

            {/* Search and Show/Hide Controls */}
            <div className="recipe-controls">
              <input
                type="text"
                placeholder="Search for a recipe..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <button
                onClick={() => setShowRecipes(!showRecipes)}
              >
                {showRecipes ? "Hide Recipes" : "Show Recipes"}
              </button>
            </div>

            {/* Recipe List */}
            {showRecipes && (
              <div className="recipe-list">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.title}
                    title={recipe.title}
                    image={recipe.image}
                    description={recipe.description}
                    category={recipe.category}
                    servings={recipe.servings}
                    ingredients={recipe.ingredients}
                  />
                ))}
              </div>
            )}

            {/* No Results */}
            {showRecipes && filteredRecipes.length === 0 && (
              <p className="no-results">
                No recipes found. Try another search.
              </p>
            )}
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;