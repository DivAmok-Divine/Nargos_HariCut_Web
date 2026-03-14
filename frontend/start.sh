#!/bin/bash

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# We use nodemon to watch for configuration changes (vite, tailwind, postcss)
# Vite itself handles immediddsate updates (HMR) for all files in /src
echo "Starting Norgo's First Class with Auto-Restart for Config..."
npx nodemon --watch vite.config.js --watch tailwind.config.js --watch postcss.config.js --watch package.json --exec "npm run dev"
