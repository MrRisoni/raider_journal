const Sequelize = require('sequelize');

const dbname = process.env.DB_NAME || 'raider_db';

const user = process.env.MMO_DB_USER || 'root';
const passwd = process.env.MMO_DB_PASSWD || '';
const host = process.env.DB_HOST || '';

const sequelize = new Sequelize(dbname, user, passwd, {
    host: host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: true
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const toonsMdl = sequelize.define('toons', {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            field: 'id',
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.CHAR,
            field: 'name'
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);

const raidsMdl = sequelize.define('raids', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.CHAR,
        field: 'title'
    }
},
{
    timestamps: false,
    freezeTableName: true
}
);


const difficultyMdl = sequelize.define('difficulties', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
            type: Sequelize.CHAR,
            field: 'title'
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);


const raidProgressMdl = sequelize.define('raid_progress', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
    },
    bossId: {
            type: Sequelize.INTEGER.UNSIGNED,
            field: 'boss_id'
        },
        toonId: {
            type: Sequelize.INTEGER.UNSIGNED,
            field: 'toon_id'
        },
        difficultyId: {
            type: Sequelize.CHAR,
            field: 'difficulty_id'
        },

    },
    {
        timestamps: false,
        freezeTableName: true
    }
);





module.exports = {
    dbObj: sequelize,
    toonsMdl,
    raidsMdl,
    raidProgressMdl
};


