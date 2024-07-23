import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aside from "./components/Aside";
import ModalPokemon from "./components/ModalPokemon";
import Pokemons from "./components/Pokemons";
import usePokemonContext from "./hooks/usePokemonContext";
import LandingPage from "./components/LandingPage";

function App() {
  const { showDetailPokemon, closePokemonDetail, pokemonDetail, isLoading } =
    usePokemonContext();

  return (
    <Router>
      <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto bg-[url(/pokeball-icon.png)] bg-no-repeat bg-[-10%_-20%] overflow-x-hidden">
        <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
          <Routes>
            <Route path="/" element={<LandingPage />} />{" "}
            {/* Define the route for LandingPage */}
            <Route path="/pokemons" element={<Pokemons />} />{" "}
            {/* Define the route for Pokemons */}
          </Routes>
          <Aside pokemon={pokemonDetail} isLoading={isLoading} />
          <ModalPokemon
            showModal={showDetailPokemon}
            onCloseModal={closePokemonDetail}
            pokemon={pokemonDetail}
          />
        </main>
      </section>
    </Router>
  );
}

export default App;
