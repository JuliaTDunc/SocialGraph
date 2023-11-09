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
    let followers = new Set();
    for(let id in this.follows) {
      let currSet = this.follows[id];
      if(currSet.has(userID)) {
        followers.add(parseInt(id))
      }
    }
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    let res = [];
    let queue = [[userID]];
    let visited = new Set();
    visited.add(userID);

    while(queue.length > 0) {
      let currPath = queue.shift();
      let curr = currPath[currPath.length-1];
     
      if(currPath.length > degrees + 2) break;
      if(currPath.length > 2) res.push(curr);
      
      for(let f of this.follows[curr]) {
        if(!visited.has(f)) {
          visited.add(f);
          queue.push([...currPath, f]);
        }
      }
    }
    return res
  }
}

module.exports = SocialNetwork;