const database = require('./../models');
const { QueryTypes } = require('sequelize');



function  getRaidProgress(characterId = 4) {


 let q = " SELECT r.title AS raidName,d.title AS diffTitle,b.name AS bossName, "+
     " COUNT(rp.id) AS totalKilss  "+
     "  FROM raids r JOIN bosses b ON b.raid_id = r.id  "+
     "  JOIN raid_progress rp ON rp.boss_id = b.id  "+
     "  JOIN difficulties d ON rp.difficulty_id = d.id  "+
     "  WHERE rp.toon_id =1  "+
     "  GROUP BY rp.boss_id,rp.difficulty_id "+
     " ORDER BY r.season_id ASC,b.name ASC";

    return database.dbObj.query(q, {
        type: QueryTypes.SELECT
      });
}

function getTimedUpTo5(toonId = 1)  {
   const q = " SELECT mode,COUNT(id) AS total FROM `dungeon_runs` " +
   " WHERE in_time =1 AND lvl <=5 " +
   " AND toon_id  =1  " +
   " GROUP BY mode ";

   return database.dbObj.query(q, {
    type: QueryTypes.SELECT
  });
}

function getTimed5To10(toonId = 1)  {
  const q = " SELECT mode,COUNT(id) AS total FROM `dungeon_runs` " +
  " WHERE in_time =1 AND lvl <=10 AND lvl >5 " +
  " AND toon_id  =1  " +
  " GROUP BY mode ";

  return database.dbObj.query(q, {
   type: QueryTypes.SELECT
 });
}

function getTimed10To15(toonId = 1)  {
  const q = " SELECT mode,COUNT(id) AS total FROM `dungeon_runs` " +
  " WHERE in_time =1 AND lvl <=15 AND lvl >10 " +
  " AND toon_id  =1  " +
  " GROUP BY mode ";

  return database.dbObj.query(q, {
   type: QueryTypes.SELECT
 });
}

function getTimedOver15(toonId = 1)  {
  const q = " SELECT mode,COUNT(id) AS total FROM `dungeon_runs` " +
  " WHERE in_time =1 AND  lvl >15 " +
  " AND toon_id  =1  " +
  " GROUP BY mode ";

  return database.dbObj.query(q, {
   type: QueryTypes.SELECT
 });
}

function getTimed(toon_id =1) {
  const q = " SELECT mode,COUNT(id) AS total FROM `dungeon_runs` " +
  " WHERE in_time =1 " +
  " AND toon_id  =1  " +
  " GROUP BY mode ";

  return database.dbObj.query(q, {
   type: QueryTypes.SELECT
 });
}

function getTimedPerSpec(toon_id =1) {

  const q = "  SELECT s.title,dr.mode,COUNT(dr.id) AS total FROM `dungeon_runs`  dr "+
   " JOIN specs s ON s.id = dr.spec_id "+
   " WHERE dr.in_time =1  "+
   " AND dr.toon_id  =1  "+
   " GROUP BY dr.mode,dr.spec_id ";
   
   return database.dbObj.query(q, {
      type: QueryTypes.SELECT
    });
}

module.exports = {getRaidProgress,getTimedUpTo5,
  getTimed5To10,getTimed10To15,getTimedOver15,getTimed,getTimedPerSpec}