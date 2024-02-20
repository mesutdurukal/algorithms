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
    let version;
    if (!profiles[profileId]) {
        profiles[profileId] = new Object();
        version = 1;
    } else {
        version = Object.keys(profiles[profileId]).length + 1;
    }

    profiles[profileId][version] = new Object();
    if (version != 0)
        profiles[profileId][version] = { ...profiles[profileId][version - 1] };
    profiles[profileId][version][fieldName] = fieldValue;
}

function get(profileId, version) {
    if (
        !profiles[profileId] ||
        version == 0 ||
        version > Object.keys(profiles[profileId]).length
    )
        console.log('Invalid Request!');
    else console.log(profiles[profileId][version]);
}

function getField(profileId, version, fieldName) {
    if (
        !profiles[profileId] ||
        version == 0 ||
        version > profiles[profileId].length - 1
    )
        console.log('Invalid Request!');
    else console.log(profiles[profileId][version][fieldName]);
}

dbOps();
// profiles[profileId][fieldName] = list of ({ version: xx, value: yy })
// this way, no need to copy the whole object in an update, just add another entity to the relevant field.
// dont we need to know the last version of a profileId? should we scan each field to see the highest version?:
// this time another field with int type instead of a list in profiles[profileId].
