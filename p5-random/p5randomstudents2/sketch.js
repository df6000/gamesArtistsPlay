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
var names=[];


function setup() {
  frameRate(5);
createCanvas(1200,800);
background(255);


console.log(students.length);

for(var i=0;i<students.length;i++) {
  names[i]=students[i].name;
};

// console.log(names);
textSize(200);
fill(random(255),random(255),random(255));
text(random(names),10,200)



}

function draw() {


}



//   students.forEach(function(student){
//     // background(255);
//     var huge = random(100);
//     var xVal=200;
//   textSize(random(20,60));
//   if (huge>90) {textSize(200);xVal=0;};
//   fill(random(255),random(255),random(255));
//   text(student.name,xVal+random(400), 100+random(400));
// });
