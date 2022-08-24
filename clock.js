const sec = document.getElementById("second")
const min = document.getElementById("minute")
const hr = document.getElementById("hour")

let curr = new Date()
let secs = curr.getSeconds()
let hours = curr.getHours()
let mins = curr.getMinutes()
let secondAngle = secs*6 // get current seconds and multiply it with angular velocity of second hand which is 6 degs/sec
let minuteAngle = mins*60*0.1 //find total seconds accumulated till now and multiply it by 0.1 degs/sec(which is the angular velocity of hour hand)
let hourAngle = (((hours%12)*3600)+(mins*60))*0.00833 // find total seconds accumulated till now and multiply it by 0.00833 degs/sec(which is the angular velocity of hour hand)

setInterval(()=>{
    //update second hand angle or reset it if it becomes 360 (after one rotation)
    if(secondAngle === 360){
        secondAngle = 6
    }
    else{
        secondAngle+=6
    }  
    
    //update minute hand angle or reset it if it becomes 360 (after one hour)
    if(minuteAngle === 360){
        minuteAngle = 0.1
    }
    else{
        minuteAngle+=0.1
    }

    //update hour hand angle or reset it if it becomes 360 (after 12 hours)
    if(hourAngle === 360){
        hourAngle = 0.00833
    }
    else{
        minuteAngle+=0.00833
    }

    hr.style.transform = "rotate("+hourAngle+"deg)"
    min.style.transform = "rotate("+minuteAngle+"deg)"
    sec.style.transform = "rotate("+secondAngle+"deg)"
}, 1000)