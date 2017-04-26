var isPublic = typeof window != "undefined";

(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   (isPublic)? '@angular' : 'node_modules/@angular',
    '@angular/material':          (isPublic)? '@angular/material' : 'node_modules/@angular/material',
    '@angular/platform-browser/animations':          (isPublic)? '@angular/platform-browser/animations' : 'node_modules/@angular/platform-browser/animations',
    '@angular/animations':  (isPublic)? '@angular/animations' : 'node_modules/@angular/animations',
    '@angular/animations/browser':  (isPublic)? '@angular/animations/browser' : 'node_modules/@angular/animations/browser',
    'rxjs':                       (isPublic)? 'rxjs' : 'node_modules/rxjs',
    'lodash':                     (isPublic)? 'lodash': 'node_modules/lodash'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { main: 'bundles/Rx.js', defaultExtension: 'js' },
    'lodash':                     { main: 'index.js', defaultExtension: 'js' },
    '@angular/material':          { main: 'material.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser/animations':  { main: '../bundles/platform-browser-animations.umd.js', defaultExtension: 'js' },
    '@angular/animations':            { main: 'bundles/animations.umd.js', defaultExtension: 'js' },
    '@angular/animations/browser': { main: '../bundles/animations-browser.umd.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
	   packages['@angular/'+pkgName] = {
       main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'
	   };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
