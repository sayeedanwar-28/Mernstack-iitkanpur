function Clock(){
    let Time= new Date();
    let CurTime=Time.toLocaleTimeString();
    document.getElementById('clockId').innerHTML=CurTime;
}

let ChangeTime=setInterval(Clock,1000);