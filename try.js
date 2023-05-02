var name = "";
// Making an Ajax call here, i.e., sendGetRequest
$ajaxUtils.sendGetRequest("someURL", function (request) {
  name = "Coursera";
});

document.querySelector("#content").innerHTML = name;