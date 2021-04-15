function MemberFactory () {
  this.createMember = function(name, type) {
    let member;

    if(type === 'simple'){
      member = new SimpleMembership(name);
    } else if (type === 'standerd'){
      member = new StanderdMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name); 
    }
    member.type = type;
    
    member.define = function () {
      console.log(`${this.name}(${this.type}):${this.cost}`);
    }

    return member ;
  }
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = '$5';
}

const StanderdMembership = function (name) {
  this.name = name;
  this.cost = '$5';
}

const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$5';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Jhon Doe', 'simple'));

console.log(members);

members.forEach(function(member){
  member.define();
})