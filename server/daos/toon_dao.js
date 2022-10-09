

function  getRaidProgress(characterId = 4) {

  // random data
  return new Promise((resolve) => {
    resolve ([
      {id:1,title:'Castle Nathria',bosses:10, modes:[{mode:'NM',killed:4}]},
      {id:2,title:'Santum of Domination',bosses:10, modes:[{mode:'NM',killed:3}]},
      {id:3,title:'Sepulcher  of First Ones',bosses:11, modes:[{mode:'NM',killed:6}]}

    ]);
  });
}

function getTimedUpTo5(toonId = 1)  {
  const q = "  SELECT s.title,dr.mode,COUNT(dr.id) AS total FROM `dungeon_runs`  dr "+
  " JOIN specs s ON s.id = dr.spec_id "+
   " WHERE dr.in_time =1 AND dr.lvl <=5 " +
   "  AND dr.toon_id  =1  "+
   " GROUP BY dr.mode,dr.spec_id ";

   return database.dbObj.query(q, {
    type: QueryTypes.SELECT
  });
}

function getTimed5To10(toonId = 1)  {
  const q = "  SELECT s.title,dr.mode,COUNT(dr.id) AS total FROM `dungeon_runs`  dr "+
  " JOIN specs s ON s.id = dr.spec_id "+
    " WHERE dr.in_time =1 AND dr.lvl <=10 AND dr.lvl >5 " +
    " AND dr.toon_id  =1  "+
    " GROUP BY dr.mode,dr.spec_id ";

  return database.dbObj.query(q, {
   type: QueryTypes.SELECT
 });
}

function getTimed10To15(toonId = 1)  {
  const q = "  SELECT s.title,dr.mode,COUNT(dr.id) AS total FROM `dungeon_runs`  dr "+
  " JOIN specs s ON s.id = dr.spec_id "+
    " WHERE dr.in_time =1 AND dr.lvl <=15 AND dr.lvl >10 " +
    " AND dr.toon_id  =1  "+
    " GROUP BY dr.mode,dr.spec_id ";

  return database.dbObj.query(q, {
   type: QueryTypes.SELECT
 });
}

function getTimedOver15(toonId = 1)  {
  const q = "  SELECT s.title,dr.mode,COUNT(dr.id) AS total FROM `dungeon_runs`  dr "+
  " JOIN specs s ON s.id = dr.spec_id "+
  " WHERE dr.in_time =1 AND  dr.lvl >15 " +
  " AND dr.toon_id  =1  "+
  " GROUP BY dr.mode,dr.spec_id ";
  

  return database.dbObj.query(q, {
   type: QueryTypes.SELECT
 });
}

function getTimed(toon_id =1) {
  const q = "  SELECT s.title,dr.mode,COUNT(dr.id) AS total FROM `dungeon_runs`  dr "+
  " JOIN specs s ON s.id = dr.spec_id "+
  " WHERE dr.in_time =1  "+
  " AND dr.toon_id  =1  "+
  " GROUP BY dr.mode,dr.spec_id ";
  
  return database.dbObj.query(q, {
     type: QueryTypes.SELECT
   });

  return database.dbObj.query(q, {
   type: QueryTypes.SELECT
 });
}


module.exports = {getRaidProgress,getTimedUpTo5,
  getTimed5To10,getTimed10To15,getTimedOver15,getTimed}