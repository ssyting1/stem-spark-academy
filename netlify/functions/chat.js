exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'ANTHROPIC_API_KEY not set in Netlify environment variables' })
    };
  }

  try {
    const body = JSON.parse(event.body);
    const { system } = body;
    let { messages } = body;

    // Anthropic requires messages to alternate user/assistant and start with user
    // Remove any leading assistant messages (e.g. the initial greeting)
    messages = messages.filter(m => m.role === 'user' || m.role === 'assistant');
    while (messages.length > 0 && messages[0].role !== 'user') {
      messages.shift();
    }

    if (!messages || messages.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'No user messages to send' })
      };
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 200,
        system,
        messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      // Return the full Anthropic error as a string for easy display
      const errMsg = data.error ? `${data.error.type}: ${data.error.message}` : JSON.stringify(data);
      return {
        statusCode: response.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: errMsg })
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
