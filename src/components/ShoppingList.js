import { useState } from "react";
import { plantList } from "../plantList";
import Plant from "./Plant";

const ShoppingList = ({ cart, setCart }) => {
  const [filterPlants, setFilterPlants] = useState("Toutes les plantes");
  const categories = [
    "Toutes les plantes",
    ...new Set(plantList.map((plant) => plant.category))
  ];

  const addToCart = (plant) => () => {
    const currentPlantAdded = cart.find(
      (itemPlant) => itemPlant.name === plant.name
    );
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (item) => item.name !== plant.name
      );

      setCart([
        ...cartFilteredCurrentPlant,
        { ...plant, quantity: currentPlantAdded.quantity + 1 }
      ]);
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };
  const handleChange = (e) => {
    setFilterPlants(e.target.value);
  };
  return (
    <div>
      <select onChange={handleChange} name="plants">
        {categories.map((category) => (
          <option value={category}> {category} </option>
        ))}
      </select>
      <div className="plantList">
        {plantList
          .filter((plant) => {
            if (filterPlants === "Toutes les plantes") {
              return plant;
            }
            return plant.category === filterPlants;
          })
          .map((plant) => (
            <div key={plant.id} className="plant">
              <Plant {...plant} />
              <button onClick={addToCart(plant)}>Ajouter</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShoppingList;
