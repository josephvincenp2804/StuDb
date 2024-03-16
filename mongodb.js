const mongoose = require('mongoose');
let compass_url='mongodb://localhost:27017/StuDB';
let mongodb_url='mongodb+srv://josephvincenp2804:Josephvincenp421@cluster0.3ifveg6.mongodb.net/JvpDB?retryWrites=true&w=majority&appName=Cluster0'
mongoose
.connect(mongodb_url)
.then(()=>{
    console.log("db connected");
})
.catch((err) => {
    console.log(err);
})