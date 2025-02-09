# ✨ **FoodDeliveryApp** ✨

> A **unified dashboard** for restaurants to manage orders from multiple delivery platforms (DoorDash, UberEats, etc.) in one place.

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="Build Status" />
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="Version" />
  <img src="https://img.shields.io/badge/React-18.0+-blue" alt="React 18+"/>
  <img src="https://img.shields.io/badge/Django-3.2+-green" alt="Django 3.2+"/>
</p>

---

```
   ____             __      ____            __  _           
  / __/___  ____   / /__   / __ \___  ____  / /_(_)___  ____ 
 / /_/ __ \/ __ \ / / _ \ / / / / _ \/ __ \/ __/ / __ \/ __ \
/ __/ /_/ / /_/ // /  __// /_/ /  __/ / / / /_/ / /_/ / / / /
/_/  \____/\____//_/\___//_____/\___/_/ /_/\__/_/\____/_/ /_/ 
```

---

## 🚀 Overview
**FoodDeliveryApp** simplifies order management by consolidating multiple delivery platforms into a single, user-friendly web application. Say goodbye to juggling multiple tablets and hello to an all-in-one dashboard that saves time, cuts down errors, and helps restaurants focus on what they do best—making great food!

---

## 💡 Features
| Feature                | Description                                                                                 |
|------------------------|---------------------------------------------------------------------------------------------|
| **Unified Orders**     | View and manage orders from DoorDash, UberEats, etc. in real time.                         |
| **Custom Dashboards**  | Filter or sort orders by status, platform, or time of arrival.                              |
| **Live Notifications** | Instantly see new orders or updates to existing orders.                                     |
| **Analytics & Reports**| Track sales data, busiest hours, and top-selling dishes across all delivery services.      |
| **Role-Based Access**  | Different permission levels for managers, kitchen staff, and waitstaff.                    |

---

## 🛠 Tech Stack

| Technology    | Purpose                            |
|---------------|-------------------------------------|
| **React**     | Responsive Frontend UI             |
| **Django**    | Backend API & Business Logic        |
| **PostgreSQL**| Database for Orders & User Data     |
| **Trello**    | Task & Sprint Management           |
| **MS Teams**  | Team Collaboration & Communication  |

---

## 🔧 Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/israel1jol/FoodDeliveryApp.git
   cd FoodDeliveryApp
   ```
2. **Set Up Virtual Environment (Optional)**  
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. **Install Backend Dependencies**  
   ```bash
   pip install -r requirements.txt
   ```
4. **Install Frontend Dependencies**  
   ```bash
   npm install
   ```
5. **Setup Environment Variables**
   ```bash
   echo "SECRET_KEY=<_INPUT_>" >> .env
   echo "CLIENT=<_INPUT_>" >> .env
   echo "DB_HOST=<_INPUT_>" >> .env
   echo "DB_NAME=<_INPUT_>" >> .env
   echo "DB_USER=<_INPUT_>" >> .env
   echo "DB_PORT=<_INPUT_>" >> .env
   echo "DB_PASS=<_INPUT_>" >> .env
   ```

6. **Database Setup**  
   ```bash
   cd backend
   python manage.py makemigrations
   python manage.py migrate
   ```
7. **User Setup(INITIAL MANDITORY CONFIG)**
   ```bash
   python manage.py createsuperuser
   ```

8. **Run the Application**  
   - **Django**:  
     ```bash
     python manage.py runserver
     ```
   - **React** (in a new terminal):  
     ```bash
     npm start
     ```
   - Open **`http://localhost:3000`** in your browser to login with your created user and access the dashboard.

---

## 🎉 Usage

1. **Access the Dashboard**  
   - Point your browser to **`http://localhost:3000`**.

2. **Log In / Register**  
   - Create a new account or use your existing credentials to log in.

3. **Manage Orders**  
   - Track incoming orders across platforms, update statuses, and generate performance reports—all from one place.

---

## 🗂 Project Structure
```
FoodDeliveryApp/
├── backend/               # Django project
│   ├── api/
│   ├── backend/
│   └── manage.py
├── public/              
    ├── index.html
├── src/              # React frontend
│   ├── Components
        ├── Login.js
        ├── Dashboard.js
│   ├── index.js
│   └── App.js
├── .babelrc
├── .gitignore
├── package.json          # Node dependencies
├── README.md
├── requirements.txt      # Python dependencies
├── webpack.config.js
└── .
```

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. **Fork** the repo  
2. **Create** a feature branch (`git checkout -b feature/my-new-feature`)  
3. **Commit** your changes (`git commit -m 'Add a cool new feature'`)  
4. **Push** to your branch (`git push origin feature/my-new-feature`)  
5. **Open** a Pull Request and tag a maintainer for review

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
Feel free to modify and use it for your own needs.

---

> **_“Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together.”_**  
> — Guy Fieri

---

**Enjoy effortless order management with FoodDeliveryApp!**  
For questions, issues, or feedback, please [open an issue](https://github.com/israel1jol/FoodDeliveryApp/issues) or reach out on **Microsoft Teams**.