# Personal Project Showcase App

A single-page application (SPA) built with **React**, **React Router**, and **Tailwind CSS** that lets freelancers, designers, and creative agencies showcase their work online. Users can add new projects, search through existing ones, and view detailed information about each project.

---

## Features

- Add new projects via a simple form
- Real-time search filtering by title or description
- Click any project to view its full detail page
- Client-side routing with no full page reloads
- Responsive layout that works on all screen sizes

---

## Tech Stack

 -React 19 - UI components and state management
 -React Router v6 - Client-side routing between pages
 -Tailwind CSS v4 - Utility-first styling
 -Vite - Development server and bundler

---

## Project Structure

```

src/
├── components/
│   ├── Navbar.jsx          # App header with home navigation
│   ├── ProjectForm.jsx     # Form to add new projects
│   ├── ProjectList.jsx     # Search bar + list of project cards
│   ├── ProjectCard.jsx     # Single project list item
│   └── ProjectDetail.jsx   # Full detail view for one project
├── App.jsx                 # Root component — routing and global state
├── main.jsx                # React DOM entry point
└── index.css               # Tailwind CSS imports

```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone <https://github.com/keithkamau/portfolio-platform-spa-lab.git>
cd portfolio-platform

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## How It Works

### Adding a Project

1. Fill in the **Title** and **Description** fields in the **Add Project** form
2. Click the **Add** button
3. The new project appears at the top of the project list instantly

### Searching Projects

- Type in the **Search Projects** input box
- The list filters in real time matching against both the title and description
- A "No results found" message appears if nothing matches

### Viewing Project Details

- Click any project card in the list
- The app navigates to `/project/:id` showing the full project detail page
- Click **← Back to Projects** or the app title to return to the home page

---

## Component Overview

- **`App.jsx`** — Holds the global projects array in state, defines the two routes (`/` and `/project/:id`), and passes data down to child components
- **`Navbar`** — Persistent header shown on every page; clicking the title navigates home
- **`ProjectForm`** — Controlled form with validation; calls `onAdd` to lift new project data up to `App.jsx`
- **`ProjectList`** — Owns the search query state; filters the projects array and renders a `ProjectCard` for each result
- **`ProjectCard`** — Displays a project's thumbnail placeholder, title, and description; clicking navigates to the detail route
- **`ProjectDetail`** — Reads the project ID from the URL via `useParams`, finds the matching project, and renders its full information

---

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview the production build locally
```

---

## Notes

- Projects are stored in **React state only** — they reset on page refresh. To persist data, integrate a backend API or `localStorage`.
- The thumbnail placeholders represent future image upload functionality. You can replace them with actual images by adding an `image` property to each project and rendering it in `ProjectCard` and `ProjectDetail`.
- The app is fully responsive.