const nextPageURL = 'trans_script_s';

const stepsList = [
    {
      element: '#step1',
      intro: `Looks like you have another friend request!`,
      position: 'right',
      scrollTo: 'tooltip',
      audioFile: ['']
    },
      {
        element: '#step2',
        intro: `This account is an example of a <b>real person</b>. Lets look at the green flags you should be aware of to help you identify him a real person rather than a troll`,
        position: 'right',
        scrollTo: 'tooltip',
        // audioFile: ['CUSML.6.3.3.mp3']
      },
      {
          element: '#mutual',
          intro: `First notice that you have many <b>mutual friends</b>.`,
          position: 'right',
          scrollTo: 'tooltip',
          // audioFile: ['CUSML.6.3.3.mp3']
        },
        {
          element: '#step2',
          intro: `<b>Click their request</b> so that you can go to their account and <b>learn more</b> about them!`,
          position: 'right',
          scrollTo: 'tooltip'
        //   audioFile: ['CUSML.6.3.3.mp3']
        },
        {
            element: '.populatedBio',
            intro: `Unlike Elvis, Chris isn't trying to get you to click a link in his bio. Instead, he is <b>sharing about his personal life</b>. The facts in his bio can be <b>easily confirmed</b> by looking at his feed and account statistics. Trolls avoid using identifying information that is easy to debunk.`,
            position: 'left',
            myBeforeChangeFunction: function() { 
              let showProfilePage = document.getElementById("harmony-page");
              showProfilePage.style.display = "block";
        
              let hideRequest = document.getElementById("step1");
              hideRequest.style.display = "none";    
            },
            scrollTo: 'tooltip',             
            // audioFile: ['CUSML.6.3.4.mp3']
          },
          {
            element: '#joined-date',
            intro: `We can also see that he has been on the social media site of <b>many years</b>`,
            position: 'left',
            scrollTo: 'tooltip',             
            // audioFile: ['CUSML.6.3.4.mp3']
          },
        {
            element: '#harmony-pic',
            intro: `Chris shares nice pictures of him with his family. This helps show that he is a real person as well as give insight into one of his <b>motivations</b> for being on social media—connecting with family. This is something trolls aren't interested in.`,
            position: 'left',
            scrollTo: 'tooltip',
            // audioFile: ['CUSML.6.3.3.mp3']
          },
          {
            element: '#chrisFeed',
            intro: `He posts about <b>places to eat in his hometown</b>. Professional trolls are speaking to a wide audience, not just their neighbors in Columbia City. They aren’t very likely to put research into where to find good brisket.`,
            position: 'right',
            scrollTo: 'tooltip',
            // audioFile: ['CUSML.6.3.3.mp3']
          },
          {
            element: '#chrisFeed',
            intro: `It is important to note that most social media accounts are indeed operated by <b>real people</b>. This is true with accounts that discuss politics, race, and culture (topics trolls focus on) the same as any other.`,
            position: 'right',
            scrollTo: 'tooltip',
            // audioFile: ['CUSML.6.3.3.mp3']
          },
          {
            element: '#backBtn',
            intro: `We've seen enough to know this is a <b>real person</b>, not a troll! <b>Press the arrow button</b> to return to the friend request where you will be able to respond to it.`,
            position: 'left',
            scrollTo: 'tooltip'
          //   audioFile: ['CUSML.6.3.6.mp3']
          },
        {
          element: '#accept',
          intro: `Accept this request<br><br> <em>Press the <b>Accept</b> button to continue</em>`,
          position: 'left',
          myBeforeChangeFunction: function() { 
            let showProfilePage = document.getElementById("harmony-page");
            showProfilePage.style.display = "none";
      
            let hideRequest = document.getElementById("step1");
            hideRequest.style.display = "block";    
          },
          scrollTo: 'tooltip',
          // audioFile: ['CUSML.6.3.6.mp3']
        }
  ];

  const myText=["This account is an example of a real person. Lets look at the green flags you should be aware of to help you identify him a real person rather than a troll",
  "First notice that you have many mutual friends.",
  "Click their request so that you can go to their account and learn more about them!",
  "Unlike Elvis, Chris isn't trying to get you to click a link in his bio. Instead, he is sharing about his personal life. The facts in his bio can be easily confirmed by looking at his feed and account statistics. Trolls avoid using identifying information that is easy to debunk.",
  "We can also see that he has been on the social media site of many years",
  "Chris shares nice pictures of him with his family. This helps show that he is a real person as well as give insight into one of his motivations for being on social media—connecting with family. This is something trolls aren't interested in.",
  "He posts about places to eat in his hometown. Professional trolls are speaking to a wide audience, not just their neighbors in Columbia City. They aren’t very likely to put research into where to find good brisket.",
  "It is important to note that most social media accounts are indeed operated by real people. This is true with accounts that discuss politics, race, and culture (topics trolls focus on) the same as any other.",
  "We've seen enough to know this is a real person, not a troll! Let's return to the friend request where you will be able to respond to it.",
  "Accept this request. Press the Accept button to continue"];
  
  const smallTalkText=[
  ];
  
  //const elem=["step1","step2","redflags","profile","step3","step4","step5","wording","step6","time","step7","step8","step9","followers","step10","step11","chatbotButton"];
  
  
  var button = document.getElementById("chatbotButton");
  
  count = 0;
  
  button.onclick=function(){
    document.getElementById("content").innerHTML = myText[count];
    //document.getElementById(elem[count]).scrollIntoView({block:"center"});
    if(count==9){
      button.style.display="none";
    }
    count +=1;
  }