let capthachecked = false;
function beforeSubmit(event) {
  if (capthachecked) {
    let inputDate = document.querySelector(".inputDate");
    let outputDate = document.querySelector(".outputDate");
    console.log("inputDate Value", inputDate.value);
    let formatedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formatedDate;
  } else {
    alert("Please check the reCAPTCHA box before submitting the lead");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}

function capthchasuccess() {
  capthachecked = true;
}
setInterval(timestamp, 500);
