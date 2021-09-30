function User(username, email){
  this.username = username;
  this.email = email;
  // this.login = function(){
  //   console.log(`${this.username} has logged in`);
  // };
}

User.prototype.login = function(){
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function(){
  console.log(`${this.username} has logged out`);
  return this;
};

function Admin(username, email, title){
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function() {
  console.log(`User deleted`);
}

// class User {
//   constructor(username, email){
//     // this.username = 'mario';
//     this.username = username;
//     this.email = email;
//   }
// }


const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userThree = new Admin('Shaun', 'shaun@thenetninja.co.uk', 'captain');

userOne.login().logout();
userThree.login().logout();