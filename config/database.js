const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI,{

    useUnifiedTopology: true, 
    useNewUrlParser: true,
})
.then(()=>console.log("Database conected"))
.catch(err => console.error(err))

