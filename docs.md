# HR Management System Documentation

## Project Overview

This project is an HR Management System built for the Ministry of National Economy. It manages employee records, contracts, attendance, training, and more. It includes a specific portal for employees to view their own dashboard (`/gate2/emp-gate`).

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Language:** TypeScript / JavaScript
- **Styling:** Bootstrap 5, React Bootstrap, CSS
- **Routing:** React Router DOM 7
- **Icons:** React Icons
- **HTTP Client:** Fetch API (Native)

## Directory Structure

- `src/api`: API integration modules.
- `src/components`: Reusable UI components.
- `src/pages`: Page components corresponding to routes.
- `src/layouts`: Layout wrappers (e.g., Sidebar + Content).
- `document.json`: OpenAPI Specification for the backend.

## Employee Dashboard Integration

### Routes

- **Login:** `/gate2/emp-gate` -> `EmpGate.jsx` -> `EmpLogin.tsx`
- **Dashboard:** `/emp-dashboard` -> `EmpDashboard.jsx`

### API Integration

The application connects to a backend API specified in `document.json`.

**Base URL:** `https://palegoldenrod-hamster-512838.hostingersite.com/api`

**Key Endpoints:**

- `POST /login`: Employee authentication.
- `GET /v1/employee/dashboard`: Fetches dashboard data (salary, vacations, etc.).

### Development Notes

- The login token is stored in `localStorage` as `token`.
- All authenticated requests must include `Authorization: Bearer <token>`.
