var button = document.getElementById("replybutton");

const selfDis=["I once received a friend request from someone claiming to be a former colleague. Despite not recognizing the name, I accepted the request.",
"Over time, I noticed they rarely engaged with my posts and seemed more interested in observing. Later, I learned about online scams involving fake profiles, prompting me to carefully assess the account.",
"I discovered inconsistencies and realized I had accepted a friend request from a fake account. This experience taught me to be cautious when accepting friend requests from unfamiliar accounts.",
"I encountered a troll during a heated online discussion. Instead of engaging with them, I reported their abusive behavior to the platform and focused on positive interactions with others.", 
"I adjusted my privacy settings, educated myself about troll tactics, and actively participated in initiatives promoting responsible online behavior.",
"These steps helped me protect myself and contribute to a safer online environment."];

document.addEventListener('DOMContentLoaded', function() {
    const rf1 = document.getElementById("reflect1");
    const congrat = document.getElementById("congrat");
    const q1 = document.getElementById("q1");
    setTimeout(()=>{
        congrat.innerHTML="Congratulations! You've finshed the course. Now let's test your knowledge and reinforce what you've learned about trolls.";
        document.getElementById("self11").style.visibility="visible";
        setTimeout(()=>{     
            document.getElementById("s11").innerHTML=selfDis[0];
            document.getElementById("self12").style.visibility="visible";
            setTimeout(()=>{
                document.getElementById("s12").innerHTML=selfDis[1];
                document.getElementById("self13").style.visibility="visible";
                setTimeout(()=>{
                    document.getElementById("s13").innerHTML=selfDis[2];
                    rf1.style.visibility = "visible";
                    setTimeout(()=>{
                        q1.innerHTML="Why is it important to be cautious when accepting friend requests from unfamiliar accounts？";
                        document.getElementById("typing").innerText="Please input your answer";
                        document.getElementById("r1").style.visibility="visible";
                    }, 300*14 )
                }, 300*29)                
            },300*32);            
        },300*23);        
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
                document.getElementById("f1").innerHTML=feedback[0];
                document.getElementById("self21").style.visibility="visible"; 
                setTimeout(()=>{    
                    document.getElementById("s21").innerHTML=selfDis[3];
                    document.getElementById("self22").style.visibility="visible";
                        setTimeout(()=>{
                            document.getElementById("s22").innerHTML=selfDis[4];
                            document.getElementById("self23").style.visibility="visible";
                            setTimeout(()=>{
                                document.getElementById("s23").innerHTML=selfDis[5];
                                rf2.style.visibility = "visible";
                                setTimeout(()=>{
                                    document.getElementById("q2").innerHTML="What steps can you take to protect yourself from trolls and maintain a safe online environment?";
                                    document.getElementById("typing").innerText="Please input your answer";
                                    document.getElementById("r2").style.visibility="visible";
                                }, 300*16)
                            }, 300*13)                
                        }, 300*19);
                    }, 300*29);    
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
                url.searchParams.append('cond', "as");
                fb2.innerHTML = feedback[1];
                button.disabled = true; // ? doesn't work
                setTimeout(()=>{
                    window.location.href=url.toString();
                    }, 12000);
                },fb_time);
            }
        }
    count++;
}

