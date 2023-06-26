const axios = require('axios');
const getData = (req, res) => {
    const response=axios.get("https://foody-da258-default-rtdb.firebaseio.com/AvailableMeals.json");
    response.then((data)=>{
        console.log(data.data);
        res.send(data.data)
    })
    
};
module.exports = { getData };
