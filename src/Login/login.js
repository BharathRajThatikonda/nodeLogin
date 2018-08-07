const login = require("../DB/Models/login_model");



module.exports = function(app){

app.post("/login",(req,res)=>{

    var input = req.body;
    var loginVaue = new login({
        email: input.email,
        password: input.password
      });

      login.findOne({email:input.email}).then((result)=>{
        loginVaue.save().then((result) => {
            res.send({result});
          }, (e) => {
            res.status(400).send({message:"Alraedy registerd user",statusCode:400});
          });
      },(e)=>{
        res.status(400).send(e);
      })



      

});




}