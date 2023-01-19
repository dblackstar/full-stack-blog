const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/category');
const multer = require('multer');
const cors = require('cors');


// ********** CONFIG
app.use(express.json());
app.use(cors());



// ************     MONGO && MONGOOSE   *********
const dotenv = require('dotenv');
const { db } = require('./models/User');
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(console.log("Connect to database"))
.catch((err)=>console.log(err))


// -------- for IMAGES
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "images");
    },
    filename:(req, file, cb)=>{
        cb(null, "3dgame.jpg");
    }
});

const upload = multer({storage:storage});





// ---------------  ROUTES
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.post("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("File has been upload");
}) // FOR MULTER ==> images







app.listen(process.env.PORT||5000, ()=>{
    console.log("Server is running on port :", process.env.PORT);
})