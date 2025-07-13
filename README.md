URL SHortner Project Setup

Complete Setup INstructions
Tech Stack Used:
Backend:Node js + Express js
Frontend:React 
Database:MongoDb Locally 

1) BACKEND
      1.   Install Node js
      2. Install curl (if not already)
      sudo apt install curl -y
      3. Add NodeSource repository (LTS version recommended)
      curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
      4. Install Node.js and npm
      sudo apt install -y nodejs
    
       Install MondoDb locally in ubuntu/linux
      1. MongoDB Installation (Linux/Ubuntu) install GPG key of MOngodb
      curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor
      2. Add MongoDB APT Repository
      echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
      3. Update Your Package List
      4. Install MongoDB
      sudo apt install -y mongodb-org
      5. Start MongoDB Service
      sudo systemctl start mongod
      6. Check MongoDB Status
      sudo systemctl status mongod
      You should see active running
      7. Test MongoDB 
      mongosh
      In MongoDB shell run:
      use urlshortener  // as it creates the databse if not being created as if created Switch to it
      8. Navigate to backend directory:
      cd backend
      Install dependencies:
      npm install
      Create environment file:
      9. make .env in root folder and add your 
      echo "MONGODB_URI=mongodb://localhost:27017/urlshortener
      PORT=3000"
      Start the server:
      node server.js
      API will run on http://localhost:3000
3) FRONTEND:
      Navigate to frontend directory:
      cd ./frontend
      Install dependencies:
      npm install
      Start development server:
      npm run dev
      Open http://localhost:5173 in your browser


4) API ENDPOINTS OVERVIEW
      POST   /shorten       Create short URL
      GET    /:code         Get back to the original url
      PUT    /:code         Update original Url on the basis of shortcode and with new given url  
      DELETE /:code         Remove short URL all data  
      GET    /:code/stats   enter the shortcode and get statistics

5) Database Usage:
     # Access MongoDB shell
    mongosh
    >  use urlshortener
    > db.schemas.find()  # View all URLs
    > db.schemas.countDocuments()  # Count entries



