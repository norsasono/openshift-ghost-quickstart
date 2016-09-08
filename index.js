var path = require('path');
var ghost = require('ghost');

// temporary fix for https://github.com/TryGhost/Ghost/issues/7336
require('ghost/core/server/overrides');

ghost({
    config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
    ghostServer.start();
});
