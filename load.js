scriptElement = document.createElement("script");

document.body.appendChild(scriptElement); 

requestObject = new Request("https://raw.githubusercontent.com/davidsaltacc/cookieclicker-improved/main/main.js");
fetch(requestObject).then((response) => response.text()).then((text) => {scriptElement.innerHTML = text});
