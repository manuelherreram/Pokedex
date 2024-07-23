import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/pokemons");
  };

  return (
    <section className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl font-bold mb-8">
        Welcome to the Pokémon App
      </h1>
      <button
        onClick={handleStartClick}
        className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
      >
        START
      </button>
    </section>
  );
};

export default LandingPage;
