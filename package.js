
Package.describe({
  name    : 'semantic:ui-menu',
  summary : 'Semantic UI - Menu: Single component release',
  version : '2.0.8',
  git     : 'git://github.com/Semantic-Org/UI-Menu.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'menu.css'
  ], 'client');
});
