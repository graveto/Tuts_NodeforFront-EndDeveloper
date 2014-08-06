var fs = require("fs");
var path = require("path");
var yaml = require("js-yaml");

fs.readFile("./profile.yml", "utf8", function(err, file) {
  if(err) {
    console.error(err);
    return;
  }
  var profile = yaml.safeLoad(file);
  var message = profile.name + " is " + profile.age + " years old and likes "
      message += "the following movies: " + profile.movies + ".";
  filePath = path.join(".", "profiles", "an-jones.txt");

  fs.writeFile(filePath, message, function(err) {
    if(err) {
      console.error(err);
      return;
    }
    console.log("Profile for " + profile.name + " was saved to " 
                + filePath + ".")
  });
});
