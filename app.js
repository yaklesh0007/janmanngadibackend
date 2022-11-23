const express =require('express')
require('./database/db.js')
const userRouter=require('./routers/userRouter')
const app = express()
const PORT=90||process.env.PORT
app.use(express.json())

app.use(userRouter)
app.listen(PORT,()=>{
    console.log(`app is listening at port:${PORT}`)
})