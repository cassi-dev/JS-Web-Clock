function GetTime(){
    let CurrentTime = new Date()
    let CurrentHour = CurrentTime.getHours()
    let CurrentMinute = CurrentTime.getMinutes()
    let CurrentSecond = CurrentTime.getSeconds()

    if(CurrentMinute < 10){
        CurrentMinute = "0" + CurrentMinute
    }
  
    if(CurrentSecond < 10){
        CurrentSecond = "0" + CurrentSecond
    }
  
    let GetCurrentTime = CurrentHour + ":" + CurrentMinute + ":" + CurrentSecond + " " + ` <span> - </span>` + CurrentTime.getDate() + '.' + (CurrentTime.getMonth()+1) + '.' + CurrentTime.getFullYear();
    document.getElementById('clock').innerHTML = GetCurrentTime;
    setInterval('GetTime()', 1000 )
}