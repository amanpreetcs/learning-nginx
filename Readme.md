# Learning NGINX

**Learning NGINX** is a simple project designed to learn the basics of NGINX using Docker and Node.js. It includes sample configurations, a Node.js server, and a Docker-based setup for easy experimentation.

---

## Features

- Example NGINX configuration (`nginx_conf.txt`)
- Node.js server (`server.js`)
- Dockerfile for containerized setup
- `docker-compose.yml` for multi-container orchestration
- Sample static web files in the `web/` directory

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (only required to run the server locally)

---

### Clone the Repository

```bash
git clone https://github.com/amanpreetcs/learning-nginx.git
cd learning-nginx
```

---

### Running with Docker Compose

This command will build and start both the Node.js server and NGINX using the provided configuration:

```bash
docker-compose up --build
```

- NGINX will serve as a reverse proxy to the Node.js server and/or static files in the `web/` directory.
- You can modify `nginx_conf.txt` to experiment with different NGINX settings.

---

### Running the Node.js Server Locally

```bash
npm install
node server.js
```

---

## Project Structure

| File/Folder          | Purpose                       |
| -------------------- | ----------------------------- |
| `nginx_conf.txt`     | Sample NGINX configuration    |
| `server.js`          | Simple Node.js server         |
| `Dockerfile`         | Docker image definition       |
| `docker-compose.yml` | Multi-container orchestration |
| `web/`               | Static web files              |

---

## License

This project is intended for **learning purposes**.
