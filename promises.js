/*function isAuthenticated() {
    return Math.random() > 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });*/

  //promise 
  function isLocationValid(Loc) {
    var v = "Melbourne"
    if (v === "valid") {
      return true
    }
    else {
      return false
    }
  }
  function location() {
    return new Promise(function(response, errorMsg){
      setTimeout(function () {
        Loc = "Melbourne"
        console.log("The location is",Loc)
        if(isLocationValid) {
          return response("Location Found")
        }
        else {
          return errorMsg("Location not Found ")
        }
      },2000)
  
  })
  
  }
  location()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(response){
      console.log(response);
    });
  