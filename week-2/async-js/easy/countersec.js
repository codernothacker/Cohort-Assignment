let currrentdate=new Date;
let str=currrentdate.getTime()

function call(){
    return console.log(str++)
}
setInterval(call,1000)



