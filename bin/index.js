const fsExtra = require('fs-extra');
const dir = 'temp';
const dirPub = 'temp/pubs.json';
let contenuJson = [
    {
        "name": "Arawak",
        "owner": {
            "firstName": "Nicolas",
            "lastName": "Hodicq",
            "mail": "nhodicq@bewizyu.com"
        },
        "openDays": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "openHours": {
            "start": 10,
            "end": 1
        },
        "beers": [
            {
                "type": "Blonde",
                "name": "Triple Karmeliet"
            }
        ]
    },
    {
        "name": "autre",
        "owner": {
            "firstName": "Nicolas",
            "lastName": "Hodicq",
            "mail": "nhodicq@bewizyu.com"
        },
        "openDays": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "openHours": {
            "start": 10,
            "end": 1
        },
        "beers": [
            {
                "type": "Blonde",
                "name": "Triple Karmeliet"
            }
        ]
    }
];
fsExtra.pathExists(dir)
.then(exists => {
    if(exists){
        return fsExtra.remove(dir);
    }
    return;
}).then(()=>{
    return fsExtra.ensureDir(dir);
}).then(()=>{
   return fsExtra.writeJson(dirPub, contenuJson)
}).then(()=>{
fsExtra.watchFile(dirPub, () => {
    console.log("le ficher a été modifié");
  });
})
.catch(err => {
  console.error(err)
})