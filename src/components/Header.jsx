import Navbar from "./Navbar";

function Header({ showAddRecipe, setShowAddRecipe }) {
  return (
    <header>
      <h1>Hiruy Recipe Platform</h1>

      <Navbar
        showAddRecipe={showAddRecipe}
        setShowAddRecipe={setShowAddRecipe}
      />
    </header>
  );
}

export default Header;

