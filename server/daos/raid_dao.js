

function  getWorldProgress(characterId = 4) {

    // random data
    return new Promise((resolve) => {
      resolve ([
        {id:1,title:'Castle Nathria', modes:[{mode:'NM',bosses:  [ {id:1,name:'Roh-kalo',killed:5446434}]}]}
  
      ]);
    });
  }
  
  module.exports = {getWorldProgress}