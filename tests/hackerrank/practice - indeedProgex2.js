const dbOps = () => {
    update('pf1', 'skills', 'Java');
    update('pf1', 'education', 'UT');
    update('pf2', 'workExperience', 'Indeed');
    update('pf1', 'skills', 'Java,Python');
    get('pf2', '1');
    get('pf1', '0');
    get('pf1', '2');
    get('pf1', '3');
    get('pf1', '4');
    get('pf3', '1');
    getField('pf1', '3', 'skills');
    getField('pf1', '3', 'education');
    getField('pf3', '1', 'skills');
};

let profiles = new Object(); // profile.version.attribute

function update(profileId, fieldName, fieldValue) {
    if (!profiles[profileId]) {
        profiles[profileId] = new Object();
        profiles[profileId]['version'] = 0;
    }
    profiles[profileId]['version']++;

    if (!profiles[profileId][fieldName]) {
        profiles[profileId][fieldName] = new Object();
    }
    profiles[profileId][fieldName][profiles[profileId]['version']] = fieldValue;
}

function get(profileId, version) {
    if (
        !profiles[profileId] ||
        version == 0 ||
        Number(version) > profiles[profileId]['version']
    )
        console.log('Invalid Request!');
    else {
        let keys = Object.keys(profiles[profileId]);
        keys.forEach((key) => {
            if (key != 'version') getField(profileId, version, key);
        });
    }
}

function getField(profileId, version, fieldName) {
    if (
        !profiles[profileId] ||
        version == 0 ||
        version > profiles[profileId][version]
    )
        console.log('Invalid Request!');
    else {
        while (!profiles[profileId][fieldName][version]) {
            version = (Number(version) - 1).toString();
        }
        console.log(profiles[profileId][fieldName][version]);
    }
}

dbOps();
// profiles[profileId][fieldName] = list of ({ version: xx, value: yy })
// this way, no need to copy the whole object in an update, just add another entity to the relevant field.
// dont we need to know the last version of a profileId? should we scan each field to see the highest version?:
// this time another field with int type instead of a list in profiles[profileId].
