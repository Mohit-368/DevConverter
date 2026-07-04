# DevConverter

**A unified, developer-focused toolkit for everyday conversion tasks.**

DevConverter brings together the conversion utilities developers reach for most often — number systems, data storage units, colors, and QR codes — into a single fast, clean, full-stack web application. No more juggling five different browser tabs for five different tools.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/frontend-React-61DAFB?logo=react)
![Django](https://img.shields.io/badge/backend-Django%205.2-092E20?logo=django)
![DRF](https://img.shields.io/badge/API-Django%20REST%20Framework-ff1709)
![Status](https://img.shields.io/badge/status-active-success)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Usage Examples](#usage-examples)
- [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Overview

DevConverter is designed to be a **one-stop toolkit** for developers, students, and engineers who need quick, accurate conversions without ads, clutter, or unreliable third-party sites. It follows a decoupled architecture — a React single-page application communicating with a Django REST Framework API — making it easy to extend, test, and deploy independently on both ends.

The project emphasizes:

- **Speed** — real-time conversion with minimal latency
- **Accuracy** — conversion algorithms validated against edge cases (overflow, invalid input, precision loss)
- **Usability** — clean, responsive UI built with accessibility in mind
- **Maintainability** — modular codebase with clear separation of concerns

---

## Features

### 🔢 Number System Converter
Convert seamlessly between the number systems developers use daily:

| Conversion | Supported |
|---|---|
| Binary ↔ Decimal | ✅ |
| Binary ↔ Octal | ✅ |
| Binary ↔ Hexadecimal | ✅ |
| Decimal ↔ Octal | ✅ |
| Decimal ↔ Hexadecimal | ✅ |
| Octal ↔ Hexadecimal | ✅ |
| Automatic base detection | ✅ |

### 💾 Data Storage Converter
Convert across the full spectrum of digital storage units:

`Bit → Byte → KB → MB → GB → TB → PB`

Handles both binary (1024-based) and decimal (1000-based) interpretations where applicable, so results match real-world OS and hardware reporting conventions.

### 🎨 Color Converter
A complete color-format toolkit for front-end and design work:

- RGB ↔ HEX
- RGB ↔ HSL
- HEX ↔ HSL
- Additional developer utilities (e.g. contrast/format validation)

### 📱 QR Code Generator
- Generate QR codes instantly from any URL or plain text
- Download generated codes as image files for sharing, printing, or deployment

---

## Tech Stack

### Frontend
- **React** — component-driven UI
- **React Hook Form** — performant, declarative form state management
- **Lucide React** — lightweight, consistent icon set
- **JavaScript (ES6+)**
- **HTML5 / CSS3**

### Backend
- **Django 5.2**
- **Django REST Framework (DRF)** — RESTful API layer
- **django-cors-headers** — secure cross-origin communication with the React client
- **asgiref** — ASGI compatibility layer
- **sqlparse** — SQL parsing utility (Django dependency)

### Architecture Pattern
- **Decoupled full-stack**: React SPA (client) ↔ REST API (server)
- **Stateless API design** for scalability and easy horizontal deployment

---

## Architecture

```
┌─────────────────────┐         REST/JSON          ┌──────────────────────┐
│   React Frontend     │  ───────────────────────▶  │   Django REST API     │
│                       │  ◀───────────────────────  │                        │
│ - Number Converter UI │                             │ - Conversion Services  │
│ - Storage Converter UI│                             │ - Validation Layer     │
│ - Color Converter UI  │                             │ - QR Generation Engine │
│ - QR Generator UI     │                             │ - Serializers (DRF)    │
└─────────────────────┘                             └──────────────────────┘
```

All conversion logic is validated on both the client (for instant feedback) and the server (as the source of truth), ensuring consistent results regardless of entry point.

---

## Project Structure

```
devconverter/
├── backend/
│   ├── config/                 # Django project settings, URLs, WSGI/ASGI entry
│   ├── converters/             # Core app: number, storage, color conversion logic
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── qrcode_generator/       # QR code generation app
│   ├── requirements.txt
│   └── manage.py
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NumberConverter/
│   │   │   ├── StorageConverter/
│   │   │   ├── ColorConverter/
│   │   │   └── QRGenerator/
│   │   ├── hooks/
│   │   ├── services/            # API client layer
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── .env.example
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure the following are installed on your machine:

- **Node.js** ≥ 18.x and **npm** ≥ 9.x
- **Python** ≥ 3.11
- **pip** and **virtualenv** (recommended)
- **Git**

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/<your-username>/devconverter.git
cd devconverter/backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Run the development server
python manage.py runserver
```

The API will be available at `http://localhost:8000/`.

### Frontend Setup

```bash
cd devconverter/frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The application will be available at `http://localhost:3000/`.

### Environment Variables

**Backend** (`backend/.env`):

```env
SECRET_KEY=your-django-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

**Frontend** (`frontend/.env`):

```env
REACT_APP_API_BASE_URL=http://localhost:8000/api
```

> ⚠️ Never commit `.env` files. Use the provided `.env.example` templates as a reference.

---

## API Reference

All endpoints are prefixed with `/api/`. Responses are JSON.

### Number System Conversion

```http
POST /api/convert/number/
```

**Request Body**
```json
{
  "value": "1010",
  "from_base": "binary",
  "to_base": "decimal"
}
```

**Response**
```json
{
  "input": "1010",
  "from_base": "binary",
  "to_base": "decimal",
  "result": "10"
}
```

### Data Storage Conversion

```http
POST /api/convert/storage/
```

**Request Body**
```json
{
  "value": 1024,
  "from_unit": "MB",
  "to_unit": "GB"
}
```

**Response**
```json
{
  "result": 1.0,
  "unit": "GB"
}
```

### Color Conversion

```http
POST /api/convert/color/
```

**Request Body**
```json
{
  "value": "#1E90FF",
  "from_format": "hex",
  "to_format": "rgb"
}
```

**Response**
```json
{
  "result": "rgb(30, 144, 255)"
}
```

### QR Code Generation

```http
POST /api/qrcode/generate/
```

**Request Body**
```json
{
  "content": "https://github.com/your-username/devconverter"
}
```

**Response**
```json
{
  "qr_code_url": "/media/qrcodes/generated_abc123.png"
}
```

> 📌 Full interactive API documentation (Swagger/OpenAPI) can be added via `drf-spectacular` or `drf-yasg` — see [Roadmap](#roadmap).

---

## Usage Examples

**Converting a binary number to hexadecimal (frontend):**

1. Navigate to the **Number Converter** tab
2. Enter `11010110` in the input field
3. Select `Binary → Hexadecimal`
4. View instant result: `D6`

**Generating a QR code:**

1. Navigate to the **QR Generator** tab
2. Paste a URL or text string
3. Click **Generate**
4. Click **Download** to save the QR image

---

## Testing

**Backend**
```bash
cd backend
python manage.py test
```

**Frontend**
```bash
cd frontend
npm test
```

Contributions should include relevant unit tests for new conversion logic or API endpoints.

---

## Roadmap

- [ ] Add JSON ↔ YAML and JSON ↔ XML converters
- [ ] Add timestamp/epoch ↔ human-readable date converter
- [ ] Add Base64 encode/decode utility
- [ ] Interactive OpenAPI/Swagger documentation
- [ ] Dark mode toggle
- [ ] Conversion history (per session, local storage)
- [ ] Dockerized deployment (`docker-compose up`)
- [ ] CI/CD pipeline with automated testing

---

## Contributing

Contributions are welcome and appreciated!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add: your feature description"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please ensure your code follows the existing style conventions and includes tests where applicable.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- [Django REST Framework](https://www.django-rest-framework.org/) for a robust API foundation
- [Lucide Icons](https://lucide.dev/) for a clean, consistent icon set
- [React Hook Form](https://react-hook-form.com/) for efficient form handling
- The open-source community for inspiring accessible developer tooling

---

<p align="center">Built with ⚙️ for developers, by developers.</p>
