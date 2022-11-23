const mongoose =require('mongoose');
mongoose.connect("mongodb://localhost:27017/jannmaangaadi",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log('connected to localmongodb')
})
.catch((err)=>{
    console.warn(`${err}`)
})

