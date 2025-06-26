# Phase-1-finalproject

This project sets up a simple mock REST API using [`json-server`](https://github.com/typicode/json-server). It is designed to help you quickly prototype and test front-end applications without needing a real backend.

## Features

- Fast setup for a RESTful API
- Customizable endpoints and data via `db.json`
- Supports CRUD operations (GET, POST, PUT, PATCH, DELETE)
- Watches for changes in your data file and reloads automatically

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

Install `json-server` as a development dependency:

```bash
npm install json-server
```

### Usage

Start the JSON server with:

```bash
npx json-server --watch db.json
```

- The server will run at [http://localhost:3000](http://localhost:3000) by default.
- Edit `db.json` to customize your API data.

## Project Structure

- **db.json**: Your mock database in JSON format.
- **src/index.js**: (Optional) Entry point for custom server logic or middleware.
- **package.json**: Project metadata and scripts.

## Customization

You can extend or customize the server by editing `src/index.js` to add middleware, custom routes, or authentication.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for suggestions or improvements.

## License

This project is licensed under the MIT License.
