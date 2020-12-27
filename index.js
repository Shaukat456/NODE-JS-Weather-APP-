const http = require('http')
const fs = require('fs')
var requests = require('requests')



const homeFile = fs.readFileSync('Home.html', 'utf-8');

// defining replace value function

const replaceVal = (tempValue, orginalValue) => {
    let temperature = tempValue.replace('{%tempval%}', orginalValue.current.temp_c)
 temperature = temperature.replace('{%tempMin%}', orginalValue.current.temp_c)
 temperature = temperature.replace('{%tempMax%}', orginalValue.current.temp_c)
 temperature = temperature.replace('{%location%}', orginalValue.location.name)
 temperature = temperature.replace('{%country%}', orginalValue.location.country)
 return 
    console.log(temperature)
}

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        requests('http://api.weatherapi.com/v1/current.json?key=37e99908a19c49478dd130303202612&q=Karachi')
            .on('data', function (chunk) {
                const obJdata = JSON.parse(chunk)
                const arrdata = [obJdata]
                console.log(arrdata[0].current.temp_c)

                const RealTimeDate = arrdata.map((value) => {
                   console.log(value.current)
                    // replaceVal(homeFile, value)
                })

            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);
                console.log('end');
            });
    }
})


server.listen(80, '127.0.0.1')