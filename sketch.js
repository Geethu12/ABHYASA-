var canvas, backgroundImage;
var kyoga1;
var counter=0;
var gameState = 0;
var userCount, useremail;
var allusers;
var database;
var emails=[];
var use=[];
var kids,adults,elders,b1,b2,b3,slogan;
var database,backImg,back;
var bg,bg1,bg2,kidsimg,adultsimg,eldersimg,sloganImg,st;
var form, user, game,t1,t2;
var UserName,UserCount=0;
var sukhasana,sukhasana_steps;
var cp,cpsteps,cpbenefits;
var ap,apsteps,apbenefits;
var bp,bpsteps,bpbenefits;
var pp,ppsteps,ppbenefits;
var vp,vpsteps,vpbenefits;
var ad,adsteps;
var ab,absteps;
var ah,ahsteps;
var ac,acsteps;
var af,afsteps;
var as,assteps;
var kidsbg,adultsbg;
function preload(){
  bg=loadImage("bg.jpg");
  bg1=loadImage("bg2.jpeg");
  bg2=loadImage("backg.jpg");
  kidsimg=loadImage("kids yoga.jpg");
  adultsimg=loadImage("adults yoga.jpg");
  eldersimg=loadImage("elder yoga.jpg");
  sloganImg=loadImage("s.jpg");
  st=loadImage("start.png")
  kyoga1=loadImage("kyoga1.png");
  sukhasana=loadImage("sukhasana.png");
  sukhasana_steps=loadImage("sukhasana_steps.png");
  cp=loadImage("c1.png");
  cpsteps=loadImage("c2.png");
  cpbenefits=loadImage("c3.png");
  ap=loadImage("a1.png");
  apsteps=loadImage("a2.png");
  apbenefits=loadImage("a3.png");
  bp=loadImage("b1.png");
  bpsteps=loadImage("b2.png");
  bpbenefits=loadImage("b3.png");
  pp=loadImage("p1.png");
  ppsteps=loadImage("p2.png");
  ppbenefits=loadImage("p3.png");
  vp=loadImage("v1.png");
  vpsteps=loadImage("v2.png");
  vpbenefits=loadImage("v3.png");
  backImg=loadImage("back.png");
  ad=loadImage("ad1.png");
  adsteps=loadImage("ad2.png");
  ab=loadImage("ab1.png");
  absteps=loadImage("ab2.png");
  ah=loadImage("ah1.png");
  ahsteps=loadImage("ah2.png");
  ac=loadImage("ac1.png");
  acsteps=loadImage("ac2.png");
  af=loadImage("af1.png");
  afsteps=loadImage("af2.png");
  as=loadImage("as1.png");
  assteps=loadImage("as2.png");
  kidsbg=loadImage("kidsbg.jpg");
  adultsbg=loadImage("adultsbg.jpg");
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  //game.getState();
  game.start();
 
}


function draw(){
  if(gameState===1){
    background(bg2);
    game.play();
  }
 else if(gameState===2){
  
   background(bg1);
   game.kidsyoga();
   back=createImg("back.png");
   back.position(20,20);
   back.size(100,80);
   back.mousePressed(()=>{
     removeElements();
     gameState=1;
   })
 }
 else if (gameState===3){
   background(kidsbg);
   fill("black")
   textSize(30)
   textStyle(BOLD);
   text("SUKHASANA (EASY SITTING POSE)",displayWidth-800,100)
 image(sukhasana,displayWidth-800,200,400,300);
 image(kyoga1,displayWidth-1400,150,720,350);
 image(sukhasana_steps,displayWidth-250,166,300,400);
 back=createImg("back.png");
 back.position(20,20);
 back.size(100,80);
 back.mousePressed(()=>{
   removeElements();
   gameState=2;
 })
 }
 else if(gameState===4){
  
  background("white");
  fill("black")
   textSize(30)
   textStyle(BOLD);
  text("BALASANA (CHILD POSE)",displayWidth-700,100)
  image(cp,displayWidth-700,200,350,200);
  image(cpsteps,displayWidth-1350,150,620,350);
  image(cpbenefits,displayWidth-380,166,700,300);
  back=createImg("back.png");
  back.position(20,20);
  back.size(100,80);
  back.mousePressed(()=>{
    removeElements();
    gameState=2;
  })
}

else if(gameState===5){
  
  background(kidsbg);
  fill("black")
   textSize(30)
   textStyle(BOLD);
  text("ARDHA-PADMASANA (HALF-LOTUS POSE)",displayWidth-900,100)
  image(ap,displayWidth-750,170,350,300);
  image(apsteps,displayWidth-1300,170,520,300);
  image(apbenefits,displayWidth-380,170,650,350);
  back=createImg("back.png");
  back.position(20,20);
  back.size(100,80);
  back.mousePressed(()=>{
    removeElements();
    gameState=2;
  })
}
else if(gameState===6){
  
  background(kidsbg);
  fill("black")
  textSize(30)
  textStyle(BOLD);
 text("BHUJANGASANA (COBRA POSE)",displayWidth-800,80)
 image(bp,displayWidth-650,150,350,300);
 image(bpbenefits,displayWidth-1350,150,650,400);
 image(bpsteps,displayWidth-350,150,550,300);
 back=createImg("back.png");
 back.position(20,20);
 back.size(100,80);
 back.mousePressed(()=>{
   removeElements();
   gameState=2;
 })
}
else if(gameState===7){
  
  background(kidsbg);
  fill("black")
  textSize(30)
  textStyle(BOLD);
 text("PASCHIMOTTANASANA (SEATED FORWARD FOLD)",displayWidth-900,80)
 image(pp,displayWidth-800,150,350,300);
 image(ppbenefits,displayWidth-1350,150,650,350);
 image(ppsteps,displayWidth-350,150,550,280);
 back=createImg("back.png");
 back.position(20,20);
 back.size(100,80);
 back.mousePressed(()=>{
   removeElements();
   gameState=2;
 })
}
else if(gameState===8){
  
  background(kidsbg);
  fill("black")
  textSize(30)
  textStyle(BOLD);
 text("VRKSASANA (TREE POSE)",displayWidth-700,80)
 image(vp,displayWidth-700,130,300,400);
 image(vpsteps,displayWidth-1350,150,650,350);
 image(vpbenefits,displayWidth-350,150,630,280);
 back=createImg("back.png");
 back.position(20,20);
 back.size(100,80);
 back.mousePressed(()=>{
   removeElements();
   gameState=2;
 })
}
else if(gameState===9){
  
  background(bg1);
  game.adultsyoga();
  back=createImg("back.png");
  back.position(20,20);
  back.size(100,80);
  back.mousePressed(()=>{
    removeElements();
    gameState=1;
  })
}
else if (gameState===10){
  background(adultsbg);
  fill("black")
  textSize(30)
  textStyle(BOLD);
  text(" DIAMOND THUNDERBOLT (VAJRASANA)",displayWidth-820,100)
image(ad,displayWidth-720,130,400,300);
image(adsteps,displayWidth-870,450,750,250);

back=createImg("back.png");
back.position(20,20);
back.size(100,80);
back.mousePressed(()=>{
  removeElements();
  gameState=9;
})
}else if (gameState===11){
  background(adultsbg);
  fill("black")
  textSize(30)
  textStyle(BOLD);
  text(" GRACIOUS POSE (BHADRASANA)",displayWidth-820,100)
image(ab,displayWidth-720,130,350,350);
image(absteps,displayWidth-870,500,650,300);

back=createImg("back.png");
back.position(20,20);
back.size(100,80);
back.mousePressed(()=>{
  removeElements();
  gameState=9;
})
}
else if (gameState===12){
  background(adultsbg);
  fill("black")
  textSize(30)
  textStyle(BOLD);
  text("  HALF SPINAL TWIST (ARDHA-MATSYENDRASANA)",displayWidth-820,100)
image(ah,displayWidth-720,130,320,350);
image(ahsteps,displayWidth-870,500,680,250);

back=createImg("back.png");
back.position(20,20);
back.size(100,80);
back.mousePressed(()=>{
  removeElements();
  gameState=9;
})
}
else if (gameState===13){
  background(adultsbg);
  fill("black")
  textSize(30)
  textStyle(BOLD);
  text(" CORPSE POSE  (SHAVASANA)",displayWidth-820,100)
image(ac,displayWidth-720,130,350,250);
image(acsteps,displayWidth-870,480,680,250);

back=createImg("back.png");
back.position(20,20);
back.size(100,80);
back.mousePressed(()=>{
  removeElements();
  gameState=9;
})
}
else if (gameState===14){
  background(adultsbg);
  fill("black")
  textSize(30)
  textStyle(BOLD);
  text(" FISH POSE (MATSYASANA)",displayWidth-820,100)
image(af,displayWidth-720,130,380,250);
image(afsteps,displayWidth-870,480,680,250);

back=createImg("back.png");
back.position(20,20);
back.size(100,80);
back.mousePressed(()=>{
  removeElements();
  gameState=9;
})
}
else if (gameState===15){
  background(adultsbg);
  fill("black")
  textSize(30)
  textStyle(BOLD);
  text(" SEATED FORWARD BEND (PASCHIMOTTANASANA)",displayWidth-820,100)
image(as,displayWidth-720,130,380,250);
image(assteps,displayWidth-870,480,680,250);

back=createImg("back.png");
back.position(20,20);
back.size(100,80);
back.mousePressed(()=>{
  removeElements();
  gameState=9;
})
}
}








