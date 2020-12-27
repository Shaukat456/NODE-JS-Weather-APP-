const http=require('http')
const fs=require('fs')
var requests=require('requests')



const homeFile=fs.readFileSync('Home.html','utf-8');


const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        requests('http://api.weatherapi.com/v1/current.json?key=37e99908a19c49478dd130303202612&q=Karachi')
.on('data', function (chunk) {
  console.log(chunk)
})
.on('end', function (err) {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});
    }
})


server.listen(80,'listening to port 80')