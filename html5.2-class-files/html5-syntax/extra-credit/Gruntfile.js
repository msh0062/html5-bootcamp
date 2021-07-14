// @ts-ignore for webstorm
module.exports = function (grunt) {
    grunt.initConfig({
        htmllint: {
            intro: ["html5-intro/**/*.html"],
            syntax: ["html5-syntax/**/*.html"],
        },
    });

    grunt.loadNpmTasks("grunt-html");

    grunt.registerTask("default", ["htmllint"]);
};
