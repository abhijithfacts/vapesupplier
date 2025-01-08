import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY; 

// Middleware to verify JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null; // Invalid token
  }
};

export async function POST(req) {
  const authHeader = req.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new Response('Unauthorized', { status: 401 });
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    return new Response('Forbidden', { status: 403 });
  }

  try {
    const response = await fetch(process.env.API_ENDPOINT, {
      method: req.method,
      headers: {
        ...req.headers
      },
      body: await req.text()
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status });
  } catch (error) {
    console.error('Error in secure_gate:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
