# Pokémon App

Welcome to the Pokémon App! This application allows users to browse and learn about various Pokémon. Below, you'll find detailed information about the app's functionalities and how to get started.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Components Overview](#components-overview)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Landing Page**: A welcoming page with a "START" button to navigate to the main Pokémon list.
- **Pokémon List**: Browse through a list of Pokémon fetched from the PokéAPI.
- **Pokémon Detail**: View detailed information about each Pokémon, including type, abilities, stats, and evolutions.
- **Responsive Design**: Optimized for both mobile and desktop views.
- **Loading Spinner**: Indicates data loading state.
- **Modal View**: Displays Pokémon details in a modal on smaller screens.

## Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/manuelherreram/Pokedex.git
   cd Pokedex
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev

   ```

4. Open [http://localhost:5173/](http://localhost:5173/) to view the app in the browser.

## Components Overview

### `LandingPage`

- **Description**: The starting page of the app with a "START" button.
- **Functionality**: Navigates to the Pokémon list when the "START" button is clicked.

### `Pokemons`

- **Description**: Displays a searchable list of Pokémon.
- **Functionality**: Fetches Pokémon data from the PokéAPI and implements infinite scroll for loading more Pokémon.

### `PokemonList`

- **Description**: Lists Pokémon preview cards.
- **Props**: `pokemons` (array of Pokémon objects)

### `PokemonPreview`

- **Description**: Displays a preview of individual Pokémon.
- **Props**: `pokemonURL` (URL for fetching individual Pokémon data), `onClick` (function to handle click events)

### `Aside`

- **Description**: Displays Pokémon details in a side panel for larger screens.
- **Props**: `pokemon` (selected Pokémon object), `isLoading` (boolean indicating loading state)

### `ModalPokemon`

- **Description**: Displays Pokémon details in a modal for smaller screens.
- **Props**: `showModal` (boolean to show/hide modal), `onCloseModal` (function to close modal), `pokemon` (selected Pokémon object)

### `PokemonDetail`

- **Description**: Shows detailed information about a selected Pokémon.
- **Props**: `pokemon` (selected Pokémon object)

### `Evolutions`

- **Description**: Displays Pokémon evolution chain.
- **Props**: `evolutions` (array of evolution objects)

## Usage

1. **Landing Page**: Start the app and click the "START" button to navigate to the Pokémon list.
2. **Search Pokémon**: Use the search bar to filter Pokémon by name.
3. **View Details**: Click on a Pokémon card to view its detailed information.
4. **Navigate**: Use the side panel or modal view to navigate through different Pokémon details.

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Library for routing in React applications.
- **PokéAPI**: The RESTful Pokémon API used to fetch Pokémon data.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the Pokémon App! If you have any questions or feedback, please feel free to reach out. Enjoy exploring the world of Pokémon!
