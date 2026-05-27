# Cleaning Service Booking Platform - Complete Setup & Deployment Guide

## 📋 Table of Contents
1. [Initial Setup](#initial-setup)
2. [Local Development](#local-development)
3. [Testing the Application](#testing-the-application)
4. [Database Setup](#database-setup)
5. [Deployment Guide](#deployment-guide)
6. [Troubleshooting](#troubleshooting)
7. [Video Demo Guide](#video-demo-guide)

---

## Initial Setup

### Step 1: Clone or Download the Project

```bash
git clone <your-repo-url>
cd cleaning-service
```

### Step 2: Project Structure Overview

```
project-root/
├── backend/       # Node.js + Express server
├── frontend/      # React application
├── README.md      # Main project documentation
└── SETUP.md       # This file
```

---

## Local Development

### Backend Setup (Terminal 1)

#### 1. Navigate to Backend
```bash
cd backend
```

#### 2. Install Dependencies
```bash
npm install
```

Expected packages:
- express (^5.2.1)
- mongoose (^9.6.2)
- cors (^2.8.6)
- dotenv (^17.4.2)
- nodemon (^3.1.14)

#### 3. Configure MongoDB Connection

**Option A: Using MongoDB Atlas (Cloud)**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create a new project
4. Create a cluster (free tier)
5. Create database user:
   - Username: `admin`
   - Password: Create secure password
6. Click "Connect" → "Drivers" → Copy connection string
7. It will look like: `mongodb+srv://admin:PASSWORD@cluster0.mongodb.net/cleaning-service?retryWrites=true&w=majority`

**Option B: Using Local MongoDB**

1. Install [MongoDB Community Edition](https://www.mongodb.com/docs/manual/installation/)
2. Start MongoDB service
3. Connection string: `mongodb://localhost:27017/cleaning-service`

#### 4. Update .env File

Edit `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.mongodb.net/cleaning-service?retryWrites=true&w=majority
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

Replace:
- `YOUR_PASSWORD` - Your MongoDB password

#### 5. Seed Database with Sample Services

```bash
npm run seed
```

Output:
```
✓ Connected to MongoDB
✓ Cleared existing services
✓ Successfully inserted 8 services

Services added:
1. Deep Clean - $299
2. Office Cleaning - $249
3. Sofa Express - $99
4. Kitchen Deep Clean - $199
5. Bathroom Sanitize - $149
6. Carpet Cleaning - $179
7. Window Cleaning - $129
8. Move-In/Move-Out Cleaning - $399
```

#### 6. Start Backend Server

```bash
npm run dev
```

Output:
```
🚀 Server is running on http://localhost:5000
📚 API Documentation:
   - Services: http://localhost:5000/api/services
   - Bookings: http://localhost:5000/api/bookings
   - Health: http://localhost:5000/api/health
```

### Frontend Setup (Terminal 2)

#### 1. Navigate to Frontend
```bash
cd frontend
```

#### 2. Install Dependencies
```bash
npm install
```

Expected packages:
- react (^18.2.0)
- react-router-dom (^6.18.0)
- axios (^1.6.0)
- tailwindcss (^4.3.0)
- vite (^5.0.0)

#### 3. Configure Environment

Edit `frontend/.env.local`:
```env
VITE_API_URL=http://localhost:5000/api
```

#### 4. Start Frontend Development Server

```bash
npm run dev
```

Output:
```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

#### 5. Open in Browser

Go to `http://localhost:5173` - the app will open automatically.

---

## Testing the Application

### Test Flow

#### 1. Verify Backend API
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "success": true,
  "message": "Server is running"
}
```

#### 2. Get All Services
```bash
curl http://localhost:5000/api/services
```

#### 3. Test Frontend
- Visit `http://localhost:5173`
- Verify all pages load without errors
- Check browser console for any errors (F12)

### Manual Testing Checklist

#### Home Page
- [ ] Hero section loads with tagline
- [ ] Services display correctly
- [ ] Book Now button works
- [ ] Gallery images load
- [ ] Google Map displays
- [ ] Footer shows contact info

#### Booking Page
- [ ] Can select a service
- [ ] Date picker works
- [ ] Time picker works
- [ ] Form validation works (try submitting empty)
- [ ] Can submit booking successfully
- [ ] Success message appears

#### Admin Dashboard
- [ ] All bookings display
- [ ] Can filter by status
- [ ] Can mark booking as completed
- [ ] Can delete booking
- [ ] Statistics update correctly

### Using Postman for API Testing

#### 1. Download & Install Postman
[Download Postman](https://www.postman.com/downloads/)

#### 2. Create New Request

**Get All Services**
- Method: GET
- URL: http://localhost:5000/api/services
- Click Send

**Create Booking**
- Method: POST
- URL: http://localhost:5000/api/bookings
- Headers:
  - Content-Type: application/json
- Body (raw):
```json
{
  "serviceId": "paste-service-id-here",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "1234567890",
  "address": "123 Main Street",
  "city": "New York",
  "postalCode": "10001",
  "bookingDate": "2024-12-25",
  "bookingTime": "10:00",
  "notes": "Extra bedrooms"
}
```

**Get All Bookings**
- Method: GET
- URL: http://localhost:5000/api/bookings
- Click Send

**Update Booking Status**
- Method: PUT
- URL: http://localhost:5000/api/bookings/:id/status
- Replace `:id` with actual booking ID
- Body (raw):
```json
{
  "status": "confirmed"
}
```

---

## Database Setup

### MongoDB Atlas (Recommended for Production)

#### Step 1: Create Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Sign Up"
3. Create account with email and password

#### Step 2: Create Organization & Project
1. Create organization
2. Create new project named "cleaning-service"

#### Step 3: Create Cluster
1. Click "Create" → Choose "Dedicated" (Free tier available)
2. Select cloud provider and region
3. Cluster name: "cluster0"
4. Wait for cluster to create (5-10 minutes)

#### Step 4: Create Database User
1. Go to "Database Access"
2. Click "Add New Database User"
3. Username: `admin`
4. Password: Generate secure password
5. Copy password to safe location
6. Click "Add User"

#### Step 5: Whitelist IP Address
1. Go to "Network Access"
2. Click "Add IP Address"
3. Add "0.0.0.0/0" for development (or your IP)
4. Click "Confirm"

#### Step 6: Get Connection String
1. Go to "Clusters"
2. Click "Connect" → "Connect your application"
3. Select "Node.js" driver
4. Copy connection string
5. Replace `<username>` and `<password>` with your credentials

#### Step 7: Update .env
```env
MONGODB_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/cleaning-service?retryWrites=true&w=majority
```

### Local MongoDB Setup

#### Windows
1. Download [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
2. Run installer, choose "Custom"
3. Install MongoDB and MongoDB Compass
4. MongoDB runs on port 27017 by default
5. Connection string: `mongodb://localhost:27017/cleaning-service`

#### Mac
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

#### Linux (Ubuntu)
```bash
curl https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

---

## Deployment Guide

### Deploy Backend to Render

#### Step 1: Prepare GitHub Repository
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

#### Step 2: Create Render Account
1. Go to [Render.com](https://render.com)
2. Sign up with GitHub account
3. Authorize Render to access your repositories

#### Step 3: Create Web Service
1. Click "New" → "Web Service"
2. Select your repository
3. Name: `cleaning-service-api`
4. Environment: `Node`
5. Region: Choose closest to your users
6. Branch: `main`
7. Build command: `npm install`
8. Start command: `npm start`

#### Step 4: Add Environment Variables
1. Click "Environment" section
2. Add variables:
   ```
   KEY                VALUE
   PORT               5000
   MONGODB_URI        mongodb+srv://admin:PASSWORD@...
   NODE_ENV           production
   CLIENT_URL         https://your-frontend-domain.vercel.app
   ```

#### Step 5: Deploy
1. Scroll down and click "Create Web Service"
2. Wait for deployment to complete (3-5 minutes)
3. You'll get a URL like `https://cleaning-service-api.onrender.com`
4. Test: `https://cleaning-service-api.onrender.com/api/health`

### Deploy Frontend to Vercel

#### Step 1: Prepare Project
```bash
cd frontend
npm run build
```

Verify `dist` folder is created.

#### Step 2: Create Vercel Account
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Authorize Vercel

#### Step 3: Import Project
1. Click "New Project"
2. Select your repository
3. Framework Preset: `Vite`
4. Root Directory: `frontend`

#### Step 4: Configure Environment
1. Add Environment Variable:
   ```
   VITE_API_URL: https://cleaning-service-api.onrender.com/api
   ```

#### Step 5: Deploy
1. Click "Deploy"
2. Wait for deployment (2-3 minutes)
3. You'll get URL like `https://cleaning-service.vercel.app`

### Update Cross-Origin URLs

#### Backend (Render Dashboard)
Update `CLIENT_URL`:
```
https://your-frontend-domain.vercel.app
```

#### Frontend (Vercel Dashboard)
Update `VITE_API_URL`:
```
https://cleaning-service-api.onrender.com/api
```

---

## Troubleshooting

### MongoDB Connection Error

**Error:** `MongoServerError: connect ECONNREFUSED`

**Solutions:**
1. Verify MongoDB is running
2. Check connection string in `.env`
3. Verify IP whitelist in MongoDB Atlas
4. Check username/password

### CORS Error

**Error:** `Access to XMLHttpRequest has been blocked by CORS`

**Solution:**
Update `CLIENT_URL` in backend `.env` to match your frontend URL:
```env
CLIENT_URL=http://localhost:5173  # for local development
CLIENT_URL=https://yourapp.vercel.app  # for production
```

### Port Already in Use

**Error:** `EADDRINUSE: address already in use :::5000`

**Solution:**
```bash
# Find process using port 5000
lsof -i :5000

# Kill process
kill -9 <PID>

# Or use different port
PORT=5001 npm run dev
```

### Vite Port 5173 Already in Use

**Error:** `Port 5173 is in use, trying 5174`

**Solution:**
- This is okay, Vite will use next available port
- Or change port in `vite.config.js`:
```javascript
server: {
  port: 5174,
}
```

### Services Not Loading

**Error:** Empty services list on home page

**Solutions:**
1. Check if seed ran successfully:
   ```bash
   npm run seed
   ```
2. Verify MongoDB connection
3. Check API in browser: `http://localhost:5000/api/services`

### Form Submission Fails

**Error:** Booking form won't submit

**Solutions:**
1. Check browser console (F12) for errors
2. Verify backend is running
3. Verify MongoDB is connected
4. Check form validation errors
5. Test API with Postman first

### Deployment Issues

**Error:** 503 Service Unavailable on Render

**Solution:**
1. Check Render logs in dashboard
2. Verify environment variables are set
3. Check MongoDB connection string
4. Redeploy from Render dashboard

---

## Video Demo Guide

### Recording Demo (3-5 minutes)

**What to Show:**

#### 1. Homepage (30 seconds)
- Load homepage
- Scroll through hero section
- Show services section
- Mention booking feature

#### 2. Browse Services (30 seconds)
- Show all service cards
- Highlight service details (price, description)
- Click on a service's "Book Now" button

#### 3. Booking Form (1 minute)
- Fill in customer details:
  - Name
  - Email
  - Phone
  - Address, City, Postal Code
- Select date and time
- Show validation (try empty submission)
- Submit booking

#### 4. Admin Dashboard (1 minute)
- Show all bookings display
- Show booking statistics
- Filter by status (pending, confirmed, completed)
- Click "Mark as Completed"
- Verify status changes
- Delete a booking

#### 5. Database View (1 minute)
- Open MongoDB Atlas dashboard
- Show bookings collection
- Show the submitted booking in database
- Highlight booking details

#### 6. API Testing (30 seconds) - *Optional*
- Open Postman
- Show GET /services request
- Show GET /bookings request
- Highlight successful responses

### Demo Script Example

```
"Welcome to the Cleaning Service Booking Platform. This is a complete full-stack application built with React, Node.js, and MongoDB.

Let me walk you through the key features:

[Show Homepage]
On the homepage, we have a hero banner with our company tagline 'Spotless Homes, Stress-Free Life', and all our services are displayed dynamically from the database.

[Navigate to Booking]
When a user clicks 'Book Now', they're taken to our booking form where they can:
- Select a service
- Choose date and time
- Enter their contact and address information
- View form validation in real-time

[Submit Booking]
Once submitted, the booking is saved to MongoDB and they see a success message.

[Show Admin Dashboard]
Administrators can access the admin dashboard to:
- View all bookings with full details
- Filter bookings by status
- Mark bookings as completed
- Delete bookings if needed
- View statistics about pending, confirmed, and completed bookings

[Show Database]
In MongoDB, we can see the booking has been saved with all the details.

The application is fully responsive, works on mobile, tablet, and desktop, and is ready for production deployment."
```

### Recording Tools
- **Windows:** OBS Studio (free), ScreenFlow
- **Mac:** QuickTime, ScreenFlow
- **Online:** Loom (free), Screencast-O-Matic

### Upload Video
1. Save as MP4
2. Upload to YouTube, Vimeo, or Google Drive
3. Include link in project submission

---

## Quick Reference Commands

### Backend
```bash
cd backend
npm install           # Install dependencies
npm run seed          # Populate database
npm run dev           # Start development server
npm start             # Start production server
npm test              # Run tests (if configured)
```

### Frontend
```bash
cd frontend
npm install           # Install dependencies
npm run dev           # Start development server
npm run build         # Build for production
npm run preview       # Preview production build
npm run lint          # Run linter
```

### Git Commands
```bash
git clone <url>       # Clone repository
git add .             # Stage all changes
git commit -m "..."   # Commit changes
git push origin main  # Push to main branch
git status            # Check status
```

---

## Checklist for Submission

- [ ] All pages functional (Home, Booking, Admin)
- [ ] Services display from database
- [ ] Bookings save to MongoDB
- [ ] Admin can manage bookings
- [ ] Form validation works
- [ ] Responsive on mobile/tablet/desktop
- [ ] Clean code and proper structure
- [ ] README.md with setup instructions
- [ ] Both frontend and backend running
- [ ] API tested with Postman
- [ ] Deployed to Render and Vercel
- [ ] Video demo created and uploaded
- [ ] GitHub repository created
- [ ] .env files configured (not committed)

---

## Additional Resources

- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Render Deployment Guide](https://render.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Axios Documentation](https://axios-http.com/)

---

**You're all set! Happy coding! 🚀**
