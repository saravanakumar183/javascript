function ramsam(name,callback){
    setTimeout(function(){
        console.log(name)
        callback();
    },2000)

}
function mini(){
    console.log("odi poiru vanthuratha")
}
ramsam("ramsam,welcome to kec",mini)