const stepsList = [
  {
    element: '#step1',
    intro: `Let's learn about trolls! Click "Next" to begin!`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step2',
    intro: `Please read the definition of a troll.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#redflags',
    intro: `Now that you know the definition of a troll, let's go through some tactics to identify trolls.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#profile',
    intro: `Firstly, let's explore a user's profile.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step3',
    intro: `Often times, a troll profile may be missing a profile photo or contain a photo that looks like a stock image from the Internet like the photo highlighted here.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step4',
    intro: `Account usernames that seem automatically generated or contain misspellings is another red flag.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step4',
    intro: `Account usernames that seem automatically generated or contain misspellings is another red flag.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step5',
    intro: `In this case, the troll profile is lacking a biography.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step6',
    intro: `Secondly, let's take a look at the wording on a user's post.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step6',
    intro: `Trolls often use divisive and inflammatory language so as to spark debate and cause frustration for other users.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step7',
    intro: `Trolls often post at strange times of day.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step8',
    intro: `... or too frequently.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step9',
    intro: `... or too regularly.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#followers',
    intro: `Finally, let's examine a user's followers/following.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#followers',
    intro: `Finally, let's examine a user's followers/following.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step10',
    intro: `Often times, troll accounts are following a very small number of accounts, many of which seem
    to be troll accounts as well. If the accounts a user is following do not seem to align with the views of 
    the user's account, this is another red flag of a troll account.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step11',
    intro: `Often times, troll accounts are following a very small number of accounts, many of which seem
    to be troll accounts as well. If the accounts a user is following do not seem to align with the views of 
    the user's account, this is another red flag of a troll account.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step11',
    intro: `In contrast, here are a few characteristics of a real account.`,
    position: 'bottom',
    scrollTo: 'tooltip',
    audioFile: ['']
  }
]; 

const smallTalkText=["Let's read the definition of a troll together.", 
"Now that you know the definition of a troll, let's go through some tactics to identify trolls.",
"Recently, I received a friend request from a user without a profile photo. The lack of a photo raised my suspicion.",
"Often times, a troll profile may be missing a profile photo or contain a photo that looks like a stock image from the Internet like the photo highlighted here. I like to use my cartoon avatar, how about you?",
"To be honest, when registering an account on an entertainment platform, I like to choose random letters as my username because it is convenient.",
"However, account usernames that seem automatically generated or contain misspellings is another red flag.",
"In this case, the troll profile is lacking a biography.",
"I've come across some pretty crafty trolls who use language that can make your blood boil like this.",
"Trolls often use divisive and inflammatory language so as to spark debate and cause frustration for other users.",
"Speaking from experience, trolls can be quite relentless when it comes to posting at strange times. I remember receiving notifications in the middle of the night, and trust me, it was not a pleasant surprise!",
"... or too frequently.",
"... or too regularly.",
"Finally, let's examine a user's followers/following.",
"You know, I've actually done some digging into the followers of troll accounts, and it's astonishing how they often have this tight-knit network of other troll accounts. It's like they're part of their own little mischievous community.",
"Often times, troll accounts are following a very small number of accounts, many of which seem to be troll accounts as well. If the accounts a user is following do not seem to align with the views of the user's account, this is another red flag of a troll account.",
"In contrast, here are a few characteristics of a real account.",
"Before we move on, I want to share a personal belief. Despite the challenges posed by trolls, I firmly believe that genuine connections online are still possible. I've made some incredible friends through social media, and it's a reminder that positivity can prevail!",
"Waiting for jumping"
];

const elem=["step1","step2","redflags","profile","step3","step4","step4","step5","wording","step6","step7","step8","step9","followers","followers","step10","step11","chatbotButton"];


var button = document.getElementById("chatbotButton");

count = 0;

button.onclick=function(){
  document.getElementById("content").innerHTML = smallTalkText[count];
  document.getElementById(elem[count]).scrollIntoView({block:"center"})
  count +=1;
  if(count==smallTalkText.length){
    button.disabled = true;
    function jump(){
      window.location.href="/tut_guide_as/trolls"; 
    }
setTimeout(jump, 3000);
  }
}

