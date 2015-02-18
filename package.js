var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-menu',
  summary : 'Semantic UI - Menu (official): Single component release of menu',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Menu.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
