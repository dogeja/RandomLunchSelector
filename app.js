const lunch = document.querySelector(".lunch_result"),
     button = document.querySelector(".button"),
       boom = document.querySelector("boom");
const lunchList=["소노야","김밥이맛있는집","깁밥이야기","씹데리아","버거킹"];

lunch.innerText="오늘의 점심은 뭘까....."
function lunchHandler(){
    
    const randLunchList=lunchList[Math.floor(Math.random()*lunchList.length)];
    
    const date = new Date();
    const today = parseInt(date.getDay());
    
    if(today===3){
        delete lunchList[2];
        if (randLunchList===undefined){
            lunch.innerText=`오늘 김밥이야기 쉬는날이네........`
        }else{
            lunch.innerText=`오늘의 점심은.....${randLunchList}....`
        }
        
    }else if(today===4){
        delete lunchList[0];
        if (randLunchList===undefined){
            lunch.innerText="오늘 소노야 쉬는날이네.........."
        }else{
            lunch.innerText=`오늘의 점심은.....${randLunchList}....`
        }
    }else{
        lunch.innerText=`오늘의 점심은.....${randLunchList}....`
    }
    button.classList.add("hidden");
    
}
// function play(){
//     if(audio.paused){
//         boom.play();

//     }else{
//         audio.pause();
//         audio.currentTime = 0
//     }
// }



button.addEventListener("click",lunchHandler);







