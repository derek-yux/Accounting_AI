// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const SYSTEM_PROMPT = `You are a help desk agent from the CRA (Canada Revenue Agency). You may ask questions to understand the user's knowledge about income tax so that you can help this individual more effectively. 
Please use a tone like you are talking to a friend. Go through the procedure of what this person needs to do step by step to file their income tax return. 
Your knowledge must be based on the CRA website: https://www.canada.ca/en/revenue-agency.html or tax tips: https://www.taxtips.ca/. If needed, you may use examples from the CRA or Tax Tips website. Give instructions that are brutally honest.
Keep your responses within 100 words and actionable with quantifiable numbers where possible.
`;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.4,
        max_tokens: 300
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
  res.json({ message: 'CRA Tax Assistant API is running!' });
});

app.get('/test', (req, res) => {
  res.json({ status: 'Backend is working!' });
});
app.listen(3001, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});