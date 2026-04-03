# ProductHub - Product Management System

A modern, full-featured product management dashboard built with Next.js 15, featuring a beautiful UI with dark mode support, real-time search, and local storage persistence.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## Features

### Core Features
- **Add Product** - Create new products with name, price, description, and image URL
- **View Products** - Display products in a responsive card grid layout
- **Edit Product** - Update existing product information
- **Delete Product** - Remove products with confirmation dialog

### Bonus Features
- **Form Validation** - Required field validation with error messages
- **Search & Filter** - Real-time search across product names and descriptions
- **Toast Notifications** - Success/error feedback using Sonner
- **Dark Mode** - Full dark/light theme toggle support
- **Statistics Dashboard** - View total products, total value, average price
- **Recent Activity** - Track recently added products
- **Responsive Design** - Works on mobile, tablet, and desktop

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4.0
- **UI Components:** shadcn/ui
- **State Management:** React Hooks + SWR pattern
- **Data Persistence:** localStorage
- **Language:** TypeScript
- **Icons:** Lucide React

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/product-management.git
   cd product-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Running in VS Code

1. Open VS Code
2. Go to `File > Open Folder` and select the project folder
3. Open the integrated terminal (`Ctrl + `` ` or `View > Terminal`)
4. Run `npm install` to install dependencies
5. Run `npm run dev` to start the development server
6. Click on the localhost link in the terminal or open [http://localhost:3000](http://localhost:3000)

### Recommended VS Code Extensions

- ESLint
- Tailwind CSS IntelliSense
- Prettier
- TypeScript Vue Plugin (if using Vue)

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and theme tokens
│   ├── layout.tsx       # Root layout with providers
│   └── page.tsx         # Main dashboard page
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── header.tsx       # Navigation header
│   ├── sidebar.tsx      # Side navigation
│   ├── product-card.tsx # Product display card
│   ├── product-form.tsx # Add/Edit product form
│   ├── product-grid.tsx # Products grid layout
│   ├── search-bar.tsx   # Search input component
│   ├── stats-cards.tsx  # Statistics dashboard
│   └── ...
├── hooks/
│   └── use-products.ts  # Product CRUD operations hook
├── lib/
│   ├── types.ts         # TypeScript interfaces
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Usage

### Adding a Product
1. Click the "Add Product" button
2. Fill in the product details (name, price, description, image URL)
3. Click "Add Product" to save

### Editing a Product
1. Click the "Edit" button on any product card
2. Modify the product details
3. Click "Update Product" to save changes

### Deleting a Product
1. Click the "Delete" button on any product card
2. Confirm the deletion in the dialog

### Searching Products
- Use the search bar to filter products by name or description
- Results update in real-time as you type

### Toggling Dark Mode
- Click the sun/moon icon in the header to switch themes

## Data Persistence

All product data is stored in the browser's localStorage. Data persists across page refreshes and browser sessions. To clear all data, clear your browser's localStorage for the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Built as part of a web development assessment project.
