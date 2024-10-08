#!/bin/bash

# Remove previous compiled information
rm casa-courses.zip

# Install all node.js dependencies
npm install

# Build javascript and css files
npm run prod

# Create a zip file for the plugin
zip -r casa-courses.zip . -x ".eslintrc.js" -x ".stylelintrc" -x ".idea/*" -x "*.git*" -x "node_modules/*" -x "compile-plugin.sh" -x "vendor/bin/*" -x "vendor/nesbot/carbon/bin/*" -x ".github/*" -x ".distignore"
