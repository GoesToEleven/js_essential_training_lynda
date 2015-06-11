function prepareEventHandlers() {
    document.querySelector("#frmContact").onsubmit = function () {
        // prevent a form from submitting if no email.
        if (document.querySelector("#email").value == "") {
            document.querySelector("#errorMessage").innerHTML = "Please provide at least an email address!";
            // to STOP the form from submitting
            return false;
        } else {
            // reset and allow the form to submit
            document.querySelector("#errorMessage").innerHTML = "";
            return true;
        }
    };
}