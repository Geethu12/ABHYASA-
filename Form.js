class Form {
  constructor() {
    
  }

  display(){
    background(bg)
    var title = createElement('h1')
    title.html("ABHYASA");
    title.position(displayWidth/2+100, 20);
   
    
    
    var button1 = createButton('REGISTER');
    var button2 = createButton('LOG IN');
    var button3 = createButton('GUEST');
    
   
    button1.position(displayWidth/2+100, displayHeight/2);
    button1.size(130, 30);
    button2.position(displayWidth/2+100, displayHeight/2+50);
    button2.size(130, 30);
    button3.position(displayWidth/2+100, displayHeight/2+100);
    button3.size(130, 30);

    button1.mousePressed(function(){
     
      button1.hide();
      button2.hide();
      button3.hide();
      var Name = createInput("Name");
      var email = createInput("email");
      var phone = createInput("Phone no");
      var password = createInput("password",'password');
     
      var submit = createButton('SUBMIT');
      Name.position(displayWidth/2+100, displayHeight/2);
      email.position(displayWidth/2+100, displayHeight/2+50);
      phone.position(displayWidth/2+100, displayHeight/2+100);
      password.position(displayWidth/2+100, displayHeight/2+150);
      submit.position(displayWidth/2+120, displayHeight/2+200);
      submit.size(130, 30);
      submit.mousePressed(function(){
     
        Name.hide();
        email.hide();
        phone.hide();
        password.hide();
        submit.hide();
      
     
        var count;
       
     
    User.getuserInfo();
      
      
        if(emails===null){
         
          user.email = email.value();
                user.name = Name.value();
                user.phone = phone.value();
                user.password = password.value();
                userCount+=1;
                user.index = userCount;
                user.update();
                user.updateCount(userCount);
                 var greeting = createElement('h3');
                
                 greeting.html("Hello!! " + user.name + " Welcome" )
                 greeting.position(displayWidth/2+150, displayHeight/2)
              
                
        
        
            var con= createButton('CONTINUE');
            con.position(displayWidth/2+200, displayHeight/2+200);
            con.mousePressed(()=>{
             
              con.hide();
              greeting.hide();
              gameState=1;
            })
        }
         else{
          var emailup=email.value();
       
        
          for(var plr in allusers)
          {
            emails=allusers[plr].email;
           
            var result=emails.includes(emailup);
            if(result){
                     
             count=1;
           
             }
             
          } 
         
         
    
        }
       
        if(count===undefined){
         
        
           user.email = email.value();
            user.name = Name.value();
            user.phone = phone.value();
            user.password = password.value();
            userCount+=1;
            user.index = userCount;
            user.update();
            user.updateCount(userCount);
             var greeting = createElement('h3');
            
             greeting.html("Hello!! " + user.name + " Welcome" )
             greeting.position(displayWidth/2+100, displayHeight/2)
          
            
    
    
        var con= createButton('CONTINUE');
        con.position(displayWidth/2+150, displayHeight/2+200);
        con.mousePressed(()=>{
         
          con.hide();
          greeting.hide();
          gameState=1;
        })
        }
        else{
         
          swal(
                      {
                        title: `User Exists`,
                      
                        imageUrl:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7-Yp6ziZZLecWUcZSN2swKFCrBYo27Bz2hfns9_G3IKKLBrIMIMot67QgtQssQ_BxxY&usqp=CAU",
                        imageSize: "150x150",
                        confirmButtonText: "Ok"
                      },
                      function(isConfirm) {
                        if (isConfirm) {
                          location.reload();
                          
                        }
                        
                      }
                    );///swal end
        
        }
  

            
      });
     
    });
    
    //SIGN IN
    button2.mousePressed(function(){
     var count2;
     var emails2=[];
     var passwords=[];
      button1.hide();
      button2.hide();
      button3.hide();
      var Name1 = createInput("Name");
      var email1 = createInput("email");
      var password1 = createInput("password",'password');
      
      var submit1 = createButton('SUBMIT');
     
      Name1.position(displayWidth/2+100, displayHeight/2);
      email1.position(displayWidth/2+100, displayHeight/2+50);
      password1.position(displayWidth/2+100, displayHeight/2+100);
      submit1.position(displayWidth/2+120, displayHeight/2+200);
      submit1.size(130, 30);
      submit1.mousePressed(function(){
     //console.log(allusers)
      Name1.hide();
        email1.hide();
        password1.hide();
        submit1.hide();
        var emailin=email1.value();
        var passwordin=password1.value();
       
        for(var plr in allusers)
        {
          emails2=allusers[plr].email;
          passwords=allusers[plr].password;
         
        
          var result1=emails2.includes(emailin);
          var result2=passwords.includes(passwordin);
          if(result1 && result2){
         
              count2=1;
        
              
           }
           
        } 
        if(result1==null||result2==null|| result2===false||result1===false){
          swal(
            {
              title: `Incorrect Email-id or password`,
            
              imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7-Yp6ziZZLecWUcZSN2swKFCrBYo27Bz2hfns9_G3IKKLBrIMIMot67QgtQssQ_BxxY&usqp=CAU",
              imageSize: "150x150",
              confirmButtonText: "Ok"
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
                
              }
              
            }
          );///swal end
         }
      else if(count2===1){
        
         var name = Name1.value();
       
        var con= createButton('CONTINUE');
        var greeting = createElement('h3');
        greeting.html("Hello!! " + name + " Welcome" )
        greeting.position(displayWidth/2+100, displayHeight/2)
        con.position(displayWidth/2+150, displayHeight/2+200);
        con.mousePressed(()=>{
         
          con.hide();
          greeting.hide();
          gameState=1;
        })
       }
       
      
      });
     
    });
    button3.mousePressed(function(){
     
      button1.hide();
      button2.hide();
      button3.hide();
     
       var greeting = createElement('h3');
       var con=createButton('CONTINUE')
      greeting.html("Hello!! Welcome to ABHYASA" )
      greeting.position(displayWidth/2+30, displayHeight/2)
      con.position(displayWidth/2+100, displayHeight/2+200);
      con.mousePressed(()=>{
       
        con.hide();
        greeting.hide();
        gameState=1;
      })
    });


  }
}