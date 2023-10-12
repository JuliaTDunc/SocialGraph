// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++;
    let userID = this.currentID
    this.users[userID] = {"id" : userID, "name": name};
    this.follows[userID] = new Set();
    return userID;
  }

  getUser(userID) {
      return this.users[userID] || null;
  }

  follow(userID1, userID2) {
    if(this.users[userID1] && this.users[userID2]){
    this.follows[userID1].add(userID2);
    return true;
    }
    else{
      return false;
    }
  }

  getFollows(userID) {
    return this.follows[userID];
  }

  getFollowers(userID) {
    // Your code here
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;