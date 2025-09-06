# ZerodhaKite Clone

A full-stack clone of Zerodha Kite trading platform built for learning and demonstration purposes.

## Tech Stack

- **Frontend:** React.js (Create React App)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **API Calls:** Axios
- **State Management:** React Context API
- **Styling:** CSS, Emotion
- **Authentication:** Passport.js, passport-local-mongoose
- **Deployment:**
  - Backend: Render
  - Frontend: Vercel/Netlify

## Project Structure

```
zerodha/
  backend/        # Node.js + Express backend
    index.js
    package.json
    .env
    model/
    Schema/
  dashboard/      # React frontend
    package.json
    src/
  frontend/       # (optional, for landing page or other UI)
```

## How to Run Locally

1. Clone the repo:
   ```sh
   git clone https://github.com/alfiya009/ZerodhaKite.git
   ```
2. Install backend dependencies:
   ```sh
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```sh
   cd ../dashboard
   npm install
   ```
4. Start backend:
   ```sh
   cd ../backend
   node index.js
   ```
5. Start frontend:
   ```sh
   cd ../dashboard
   npm start
   ```


## API Endpoints
- `/allHoldings` - Get all holdings
- `/newOrder` - Place a new order

## Deployment
- Backend deployed on Render: [your Render URL]
- Frontend deployed on Vercel: [https://zerodha-kite-omega.vercel.app/holdings](https://zerodha-kite-omega.vercel.app/holdings)

## Author
- [alfiya009](https://github.com/alfiya009)

---
Feel free to fork, star, and contribute!
