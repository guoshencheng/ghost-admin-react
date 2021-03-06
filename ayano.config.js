var packageJson = require('./package.json');
var ghostConfig = require('./ghost.config');

module.exports = {
  defineValue: JSON.stringify({
    ghost: ghostConfig
  }),
  resourcePrefix: `https://cdn.xxx.xxx/assets/${packageJson.name}/`,
  upload: {
    qiniu: {
      accessKey: '',
      secretKey: '',
      bucket: '<bucket>',
      private: false,
      prefix: `/assets/${packageJson.name}/`
    }
  },
  publish: {
    type: '1',
    server: 'http://dev.webappserver.xxx',
    appId: '<your app id>',
    htmlPath: './index.html',
    resourceFile: './resources.json',
    env_production: {
      server: 'http://pro.webappserver.xxx'
    }
  }
}
