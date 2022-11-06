const axios = require("axios");
exports.readall = (req, res) => {
      axios
      .get(
        "http://127.0.0.1:5001/mypark-app/us-central1/api/router"
      )
      .then(function (response) {
        res.send(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });

  };
  
exports.findByid = async (req, res) => {
    console.log(req.params.id);
    axios
      .get(
        "http://127.0.0.1:5001/mypark-app/us-central1/api/router"
      )
      .then(function (response) {
        var data;
        for(i = 0;i<2;i++){
            if(parseInt(response.data.results[i].places_id) == parseInt(req.params.id)){
                data = response.data.results[i]
            }
        }
        if(data){
            res.send(data)
        }else{
            res.send({message:"note found"})
        }
      })
      .catch(function (error) {
        console.error(error);
      });

}