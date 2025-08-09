
# CancolyAssist

![Home page](https://raw.githubusercontent.com/solomonyusuf/CancolyAssist/master/Demo/Screenshot%202025-07-15%20at%2020-52-15%20Home%20page%20-%20Cancoly.png)

Cancoly is an AI-powered medical imaging platform designed to help healthcare professionals analyze MRI scans
 for early tumor detection and diagnosis.

Using advanced machine learning models, Cancoly enables users to:

    Upload MRI scans securely via a web interface.

    Automatically process and analyze images for potential tumor indicators.

    Receive detailed diagnostic insights to support medical decision-making.

    Access results through an easy-to-use dashboard.

With CancolyAssist, our mission is to empower radiologists and clinicians by reducing analysis time,
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

* Environment variables can be set in a `..cancoly/appsetting.json` file.
* The app automatically connects to the **remote database** configured in your environment variables.
* this configuration is not required to be added again since it is already set up

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=.\\SQLEXPRESS;Initial Catalog=cancoly;Integrated Security=True;Multiple Active Result Sets=True;Trust Server Certificate=True", 
    "ProductionConnection": "workstation id=**;packet size=4096;user id=**;pwd=**;data source=**;persist security info=False;initial catalog=**;TrustServerCertificate=True;Multiple Active Result Sets=True;", 

    "MailUserName": "**",
    "MailPassword": "**",
    "Mailer": "**",
    "MailPort": "587",
    "MailHost": "smtp.gmail.com",
    "ServerHost": "",

    "SecretKey": "**",
    "Model": "openai/gpt-4.1",
    "OpenAIUrl": "https://models.github.ai/inference",

    "PayStackSecret": "**",
    "PayStackPublic": "**"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

### explanations for each key:

* **DefaultConnection** → Local SQL Server connection string with MARS enabled.
* **ProductionConnection** → Remote SQL Server connection string for production with MARS enabled.
* **MailUserName** → Email address for sending mail.
* **MailPassword** → App password for email sending.
* **Mailer** → The "from" email used in outgoing emails.
* **MailPort** → Port for SMTP (587 for TLS).
* **MailHost** → SMTP host server address.
* **ServerHost** → Application host address (currently empty).
* **SecretKey** → API key for model access.
* **Model** → AI model name used for requests.
* **OpenAIUrl** → Endpoint for AI model requests.
* **PayStackSecret** → Private API key for Paystack payments.
* **PayStackPublic** → Public API key for Paystack payments.
* **Logging.LogLevel.Default** → Default log verbosity.
* **Logging.LogLevel.Microsoft.AspNetCore** → Logging level for ASP.NET Core.
* **AllowedHosts** → Defines which hosts are allowed to access the app.


---

## 📂 Project Structure

```
.
├── Cancoly                 # .NET 8 application source code
├── Cancoly.Application     # Application layer (use cases, DTOs, business logic)
├── Cancoly.Persistence     # Data access layer (EF Core, repositories, Unit of Work)
├── Cancoly.Domain          # Domain entities, value objects, core business rules
├── Demo                    # Contain demo video and images
├── docker-compose.yml      # Docker services configuration
└── README.md               # Documentation
```

This project follows **Clean Architecture** principles to maintain a clear separation of concerns:

* **Domain Layer (`Cancoly.Domain`)**
  Contains the core business entities and logic — completely independent of external frameworks.

* **Application Layer (`Cancoly.Application`)**
  Houses use case implementations and orchestrates business operations. This is where the **Unit of Work pattern** is utilized to manage multiple repository operations within a single transaction, ensuring consistency across database writes.

* **Persistence Layer (`Cancoly.Persistence`)**
  Implements repositories and data access logic using **Entity Framework Core**. Configured with **SQL Server** as the database backend and **Multiple Active Result Sets (MARS)** enabled, allowing multiple queries to run on the same connection without blocking each other — especially useful when fetching related datasets in parallel.

This structure improves testability, scalability, and maintainability while ensuring that each layer has a single responsibility.


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

