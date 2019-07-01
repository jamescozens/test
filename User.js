class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // class is a function
  alert(typeof User); // function
  
  // ...or, more precisely, the constructor method
  alert(User === User.prototype.constructor); // true
  
  // The methods are in User.prototype, e.g:
  alert(User.prototype.sayHi); // alert(this.name);
  
  // there are exactly two methods in the prototype
  alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi