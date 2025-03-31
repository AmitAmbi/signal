# 🚦 Smart Traffic Signal System (MERN Stack)  

## **📌 Overview**  
This project is a **real-time traffic signal management system** using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** with **Socket.IO** for real-time updates. The system dynamically changes traffic signals based on vehicle count and maintains an activity log.

---

## **📂 Project Structure**  
```
smart-traffic-signal/
│── backend/              # Node.js + Express server  
│   ├── models/          # Mongoose schemas  
│   ├── routes/          # API endpoints  
│   ├── controllers/     # Business logic  
│   ├── server.js        # Main server file  
│── frontend/             # React.js client  
│   ├── src/  
│   │   ├── components/  # UI components  
│   │   ├── services/    # API calls  
│   │   ├── styles/      # CSS files  
│   │   ├── App.js       # Main React component  
│   ├── package.json  
│── README.md  
```

---

## **🚀 Setup Instructions**  
### **1️⃣ Backend Setup**  
#### **📌 Prerequisites**  
- Install **Node.js** and **MongoDB**  
- Create a `.env` file in `backend/` with:  
  ```
  MONGO_URI=your_mongodb_connection_string
  PORT=5000
  ```

#### **📌 Installation & Running Backend**  
```sh
cd backend
npm install
npm start
```
> The backend will run at **http://localhost:5000/**  

---

### **2️⃣ Frontend Setup**  
#### **📌 Installation & Running Frontend**  
```sh
cd frontend
npm install
npm start
```
> The frontend will run at **http://localhost:3000/**  

---

## **📡 API Endpoints**  
| Method | Endpoint | Description |  
|--------|---------|-------------|  
| **GET** | `/api/signals` | Fetches all signals |  
| **POST** | `/api/change-signal` | Manually change signal |  
| **GET** | `/api/activity` | Fetches activity log |  

---

## **🛠 Features**  
### **Backend**  
✅ **Real-time Signal Updates** with Socket.IO  
✅ **Activity Logging** (Last 10 entries stored)  
✅ **REST API** for fetching signals and logs  

### **Frontend**  
✅ **Live Traffic Lights** (4-way intersection)  
✅ **Real-time Updates** using WebSockets  
✅ **Activity Log Table** with pagination  

---

## **📷 UI Preview**  
![Traffic Signal UI](public/UI.png)

---

## **📌 Technologies Used**  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Frontend:** React.js, React Router, Socket.IO-client  
- **Other:** Socket.IO, Bootstrap, CSS  

---

## **📞 Contact**  
For any queries, contact **Amit Ambi** at **amitambi09@gmail.com**.  

---

