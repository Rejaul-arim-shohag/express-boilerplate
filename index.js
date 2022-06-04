const app = require('./app');
const PORT = "5000";
app.listen(process.env.port || PORT, ()=>{
    console.log("Server running on port 5000")
})