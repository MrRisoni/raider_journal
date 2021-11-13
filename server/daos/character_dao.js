const dbObj = require('./../models');
const { QueryTypes } = require('sequelize');




function  getRaidProgress(characterId = 4) {
    await sequelize.query(```SELECT r.title AS raidName,d.title AS diffTitle,b.name AS bossName,
     COUNT(rp.id) AS totalKilss 
     FROM raids r JOIN bosses b ON b.raid_id = r.id 
     JOIN raid_progress rp ON rp.boss_id = b.id 
     JOIN difficulties d ON rp.difficulty_id = d.id 
     WHERE rp.toon_id =1 
     GROUP BY rp.boss_id,rp.difficulty_id
     ORDER BY r.season_id ASC,b.name ASC```, {
        type: QueryTypes.SELECT
      });
}


module.exports = {getRaidProgress}