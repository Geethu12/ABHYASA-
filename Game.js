class Game {
  constructor(){}
  
  
 async start(){
    if(gameState === 0){
      user = new User();
      var userCountRef = await database.ref('userCount').once("value");
      if(userCountRef.exists()){
        userCount = userCountRef.val();
        user.getCount();
       
      }
      User.getuserInfo();
     
      form = new Form()
      form.display();
      
    }
  }
  play(){
    
    //image(bg1,0,0,displayWidth,displayHeight)
    image(kidsimg,width/2-540,100,240,225)
    image(adultsimg,width/2+300,100,260,220)
    t1=createImg("title1.png");
    t1.position(width/2-580,5);
    t1.size(300,100);
   
    t2=createImg("title2.png");
    t2.position(width/2+280,5);
    t2.size(300,100);
    slogan=createSprite(700,600,50,50);
    slogan.addImage(sloganImg);
    slogan.scale=0.3;
   
     b1 = createButton('START');
     b1.position(width/2-450,350);
     b1.size(100,50);
     b1.mousePressed(()=>{
          
    removeElements();
    gameState=2;
     })
     b2 = createButton('START');
     b2.position(width/2+380,350);
     b2.size(100,50);
     b2.mousePressed(()=>{
          
      removeElements();
      gameState=9;
       })
     
    
  }
  email(){
  
    user.getuserInfo();

  }
    kidsyoga(){
    var title = createElement('h2')
    title.html("1. SUKHASANA (EASY SITTING POSE)");
    title.position(displayWidth-1300, 100);
    var title2 = createElement('h2')
    title2.html("2. BALASANA (CHILD’S POSE)");
    title2.position(displayWidth-1300, 200);
    var title3 = createElement('h2')
    title3.html("3. ARDHA PADMASANA (HALF-LOTUS POSE)");
    title3.position(displayWidth-1300, 300);
    var title4 = createElement('h2')
    title4.html("4. BHUJANGASANA (COBRA POSE)");
    title4.position(displayWidth-1300, 400);
    var title5 = createElement('h2')
    title5.html("5. PASCHIMOTTANASANA (SEATED FORWARD FOLD)");
    title5.position(displayWidth-1300, 500);
    var title5 = createElement('h2')
    title5.html("6. VRKSASANA (TREE POSE)");
    title5.position(displayWidth-1300, 600);
    
    
    var title1 = createElement('h1')
    title1.html("KIDS YOGA");
    title1.position(width/2-100, 10);
   
    var button1=createButton("START");
    button1.position(displayWidth-650,125);
    button1.mousePressed(()=>{
       
   removeElements();
    gameState=3;
    })
    var button2=createButton("START");
    button2.position(displayWidth-650,225);
    button2.mousePressed(()=>{
       
   removeElements();
    gameState=4;
    })
    var button3=createButton("START");
    button3.position(displayWidth-650,325);
    button3.mousePressed(()=>{
       
   removeElements();
    gameState=5;
    })
    var button4=createButton("START");
    button4.position(displayWidth-650,425);
    button4.mousePressed(()=>{
       
   removeElements();
    gameState=6;
    })
    var button5=createButton("START");
    button5.position(displayWidth-650,525);
    button5.mousePressed(()=>{
       
   removeElements();
    gameState=7;
    })
    var button6=createButton("START");
    button6.position(displayWidth-650,625);
    button6.mousePressed(()=>{
       
   removeElements();
    gameState=8;
    })
    }
    adultsyoga(){
      var title = createElement('h2')
      title.html("1. DIAMOND THUNDERBOLT (VAJRASANA)");
      title.position(displayWidth-1300, 100);
      var title2 = createElement('h2')
      title2.html("2. GRACIOUS POSE (BHADRASANA)");
      title2.position(displayWidth-1300, 200);
      var title3 = createElement('h2')
      title3.html("3.  HALF SPINAL TWIST (ARDHA-MATSYENDRASANA)");
      title3.position(displayWidth-1300, 300);
      var title4 = createElement('h2')
      title4.html("4. CORPSE POSE  (SHAVASANA)");
      title4.position(displayWidth-1300, 400);
      var title5 = createElement('h2')
      title5.html("5. FISH POSE (MATSYASANA)");
      title5.position(displayWidth-1300, 500);
      var title5 = createElement('h2')
      title5.html("6. SEATED FORWARD BEND (PASCHIMOTTANASANA)");
      title5.position(displayWidth-1300, 600);
      
      
      var title1 = createElement('h1')
      title1.html("ADULTS YOGA");
      title1.position(width/2-150, 10);
     
      var button1=createButton("START");
      button1.position(displayWidth-650,125);
      button1.mousePressed(()=>{
         
     removeElements();
      gameState=10;
      })
      var button2=createButton("START");
      button2.position(displayWidth-650,225);
      button2.mousePressed(()=>{
         
     removeElements();
      gameState=11;
      })
      var button3=createButton("START");
      button3.position(displayWidth-650,325);
      button3.mousePressed(()=>{
         
     removeElements();
      gameState=12;
      })
      var button4=createButton("START");
      button4.position(displayWidth-650,425);
      button4.mousePressed(()=>{
         
     removeElements();
      gameState=13;
      })
      var button5=createButton("START");
      button5.position(displayWidth-650,525);
      button5.mousePressed(()=>{
         
     removeElements();
      gameState=14;
      })
      var button6=createButton("START");
      button6.position(displayWidth-650,625);
      button6.mousePressed(()=>{
         
     removeElements();
      gameState=15;
      })
      }
}