var fs = require("fs");
var yaml = require("js-yaml")
var path = require("path")

profile = yaml.safeLoad(fs.readFileSync("./profile.yml", "utf8"));

var message = profile.name + " is " + profile.age + " years old. And " +
  "likes the following movies: " + profile.movies.join(", ");

fs.writeFileSync(path.join(".", "profiles", "jane-jones.txt"), message, "utf8");
