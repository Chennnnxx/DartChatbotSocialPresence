var button = document.getElementById("replybutton");

document.addEventListener('DOMContentLoaded', function() {
    const rf1 = document.getElementById("reflect1");
    const congrat = document.getElementById("congrat");
    const q1 = document.getElementById("q1");
    setTimeout(()=>{
        congrat.innerHTML="Congratulations! You've finshed the course. Now let's test your knowledge and reinforce what you've learned about trolls.";
        rf1.style.visibility = "visible";
        setTimeout(()=>{
            q1.innerHTML="Why is it important to be cautious when accepting friend requests from unfamiliar accounts？";
            document.getElementById("typing").innerText="Please input your answer";
            document.getElementById("r1").style.visibility="visible"; 
        },300*14);      
    },300*18);
 }, false);


const feedback = ["Your explanation regarding the caution needed when accepting friend requests from unfamiliar accounts is spot on.",
"You've emphasized the need to protect oneself from trolls and foster a safe online environment. Consider expanding on this point."]

var answerList = new Array();
var count = 0;

button.onclick=function(){
    if(count==0){
        const answer1 = document.getElementById("inputanswer").value;
        document.getElementById("typing").innerText="Intrepid is typing...";
        answerList.push(answer1);
        if(!!answer1){
            document.getElementById("inputanswer").value="";
            document.getElementById("a1").innerHTML = answer1;
            const fb1 = document.getElementById("feedback1");
            const rf2 = document.getElementById("reflect2");
            fb1.style.visibility = "visible";
            fb_length = feedback[0].split(' ').length;
            fb_time = 300*fb_length;
            setTimeout(()=>{
                document.getElementById("f1").innerHTML="Your explanation regarding the caution needed when accepting friend requests from unfamiliar accounts is spot on.";
                rf2.style.visibility = "visible";
                setTimeout(()=>{
                    document.getElementById("q2").innerHTML="What steps can you take to protect yourself from trolls and maintain a safe online environment?";
                    document.getElementById("typing").innerText="Please input your answer";
                    document.getElementById("r2").style.visibility="visible";
                    }, 300*16);    
            },fb_time); 
        }
        
    }else{
        const answer2 = document.getElementById("inputanswer").value;
        document.getElementById("typing").innerText="Intrepid is typing...";
        answerList.push(answer2);
        if(!!answer2){
            document.getElementById("inputanswer").value="";
            document.getElementById("a2").innerHTML = answer2;
            document.getElementById("feedback2").style.visibility = "visible";
            const fb2 = document.getElementById("f2");
            fb_length = feedback[1].split(' ').length;
            fb_time = 300*fb_length;
            setTimeout(()=>{
                document.getElementById("typing").innerText="Waiting for jumping...";
                var url = new URL("https://lehigh.co1.qualtrics.com/jfe/form/SV_0wBxGu55Or4xQLY")
                url.searchParams.append('r1', answerList[0]);
                url.searchParams.append('r2', answerList[1]);
                url.searchParams.append('cond', "a");
                fb2.innerHTML = "You've emphasized the need to protect oneself from trolls and foster a safe online environment. Consider expanding on this point.";
                button.disabled = true;
                setTimeout(()=>{
                    window.location.href=url.toString();
                    }, 12000);
                },fb_time);
            }
        }
    count++;
}

