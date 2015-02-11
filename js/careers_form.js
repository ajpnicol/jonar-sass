$(function() {

  var form = document.forms.namedItem("career-form");
  form.addEventListener('submit', function(ev) {

    var
      oOutput = document.getElementById("output"),
      oData = new FormData(document.forms.namedItem("fileinfo"));

    oData.append("CustomField", "This is some extra data");

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "upload.php", true);
    oReq.onload = function(oEvent) {
      if (oReq.status === 200) {
        oOutput.innerHTML = "Uploaded!";
      } else {
        oOutput.innerHTML = "Error " + oReq.status + " occurred uploading your file.<br \/>";
      }
    };

    oReq.send(oData);
    ev.preventDefault();
  }, false);

});