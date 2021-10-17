/**
 * Extra config file, for Base and Globals
 */

module.exports = function createGlobalJson(answer) {
  let globalJsonConf = {
    baseurl: "https://mydomain",
    imgUrl: "https://thirdserver",
    dest: answer.name + "/" + answer.year + "/" + answer.project,
    port: "9001",
    // "cwd": answer.cwd ? ("'" + answer.cwd + "'") : "",
    upload: true,
  };

  return globalJsonConf;
};
