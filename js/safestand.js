
/* MIT Licensed snippet from StackOverflow
 * http://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
 */
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}

/* MIT Licensed snippet from StackOverflow
 * http://stackoverflow.com/questions/4825683/how-do-i-create-and-read-a-value-from-cookie
 */
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

/* MIT Licensed snippet from StackOverflow
 * http://stackoverflow.com/questions/4825683/how-do-i-create-and-read-a-value-from-cookie
 */
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function deleteCookie(c_name) {
    createCookie(c_name, "", -1);
}

function createUserCookie(username) {
    /* not yet implemented */
    return null;
}

function createNewUserCookie(username) {
    createCookie ("username", username, 1);
    createCookie ("survey_required", "1", 1);
    return null;
}

function getUsername() {
    var username = getCookie (username);
    if (username === "")
        return null;
    return username;
}

function fillUSernames() {
    var username = getUsername();
    if (username == null) {
        return null;
    }
    var elements = document.getElementsByClassname("username");
    elements.forEach(function(element) {
        element.innerHTML = username;
    });
}

var path = window.location.pathname;
if (path..substring(0,8) === "/profile" && getUsername() == null)
{
    window.url.pathname = "/index.html";
}