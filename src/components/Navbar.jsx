function Navbar({ showAddRecipe, setShowAddRecipe }) {
  const handleAddRecipeClick = (e) => {
    e.preventDefault();
    setShowAddRecipe((current) => !current);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setShowAddRecipe(false);
  };

  return (
    <nav>
      <a href="#home" onClick={handleHomeClick}>
        Home
      </a>

      <a href="#add-recipe" onClick={handleAddRecipeClick}>
        {showAddRecipe ? "Close Form" : "Add Recipe"}
      </a>
    </nav>
  );
}

export default Navbar;