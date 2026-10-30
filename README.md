# ApniMandi

ApniMandi is a React + Vite frontend with a Node.js/Express + MongoDB authentication API.

## Project structure

- `src/` — existing React application
- `server/` — Express API, MongoDB model, and authentication routes

## Requirements

- Node.js 18+
- MongoDB running locally, or a MongoDB Atlas connection string

## 1. Install frontend dependencies

From the project root:

```bash
npm install
```

## 2. Configure MongoDB and the backend

```bash
cd server
npm install
```

Copy `.env.example` to `.env`, then edit `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/apni_mandi
JWT_SECRET=replace_this_with_a_long_random_secret_at_least_32_characters
CLIENT_ORIGIN=http://localhost:5173
```

For MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string. Keep `.env` private and never upload it to GitHub.

## 3. Start the backend

Open Terminal 1 in the project root:

```bash
npm run server
```

The server connects to MongoDB before listening on port 5000. You should see `MongoDB connected successfully.`

## 4. Start the frontend

Open Terminal 2 in the project root:

```bash
npm run dev
```

Open the Vite URL shown in the terminal, usually `http://localhost:5173`.

## 5. Test registration and login

1. Open `/signup`.
2. Register using a valid Indian mobile number (10 digits, starting 6–9), a password of at least 8 characters, and a delivery address.
3. After registration, the user is automatically logged in.
4. Log out using your app's logout control, then open `/login`.
5. Log in using the same phone number and password.

The backend stores passwords as bcrypt hashes and issues a signed JWT. The browser stores the JWT for the current app session across reloads. For a production deployment, use HTTPS and consider moving tokens to secure, HttpOnly cookies.

## API endpoints

- `GET /api/health` — API and database health
- `POST /api/auth/register` — create account
- `POST /api/auth/login` — authenticate with phone and password
- `GET /api/auth/me` — return the current authenticated user

OTP login and forgot-password flows are not implemented; the UI indicates that OTP login is unavailable rather than pretending to send an OTP.

## Important

The checkout/payment and order flows in the original frontend remain demo flows. This authentication backend does not make real payments or persist orders.
