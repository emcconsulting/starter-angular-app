const express = require('express');
const app = express();

app.use((req,res,next)=>{
 res.setHeader('Access-Control-Allow-Origin','*');
 res.setHeader('Access-Control-Allow-Header','Origin,X-Requested-With,Content-Type, Accept');
  next();
});

app.use('/api/posts',(req, res, next)=>{
//  response.send('Hello from express!!!');
const posts = [
  {id: 'jd7djdo29dj1019a',
   title:'First server-side post',
   content:'This is coming from the Express Server'},
   {id: 'hj4k39tkg93k',
    title:'Second server-side post',
    content:'This is coming from the Express Server, again!!!!'}
];

res.status(200).json({
  message: "Posts fetched successfully",
  posts: posts
});

});

module.exports=app;
