# 🔗 URL Shortener - SnapLink

## Tech Stack
| Component       | Technology         |
|-----------------|--------------------|
| **Backend**     | Node.js + Express  |
| **Frontend**    | React              |
| **Database**    | MongoDB (Local)    |
| **Styling**     | Tailwind CSS       |

---

## 🚀 Installation Guide

### 📥 Prerequisites
```bash
# Verify installations
node -v  # Requires v18+
mongod --version
1️⃣ Backend Setup
bash
# Install Node.js
sudo apt install curl -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install & Configure MongoDB
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt update
sudo apt install -y mongodb-org
sudo systemctl start mongod

# Start Backend
cd backend
npm install
echo "MONGODB_URI=mongodb://localhost:27017/urlshortener" > .env
echo "PORT=3000"  // create .env in out project and add these
npm start
Backend Running: http://localhost:3000

2️⃣ Frontend Setup
bash
cd frontend
npm install
npm run dev
Access UI: http://localhost:5173

API Endpoints
Endpoint	Method	Description	Example
/shorten	POST	Create short URL	{ "url": "https://example.com" }
/:code	GET	Redirect to original URL 	/abc123 → give to original Url
/:code	PUT	Update destination URL	{ "url": "https://new-url.com" }
/:code	DELETE	Remove short URL	- on the basis of shortCode
/:code/stats	GET	Get access statistics	Returns clicks, timestamps
 Database Operations
bash
# Access MongoDB Shell
mongosh
use urlshortener

# Common Commands
> db.urls.find()           # View all URLs
> db.urls.countDocuments() # Count entries
