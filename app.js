const express = require('express')
const path = require("path");
const app = express()
var proxy = require('express-http-proxy');
const fetch = require('cross-fetch');
var cors = require('cors')

async function request(
  url, 
  config
) {
  console.log(url)
  console.log(config)
  const response = await fetch(url, config);
  return await response.json();
}

let  post=(url, body) => 
      request(url, { method: 'POST', body,   
                  headers: {
                          "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, })

// #############################################################################
// Logs all request paths and method
app.use(cors())
app.use(function (req, res, next) {
  res.set('x-timestamp', Date.now())
  res.set('x-powered-by', 'cyclic.sh')
  console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`);
  next();
});

app.use('/api',async (req,res)=>{
  let txhash=req.query.txhash
  console.log(req.query)
  let params=JSON.stringify({tx_hash:txhash})
  console.log('params',params)
  let data = await post('http://3.89.186.206:12000/cctp',params )
  console.log(data)
  res.json(data)
  .end()
});

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('public', options))

// #############################################################################
// Catch all handler for all other request.
app.use('*', (req,res) => {
  res.json({
      at: new Date().toISOString(),
      method: req.method,
      hostname: req.hostname,
      ip: req.ip,
      query: req.query,
      headers: req.headers,
      cookies: req.cookies,
      params: req.params
    })
    .end()
})

module.exports = app
