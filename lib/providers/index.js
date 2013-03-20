var providers = {
    'linux': require('./linux'),
    'mac': require('./mac'),
    'win': require('./win'),
    'other': require('./other')
};

module.exports = function(sysinfo) {

    var provider = providers[sysinfo.OS];
    if(provider) {
        return provider(sysinfo);
    } else {
        return providers['other'];
    }
}