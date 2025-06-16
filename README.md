# 💬 Chatty

**Chatty** is a full-stack real-time chat application built with **React.js** for the frontend and a custom backend (Node.js/Express) using **MongoDB** as the database. It supports user authentication, multiple UI themes, and real-time messaging between users.

But what truly sets Chatty apart is its **robust DevOps infrastructure**: the entire application is deployed inside an **AWS VPC** with isolated environments and scalable architecture, showcasing production-ready cloud engineering.

---

## 🌐 Live Demo

🔗 [Chatty Live](https://your-live-url.com)

---

## 🛠 Tech Stack

### 🖥 Frontend
- React.js
- Tailwind CSS
- Axios for API calls
- Theme switching (Dark / Light / Custom)

### 🧠 Backend
- Node.js + Express.js
- MongoDB
- WebSocket or Socket.IO (if used)

### ☁️ DevOps & Deployment
- **AWS VPC** with proper subnet segmentation (public/private)
- **Application Load Balancer (ALB)** for routing traffic
- **Auto Scaling Groups (ASG)** for backend scalability
- **EC2** instances hosting React frontend, backend API
- **NAT Gateway**, **Internet Gateway**, **Security Groups**, **Bastion Host**
- Infrastructure as Code using **Terraform**

---
## 🔐 Features

- 🔐 User registration and login
- 💬 Real-time messaging
- 🎨 Multiple theme support for UX customization
- ⚙️ AWS-hosted with high availability and fault tolerance
- 📈 Fully scalable via Auto Scaling Group
- 🔒 Private subnets for backend and database isolation

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/saimon4u/Chatty-yt.git
cd Chatty-yt
```

### 2. Install frontend & backend dependencies
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

```
### 3. Set up environment variables
Create a **.env** file in the backend directory and add the following:
```bash
MONGODB_URI="mongodb://localhost:27017/db"
PORT=5001
JWT_SECRET="secret"

CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."

NODE_ENV=development
```
### 4. Run the app
```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm run dev
```

### 5. Run the app with docker compose
In the root directory run the command:
```bash
docker compose up --build
```
## ☁️ Infrastructure Overview

Chatty is deployed with a production-grade AWS architecture designed for **high availability**, **security**, and **scalability**.

### 🏗️ Architecture Highlights

- **VPC with 3-tier architecture:**
  - 🟢 **Public Subnet** → Application Load Balancer (ALB)
  - 🟡 **Private Subnet** → EC2 instances running Frontend & Backend
  - 🔴 **Isolated Subnet** → EC2 instance hosting MongoDB (no internet access)

- **Application Load Balancer (ALB)**  
  - Routes traffic to frontend and backend services

- **Auto Scaling Group (ASG)**  
  - Ensures backend EC2 instances scale dynamically based on load

- **Bastion Host**  
  - Provides secure SSH access to private EC2 instances via the public subnet

- **NAT Gateway**  
  - Allows instances in private subnets to access the internet for updates, etc.

- **Security Groups**  
  - Fine-grained control of traffic between subnets and services

---

✅ **Built for:**
- High availability
- Network isolation & security
- Auto scalability & reliability
- Infrastructure as Code (Terraform)

---

## 🧪 Future Improvements

- 👥 Add support for **group chats**
- 🖼️ Enable **image/file sharing** in messages
- ⚙️ Integrate **CI/CD pipeline** using:
  - GitHub Actions
  - Amazon S3 (for static assets)
  - Amazon ECS or EKS (for container orchestration)

## 🧑‍💻 Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

## 👨‍💻 Developed  by Saimon Bhuiyan
