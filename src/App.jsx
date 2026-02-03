import { useState, useRef } from "react";
import Country from "./components/country";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ]);

  const medals = useRef([
    { id: 1, name: "Gold" },
    { id: 2, name: "Silver" },
    { id: 3, name: "Bronze" },
  ]);

  function handleDelete(countryId) {
    setCountries(countries.filter(c => c.id !== countryId));
  }

  function handleIncrement(countryId, medal) {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx][medal] += 1;
    setCountries(countriesMutable);
  }

  function handleDecrement(countryId, medal) {
    const countriesMutable = [...countries];
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx][medal] -= 1;
    setCountries(countriesMutable);
  }

  return (
    <div>
      {countries.map((country) => (
        <Country key={country.id} country={country} medals={medals} onDelete={handleDelete} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      ))}
    </div>
  );
}

export default App;