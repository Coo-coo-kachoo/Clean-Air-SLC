let express = require('express');
let request = require('request');
let airQualityRouter = express.Router();



airQualityRouter.get("/:zip", (req, res) => {
  let today = new Date();
  let date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
  request(`http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${req.params.zip}&date=${date}&distance=25&API_KEY=3CF907AB-9ECF-459C-A9B3-1746C8A98DD3`, (err, response, body) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else {
      res.status(200).send({"message":"SUCCESS data returned", data: JSON.parse(body)})
    }
  });
});


module.exports = airQualityRouter;
