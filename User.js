class User {
  constructor(){
    //1
    this.index = null;
    this.email = null;
    this.phone=null;
    this.password=null;
    this.name = null;
  }

  getCount(){
    var userCountRef = database.ref('userCount');
    userCountRef.on("value",(data)=>{
      userCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      userCount: count
    });
  }
//2
  update(){
    var userIndex = "users/user" + this.index;
    database.ref(userIndex).set({
      name:this.name,
      email:this.email,
      phone:this.phone,
      password:this.password
    });
  }
  
//4
 static getuserInfo(){
    var  userInfoRef = database.ref('users');
    userInfoRef.on("value",(data)=>{
      allusers = data.val();
     
    })
  }
  
}
