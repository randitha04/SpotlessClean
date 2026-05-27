# 🚀 Quick Start Guide

## ⏱️ 5-Minute Setup

### Prerequisites
- Node.js v14+ ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))
- MongoDB Atlas account ([Free signup](https://www.mongodb.com/cloud/atlas))

### Step 1: Clone & Navigate
```bash
git clone <repository-url>
cd cleaning-service
```

### Step 2: MongoDB Setup (2 minutes)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster
3. Create user: `admin` with secure password
4. Whitelist IP: `0.0.0.0/0`
5. Get connection string: `mongodb+srv://admin:PASSWORD@cluster0.xxxxx.mongodb.net/cleaning-service?retryWrites=true&w=majority`

### Step 3: Backend Setup (1 minute)
```bash
cd backend
npm install
```

Create/edit `.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/cleaning-service?retryWrites=true&w=majority
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

Seed database:
```bash
npm run seed
```

Start server:
```bash
npm run dev
```

✅ Backend running at `http://localhost:5000`

### Step 4: Frontend Setup (1 minute)
```bash
cd ../frontend
npm install
```

Create/edit `.env.local`:
```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend:
```bash
npm run dev
```

✅ Frontend running at `http://localhost:5173`

### Step 5: Verify
1. Open `http://localhost:5173` in browser
2. See services on home page
3. Click "Book Now" to test booking
4. Go to `/admin` to view bookings
5. Check backend logs for requests

---

## 📝 Common Tasks

### Add New Service (via Postman)
```
POST http://localhost:5000/api/services
Content-Type: application/json

{
  "name": "Premium Clean",
  "description": "Extra service",
  "image": "https://...",
  "price": 349,
  "category": "Residential"
}
```

### View Database
```bash
# MongoDB Compass
# Connect to: mongodb+srv://admin:PASSWORD@cluster0...
# Database: cleaning-service
# Collections: services, bookings
```

### Restart Backend
```bash
Ctrl+C (to stop)
npm run dev (to start again)
```

### Clear Database
```bash
npm run seed
# Re-seeds with fresh data
```

---

## 🐛 Quick Fixes

| Problem | Solution |
|---------|----------|
| `ECONNREFUSED` | Check MongoDB connection in `.env` |
| `CORS Error` | Verify `CLIENT_URL` in backend `.env` |
| `Port 5000 in use` | `PORT=5001 npm run dev` |
| `Services not loading` | Run `npm run seed` in backend |
| `Can't submit booking` | Check backend logs for errors |

---

## 📚 What's Included

✅ **8 Pre-configured Services**
- Deep Clean ($299)
- Office Cleaning ($249)
- Sofa Express ($99)
- Kitchen Deep Clean ($199)
- Bathroom Sanitize ($149)
- Carpet Cleaning ($179)
- Window Cleaning ($129)
- Move-In/Move-Out ($399)

✅ **Complete UI**
- Responsive design
- Booking form with validation
- Admin dashboard
- Gallery & contact section

✅ **Full-Stack API**
- RESTful endpoints
- Error handling
- Form validation
- Status management

---

## 🚀 Next Steps

1. **Customize**: Update company name, logo, colors
2. **Deploy**: Push to GitHub, deploy to Render/Vercel
3. **Test**: Try booking flow end-to-end
4. **Record**: Create demo video
5. **Submit**: Include links to live app and demo

See **SETUP_AND_DEPLOYMENT.md** for detailed instructions.

---

## 💡 Tips

- Use Postman to test API endpoints
- Check browser console (F12) for frontend errors
- MongoDB Compass helps visualize data
- Nodemon auto-restarts backend on file changes
- Vite auto-refreshes frontend on changes

---

**Having issues? Check SETUP_AND_DEPLOYMENT.md → Troubleshooting section**

**Need help? Review the detailed README.md**

Happy coding! 🎉
