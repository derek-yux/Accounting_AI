# Accounting AI 
## To help first-time tax filers (like me) understand what is even going on and what we should do!

<img width="1131" height="866" alt="Screenshot 2025-12-03 at 10 49 13 PM" src="https://github.com/user-attachments/assets/767a857d-ec59-45ef-b2ba-ec729f295f06" />

Setup Instructions:

Install dependencies:

```
npm init -y
npm install express cors dotenv
npm install -D nodemon
```

2. **Create `.env` file:**
```
OPENAI_API_KEY=sk-your-api-key-here
PORT=3001
```

Update package.json:
```
json{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

Run the server:

```
npm run dev
```

Note that this is the most basic implementation to get it running on your localhost, but of course this code is meant for Docker (just install Docker and run "docker compose up" in the terminal, or if you have AWS Cloud, it can get hosted on there too! I ran out of credits for now though haha)

## Tech Stack:
Docker, Python, React, JavaScript, Vite, AWS Elastic Beanstalk
