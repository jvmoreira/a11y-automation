const StaticSiteJson = require('broccoli-static-site-json');

const contentsJson = new StaticSiteJson('criterias', {
  contentFolder: 'app/criterias',
  collate: true,
  attributes: ['title', 'tags', 'lintingExists', 'testingExists', 'devMustAuthor', 'manualTest'],
});

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeForPublic() {
    return contentsJson;
  }
};