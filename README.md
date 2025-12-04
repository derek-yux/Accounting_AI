Setup Instructions:

Install dependencies:

npm init -y
npm install express cors dotenv
npm install -D nodemon
```

2. **Create `.env` file:**
```
OPENAI_API_KEY=sk-your-api-key-here
PORT=3001

Update package.json:

json{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}

Run the server:

npm run dev