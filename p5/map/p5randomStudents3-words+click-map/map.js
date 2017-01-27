 var students = [
  	{image:"studentImages/kubick.jpg", link:"https://www.tumblr.com/blog/gamesartistsplay2017", name: "chris", words:["organized","kind", "morning-person"]  	},
    {image:"studentImages/blue.jpg",link: "https://www.tumblr.com/blog/wigglebisuits" , name: "blue", words:["active","tired", "social"]    },
    {image:"studentImages/blythe.jpg",link:"https://blythefeeney.tumblr.com/"  , name: "blythe", words:["kooky","spooky", "super-duper"]   },
    {image:"studentImages/yoyo.jpg",link: "https://fantasticyo.tumblr.com/"  , name: "yoyo",words:["sentimental","willful", "go-getter"]   },
    {image:"studentImages/heather.jpg",link: "https://jumpstartfirstgrade.tumblr.com/"  , name: "heather", words:["valuation","us-based", "investment"]   },
    {image:"studentImages/katalin.jpg",link: "https://wasisupposetobecreative.tumblr.com/" , name: "katalin", words:["happy","anxiety", "mom"]  },
    {image:"studentImages/gordon.jpg",link: "https://idontknowhattobecalledlol.tumblr.com/?soc_src=mail&soc_trk=ma" , name: "gordon", words:["quiet", "quick", "random"]  },   
    {image:"studentImages/miguel.jpg",link: "https://kimbombatimbomba.tumblr.com/"  , name: "miguel", words:["null", "nothing", "undefined"] },
    {image:"studentImages/shannon.jpg",link: "https://nopublicrestrooms.tumblr.com/"  , name: "shannon", words: ["irresponsible", "macroscopic", "feathered"]}
  ];
 
var wordArray=[];
var index;

// wordArray = students.map(x=>x.words);
wordArray = students.map(function(student){return student.words;})
console.log(wordArray);

function setup() {
  frameRate(5);
createCanvas(1200,800);
background(255);

}


function mouseClicked() {
      background(255);
  wordArray[int(random(wordArray.length))].map(function(word){
       textSize(random(30,150));
       fill(random(255),random(255),random(255));
       text(word,random(10,300),random(100,600));
       
  })
}
