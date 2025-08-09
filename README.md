````markdown
# CancolyAssist

![Home page](https://raw.githubusercontent.com/solomonyusuf/CancolyAssist/master/Demo/Screenshot%202025-07-15%20at%2020-52-15%20Home%20page%20-%20Cancoly.png)

Cancoly is an AI-powered medical imaging platform designed to help healthcare professionals analyze MRI scans
 for early tumor detection and diagnosis.

Using advanced machine learning models, Cancoly enables users to:

    Upload MRI scans securely via a web interface.

    Automatically process and analyze images for potential tumor indicators.

    Receive detailed diagnostic insights to support medical decision-making.

    Access results through an easy-to-use dashboard.

With #CancolyAssist, our mission is to empower radiologists and clinicians by reducing analysis time,
increasing diagnostic accuracy, and improving patient outcomes — especially in settings where
specialized radiology expertise is scarce.

---

## 🌐 Live Demo
You can access the live version of the app here:  
🔗 **[cancoly.runasp.net](https://cancoly.runasp.net)**

You can access the video demo of the app here:  
🔗 [video demo](https://drive.google.com/file/d/1z8tWlME7jFqTIwKGUnqq41tE1tAzzmwU/view?usp=sharing)

---

## 📌 Features
- Built with **.NET 8** for high performance and cross-platform compatibility.
- **Dockerized** for quick setup and consistent environment.
- **Remote database integration** for scalability and security.
- Ready-to-use `docker-compose.yml` file for easy deployment.

---

## 🛠 Prerequisites
Make sure you have the following installed on your system:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## ⚡ Quick Start

1. **Clone this repository**
   ```bash
   git clone  https://github.com/solomonyusuf/CancolyAssist.git
   cd your-repo
````

2. **Launch the application**

   ```bash
   docker compose up --build -d
   ```

3. **Access the application**
   Once the containers are up, open your browser and go to:

   ```
   http://localhost:8080
   ```

---

## ⚙️ Configuration

* Environment variables can be set in a `.env` file or directly inside the `docker-compose.yml`.
* The app automatically connects to the **remote database** configured in your environment variables.

---

## 📂 Project Structure

```
.
├── Cancoly                 # .NET 8 application source code
├── Cancoly.Application
├── Cancoly.Persistence
├── Cancoly.Domain
├── docker-compose.yml # Docker services configuration
└── README.md          # Documentation
```

---

## 🛑 Stopping the App

To stop all running containers:

```bash
docker compose down
```

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

💡 **Pro Tip:** You can easily deploy this app to any cloud platform that supports Docker — no additional setup required.

```
