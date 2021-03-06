/*globals module:true */
module.exports = function(grunt) {
    'use strict';
    grunt.config('watch', {
        site : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'app/**/*.js',
                'app/**/*.html',
                '!app/vendor/**'
            ],
            tasks : [
                'jshint'
            ]
        },
        tests : {
            options : {
                // Start a live reload server on the default port: 35729
                livereload : true
            },
            files : [
                'tests/**/*.js',
            ],
            tasks : [
                'jshint'
            ]
        }
    });
};