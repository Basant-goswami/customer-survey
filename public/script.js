function func() {
    var result = confirm("Do you want to submit your feedback?");
    if (result) {
        setTimeout(myURL, 1000);
        function myURL() {
            document.location.href = './thank.html';
        }
        return true
    }
    else {
        return false;
    }
}

function redirect() {
    var result = document.getElementById("result");
    result.innerHTML = "<b> The page will redirect to Welcome page after delay of 5 seconds"
    setTimeout(URL, 5000);
        function URL() {
            document.location.href = './index.html';
        }
}
