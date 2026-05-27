# Cleaning Service Booking Platform

A complete full-stack web application for booking and managing cleaning services. Built with React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.

## 🌟 Features

### Frontend
- **Home Page**: Hero banner with company information and call-to-action
- **Services Section**: Dynamic display of cleaning services from database
- **Booking System**: Complete booking form with date/time pickers and validation
- **Admin Dashboard**: Manage all bookings, update status, and delete bookings
- **Gallery**: Showcase of cleaning work with professional images
- **Contact Section**: Location map, contact info, and WhatsApp integration
- **Responsive Design**: Fully mobile, tablet, and desktop responsive

### Backend
- **REST API**: Complete REST API for services and bookings
- **MongoDB**: NoSQL database for storing services and bookings
- **Authentication**: Request validation and error handling
- **CORS**: Cross-origin resource sharing enabled
- **Environment Variables**: Secure configuration management

## 📋 Project Requirements

### 1. Home Page
- ✅ Hero Banner with company name and tagline
- ✅ "Book Now" Call-to-Action Button
- ✅ About Us section with background image

### 2. Service Menu (Dynamic)
- ✅ Fetch 6-8 cleaning categories from database
- ✅ Display service cards with Image, Name, Description, and Price
- ✅ Book Now button on each service

### 3. Online Booking System
- ✅ Form with service dropdown, date/time picker, address, and contact details
- ✅ Form validation for all required fields
- ✅ Save bookings to MongoDB
- ✅ Email validation and phone number validation

### 4. Admin Dashboard
- ✅ Protected route (/admin) to view all bookings
- ✅ Mark bookings as completed
- ✅ Delete bookings
- ✅ Booking statistics and status filtering

### 5. Gallery & Reviews
- ✅ Grid of 6-8 cleaning images
- ✅ Professional image showcase

### 6. Contact & Footer
- ✅ Company address, email, phone
- ✅ Embedded Google Map
- ✅ Functional WhatsApp button
- ✅ Footer with quick links and social media

## 🛠 Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Tools & Services
- **Vite** - Fast build tool
- **MongoDB Atlas** - Cloud database
- **Postman** - API testing
- **Vercel** - Frontend deployment
- **Render** - Backend deployment

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas cloud)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
PORT=5000
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.mongodb.net/cleaning-service?retryWrites=true&w=majority
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

4. Seed the database with sample services:
```bash
npm run seed
```

5. Start the development server:
```bash
npm run dev
```

The backend will be running at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file (copy from `.env.example`):
```bash
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will be running at `http://localhost:5173`

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Then open your browser and go to `http://localhost:5173`

### Production Build

**Backend:**
```bash
npm run start
```

**Frontend:**
```bash
npm run build
npm run preview
```

## 📚 API Documentation

### Services Endpoints

#### Get All Services
```
GET /api/services
```
Response:
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "name": "Deep Clean",
      "description": "...",
      "image": "...",
      "price": 299,
      "category": "Residential",
      "duration": "4-5 hours"
    }
  ]
}
```

#### Get Service by ID
```
GET /api/services/:id
```

#### Create Service (Admin)
```
POST /api/services
Content-Type: application/json

{
  "name": "New Service",
  "description": "Description",
  "image": "https://...",
  "price": 199,
  "category": "Residential"
}
```

#### Update Service (Admin)
```
PUT /api/services/:id
Content-Type: application/json

{
  "price": 249
}
```

#### Delete Service (Admin)
```
DELETE /api/services/:id
```

### Bookings Endpoints

#### Get All Bookings
```
GET /api/bookings
```

#### Get Booking by ID
```
GET /api/bookings/:id
```

#### Create Booking
```
POST /api/bookings
Content-Type: application/json

{
  "serviceId": "...",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "1234567890",
  "address": "123 Main St",
  "city": "New York",
  "postalCode": "10001",
  "bookingDate": "2024-12-25",
  "bookingTime": "10:00",
  "notes": "Special requests..."
}
```

#### Update Booking Status
```
PUT /api/bookings/:id/status
Content-Type: application/json

{
  "status": "confirmed"
}
```
Status options: `pending`, `confirmed`, `completed`, `cancelled`

#### Delete Booking
```
DELETE /api/bookings/:id
```

#### Get Booking Statistics
```
GET /api/bookings/stats
```

## 🧪 Testing with Postman

1. Import the API endpoints into Postman
2. Set base URL to `http://localhost:5000/api`
3. Test each endpoint with sample data
4. Save requests to a collection for future reference

### Sample Test Flow:
1. GET /services - Get all services
2. POST /bookings - Create a new booking
3. GET /bookings - View all bookings
4. PUT /bookings/:id/status - Update booking status to "confirmed"
5. GET /bookings/stats - View statistics

## 🗄️ Database Models

### Service Model
```javascript
{
  name: String,
  description: String,
  image: String,
  price: Number,
  category: String, // Residential, Commercial, Special
  duration: String,
  timestamps: true
}
```

### Booking Model
```javascript
{
  serviceId: ObjectId (ref: Service),
  serviceName: String,
  customerName: String,
  customerEmail: String,
  customerPhone: String,
  address: String,
  city: String,
  postalCode: String,
  bookingDate: Date,
  bookingTime: String,
  notes: String,
  totalPrice: Number,
  status: String, // pending, confirmed, completed, cancelled
  timestamps: true
}
```

## 📁 Project Structure

```
cleaning-service/
├── backend/
│   ├── models/
│   │   ├── Service.js
│   │   └── Booking.js
│   ├── controllers/
│   │   ├── serviceController.js
│   │   └── bookingController.js
│   ├── routes/
│   │   ├── serviceRoutes.js
│   │   └── bookingRoutes.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── BookingCard.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── Toast.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Booking.jsx
│   │   │   └── Admin.jsx
│   │   ├── hooks/
│   │   │   └── useForm.js
│   │   ├── utils/
│   │   │   ├── api.js
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   ├── vite.config.js
│   ├── package.json
│   ├── .env.local
│   └── .env.example
│
└── README.md
```

## 🌐 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://...
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:5000/api
```

## 🚢 Deployment

### Deploy Backend to Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect your GitHub repository
4. Set environment variables in Render dashboard:
   - `MONGODB_URI` - Your MongoDB Atlas connection string
   - `NODE_ENV` - Set to "production"
   - `CLIENT_URL` - Your frontend URL (e.g., https://yourapp.vercel.app)
5. Build command: `npm install`
6. Start command: `npm start`

### Deploy Frontend to Vercel

1. Push code to GitHub
2. Import project on Vercel
3. Set environment variables:
   - `VITE_API_URL` - Your backend URL on Render
4. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy

### Update Credentials After Deployment

Update your environment variables in both frontend and backend:
- Frontend: Update `VITE_API_URL` to your Render backend URL
- Backend: Update `CLIENT_URL` to your Vercel frontend URL

## 🔒 MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Create a database user with username and password
5. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/cleaning-service?retryWrites=true&w=majority`
6. Update `.env` file with your connection string

## 📝 Available Scripts

### Backend
```bash
npm run start     # Start production server
npm run dev       # Start development server with nodemon
npm run seed      # Seed database with sample services
```

### Frontend
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure your IP address is whitelisted in MongoDB Atlas
- Check connection string format
- Verify username and password

### CORS Errors
- Make sure backend CORS is configured correctly
- Check if frontend URL matches `CLIENT_URL` in backend `.env`

### Port Already in Use
- Change port in backend: `PORT=5001`
- Or kill the process using the port

### Vite Port Already in Use
- Change port in `vite.config.js`
- Or add `--port 5174` to dev command

## 📞 Support

For issues and questions:
1. Check the troubleshooting section
2. Review API documentation
3. Check console logs for errors
4. Visit the GitHub repository

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Future Enhancements

- User authentication and registration
- Payment integration (Stripe/PayPal)
- Email notifications
- SMS confirmations
- Advanced search and filtering
- Customer review system
- Multi-language support
- Analytics dashboard
- Mobile app version

---

**Happy Cleaning! 🧹✨**
