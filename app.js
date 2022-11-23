const express =require('express')
require('./database/db.js')
const userRouter=require('./routers/userRouter')
const PORT=90||process.env.PORT
const app = express()

// app.use(express.urlencoded())
app.use(express.json())
app.use('/api/v1',userRouter)
app.listen(PORT,()=>{
    console.log(`app is listening at port:${PORT}`)
})