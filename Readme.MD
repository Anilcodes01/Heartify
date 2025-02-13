# Heartify - Patient Heart Rate Monitoring System

A backend REST API system for monitoring patient's heart rates. This system allows medical staff to manage patients and record their heart rate measurements.


# Features

 - User authentication(register/login)
 - Role-based access(dontor, nurse, admin)
 - Patient management
 - Heart rate recording and monitoring
 - Data validation


## Tech Stack

 - Node.js
 - Express.js
 - MongoDB with Mongoose
 - Joi for input validation
 - bcrypt for password hashing

## Prerequisites

 - Node.js
 - MongoDB
 - npm package manager

## Installation

 1. Clone the repository

> git clone https://github.com/your-username/heartify.git
> cd heartify
2. Install dependencies
> npm install
3. Set up environment variables(create a .env file)
>cp .env.example .env
4. Start the server
> npm start

## Environment Varibales

Create a .env file in the root directory and add:

> MONGODB_URI=your_mongodb_connection_string
PORT=3000

## API Documentation




## Authentication endpoints

**1. RegisterUser**
  

POST - /api/users/register
Body:

> {
  "email": "doctor@example.com",
  "password": "password123",
  "name": "Dr. Smith",
  "role": "doctor"
}

Response 200 OK

> {
  "message": "User registered successfully...!"
}

**2. Login**
POST - /api/users/login
Body:

> {
  "email": "doctor@example.com",
  "password": "password123"
}

Response: 200 OK

> {
  "message": "Login successful",
  "userId": "user_id_here"
}

## Patient Endpionts

**1. Add New Patient**
POST - /api/patients
Body:

> {
  "name": "John Doe",
  "dateOfBirth": "1990-01-01",
  "gender": "male",
  "contactNumber": "1234567890",
  "address": "123 Main St",
  "assignedDoctor": "doctor_id_here",
  "medicalHistory": "No previous conditions"
}

**2. Get Patient by ID**

GET - /api/patients/:id
Response: 200 OK

> {
  "name": "John Doe",
  "dateOfBirth": "1990-01-01",
  "gender": "male",
  "contactNumber": "1234567890",
  "address": "123 Main St",
  "assignedDoctor": {
    "name": "Dr. Smith",
    "email": "doctor@example.com"
  }
}

**3. Get All Patients**

GET - /api/patients


## Heart Rate Endpoints

**1. Record Heart Rate**

POST - /api/heart-rates
Body:

> {
  "patientId": "patient_id_here",
  "rate": 75,
  "userId": "recording_user_id",
  "notes": "Patient was resting"
}

**2. Get Patient's Heart Rate**

GET - /api/heart-rates/patient/:patientId
Response: Array of heart rate records 


## Assumptions

 1. All times are stored in UTC
 2. Heart rate measurements are in beats per minute (BPM)
 3. Only medical staff (doctors, nurses) can record heart rates
 4. Each patient is assigned to one primary doctor
 5. Medical staff can view all patient's data
