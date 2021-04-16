const User = function (name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },

  recive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function () {
  let users = {};

  return{
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send : function(message, from, to) {
      if(to){
        // Single User
        to.recive(message, from);
      } else {  
        // Mass message
        for(key in users) {
          if(user[key]!== from) {
            users[key].recive(message, from);
          }
        }
      }
    }
  }
}

const abin = new User ('Abin');
const brad = new User ('Brad'); 
const sara = new User ('Sara');

const chatroom = new Chatroom ();

chatroom.register(abin);
chatroom.register(brad);
chatroom.register(sara);

abin.send('Hello Brad', brad);
abin.send('hello brad you are the best dev ever', brad);
brad.send('hello everyone')