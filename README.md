# Student Management System

A simple web app to manage student records. You can add students, view all students, and see active and inactive students on separate pages. Built with Node.js, Express, EJS and MongoDB.

## Features

- Dashboard with total, active and inactive student counts
- Add a new student using a form
- View all students in card layout
- Separate pages for active and inactive students
- Responsive design (works on mobile and desktop)

## Tech Stack

- Node.js
- Express
- EJS (templates)
- MongoDB
- HTML and CSS

## Folder Structure

```
skills/
├── index.js
├── package.json
├── public/
│   └── style.css
└── views/
    ├── home.ejs
    ├── dashboard.ejs
    ├── student.ejs
    ├── addstudent.ejs
    └── filtered.ejs
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

2. Install dependencies

```bash
npm install
```

3. Make sure MongoDB is running on your computer at `mongodb://localhost:27017`

4. Start the server

```bash
node index.js
```

5. Open the browser and go to `http://localhost:3000`

## Pages

| Route | Description |
|---|---|
| `/` | Dashboard |
| `/student` | All students |
| `/addstudent` | Add a new student form |
| `/active` | Only active students |
| `/inactive` | Only inactive students |

## Database

- Database name: `school`
- Collection name: `student`

Each student has these fields:

| Field | Description |
|---|---|
| name | Full name |
| rollno | Roll number |
| phone | Phone number |
| email | Email address |
| course | Course name |
| dob | Date of birth |
| date | Admission date |
| gender | Male or Female |
| status | active or inactive |

## Author

Anmol
<img width="1752" height="802" alt="Screenshot 2026-10-16 192137" src="https://github.com/user-attachments/assets/1b1d59d6-9e75-45ab-addb-b7b0f4ccab3d" />
