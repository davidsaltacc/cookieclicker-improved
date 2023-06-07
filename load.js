scriptElement = document.createElement("script");

document.body.appendChild(scriptElement); 

requestObject = new Request("URL");
fetch(requestObject).then((response) => response.text()).then((text) => {scriptElement.innerHTML = text});
