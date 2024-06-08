function fixENumber(x) {
    if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10,e-1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
    } else {
        var e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10,e);
            x += (new Array(e+1)).join('0');
        }
    }
    return x;
}
if (true) {
    if (document.getElementById("bettermenu") !== null) {
        document.getElementById("bettermenu").parentNode.removeChild(document.getElementById("bettermenu"));
    }
    var bigcookie = document.getElementById("bigCookie");
    var cookieanchor = bigcookie.parentElement;
    var menu = document.createElement("div");
    menu.style = "z-index:100; display: none;";
    menu.id = "bettermenu";
    var woodenseparator1 = document.createElement("div");
    woodenseparator1.innerHTML = `<div style="background:url(img/panelHorizontal.png?v=2) repeat-x top;background:url(img/panelGradientLeft.png) no-repeat top left,url(img/panelGradientRight.png) no-repeat top right,url(img/panelHorizontal.png?v=2) repeat-x;"><p style="opacity:0">hi im here so the wood thingy shows up</p></div>`;
    var woodenseparator2 = document.createElement("div");
    woodenseparator2.innerHTML = `<div style="background:url(img/panelHorizontal.png?v=2) repeat-x top;background:url(img/panelGradientLeft.png) no-repeat top left,url(img/panelGradientRight.png) no-repeat top right,url(img/panelHorizontal.png?v=2) repeat-x;"><p style="opacity:0">hi im here so the wood thingy shows up</p></div>`;
    woodenseparator1.style.display = "none";
    woodenseparator2.style.display = "none";
    var title = document.createElement("div");
    title.style.position = "relative";
    title.style.width = "284px";
    title.style.background = "url(img/blackGradientSmallTop.png) repeat-x top";
    title.id = "BetterCookieClickerTitle";
    title.className = "inset title zoneTitle";
    title.innerHTML = "BetterCookieClicker";
    title.style.display = "none";
    var bgacbutton = document.createElement("button");
    bgacbutton.id = "bgacbutton";
    bgacbutton.innerHTML = "Autoclicker: Off";
    bgacbutton.setAttribute("onClick", "bgacpressed()");
    var cookieanchor = document.getElementById('cookieAnchor');
    setInterval(function() {
        if (bgacbutton.innerHTML == 'Autoclicker: On') {
            cookierect = cookieanchor.getBoundingClientRect();
            bodyrect = document.body.getBoundingClientRect();
            offsetX = cookierect.left - bodyrect.left;
            offsetY = cookierect.top - bodyrect.top;
            Game.mouseX = offsetX;
            Game.mouseY = offsetY;
            Game.ClickCookie();
        }
    }, 0.1);
    function bgacpressed() {
        if (bgacbutton.innerHTML == 'Autoclicker: Off') {
            bgacbutton.innerHTML = 'Autoclicker: On';
        } else {
            bgacbutton.innerHTML = 'Autoclicker: Off';
        }
    }
    bgacpressed();
    var acgold = document.createElement("button");
    acgold.id = "acgold";
    acgold.innerHTML = "Auto Click Golden Cookies: Off";
    acgold.setAttribute("onClick", "acgoldpressed()");
    setInterval(function() {
        if (acgold.innerHTML == 'Auto Click Golden Cookies: On') {
            Game.shimmers.forEach(function(shimmer) {
                if (shimmer.type == 'golden' && shimmer.wrath == 0) {
                    shimmer.pop();
                }
            });
        }
    }, 500);
    function acgoldpressed() {
        if (acgold.innerHTML == 'Auto Click Golden Cookies: Off') {
            acgold.innerHTML = 'Auto Click Golden Cookies: On';
        } else {
            acgold.innerHTML = 'Auto Click Golden Cookies: Off';
        }
    }
    acgoldpressed();
    var acreindeer = document.createElement("button");
    acreindeer.id = "acreindeer";
    acreindeer.innerHTML = "Auto Click Reindeers: Off";
    acreindeer.setAttribute("onClick", "acreindeerpressed()");
    setInterval(function() {
        if (acreindeer.innerHTML == 'Auto Click Reindeers: On') {
            Game.shimmers.forEach(function(shimmer) {
                if (shimmer.type == 'reindeer') {
                    shimmer.pop();
                }
            });
        }
    }, 500);
    function acreindeerpressed() {
        if (acreindeer.innerHTML == 'Auto Click Reindeers: Off') {
            acreindeer.innerHTML = 'Auto Click Reindeers: On';
        } else {
            acreindeer.innerHTML = 'Auto Click Reindeers: Off';
        }
    }
    acreindeerpressed();
    var hidetopbar = document.createElement("button");
    hidetopbar.id = "hidetopbar";
    hidetopbar.innerHTML = "Hide Top Bar: On";
    hidetopbar.setAttribute("onClick", "hidetopbarbtnpressed()");
    document.getElementById('topBar').style.display = 'none'; 
    document.getElementById('game').style.top = '0px';
    document.getElementById('backgroundLeftCanvas').height += 32;
    function hidetopbarbtnpressed() {
        if (hidetopbar.innerHTML == 'Hide Top Bar: Off') {
            hidetopbar.innerHTML = 'Hide Top Bar: On'; 
            document.getElementById('topBar').style.display = 'none'; 
            document.getElementById('game').style.top = '0px';
            document.getElementById('backgroundLeftCanvas').height += 32;
        } else {
            hidetopbar.innerHTML = 'Hide Top Bar: Off'; 
            document.getElementById('topBar').style.display = 'block'; 
            document.getElementById('game').style.top = '32px';
            document.getElementById('backgroundLeftCanvas').height -= 32;
        }
    }
    var hideadsbtn = document.createElement("button");
    hideadsbtn.id = "hideadsbtn";
    hideadsbtn.innerHTML = "Hide Ads: On";
    hideadsbtn.setAttribute("onClick", "hideadpressed()");
    document.getElementById('support').style.display = 'none'; 
    function hideadpressed() {
        if (hideadsbtn.innerHTML == 'Hide Ads: Off') {
            hideadsbtn.innerHTML = 'Hide Ads: On'; 
            document.getElementById('support').style.display = 'none';
        } else {
            hideadsbtn.innerHTML = 'Hide Ads: Off'; 
            document.getElementById('support').style.display = 'block';
        }
    }
    var autobuyupgrades = document.createElement("button");
    autobuyupgrades.id = "autobuyupgrades";
    autobuyupgrades.innerHTML = "Auto Buy Cheapest Upgrade: Off";
    autobuyupgrades.setAttribute("onClick", "autobuypressed()");
    setInterval(function () {
        if (autobuyupgrades.innerHTML == 'Auto Buy Cheapest Upgrade: On') {
            var id = "";
            if (document.getElementById('upgrades').firstChild.id == "storeBuyAllButton") {
                id = document.getElementById('upgrades').firstChild.getAttribute('onclick');
            } else {
                id = document.getElementById('upgrades').children[1].getAttribute('onclick');
            }
            id = id.replace('Game.UpgradesById[', '');
            id = id.replace('].click(event);', '');
            Game.UpgradesById[id].buy()
        }
    }, 1000);
    function autobuypressed() {
        if (autobuyupgrades.innerHTML == 'Auto Buy Cheapest Upgrade: Off') {
            autobuyupgrades.innerHTML = 'Auto Buy Cheapest Upgrade: On';
        } else { 
            autobuyupgrades.innerHTML = 'Auto Buy Cheapest Upgrade: Off';
        }
    }
    var muteclicksnd = document.createElement("button");
    muteclicksnd.id = "muteclicksnd";
    muteclicksnd.innerHTML = "Mute Click Sound: Off";
    muteclicksnd.setAttribute("onClick", "muteclicksound()");
    function muteclicksound() {
        if (muteclicksnd.innerHTML == 'Mute Click Sound: Off') {
            muteclicksnd.innerHTML = 'Mute Click Sound: On'; 
            Game.playCookieClickSound = function() {};
        } else {
            muteclicksnd.innerHTML = 'Mute Click Sound: Off'; 
            Game.playCookieClickSound = function() {
                if (Game.prefs.cookiesound) {
                    PlaySound('snd/clickb' + (Game.cookieClickSound) + '.mp3', 0.5);
                } else { 
                    PlaySound('snd/click' + (Game.cookieClickSound) + '.mp3', 0.5);
                }
                Game.cookieClickSound += Math.floor(Math.random() * 4) + 1;
                if (Game.cookieClickSound > 7) {
                    Game.cookieClickSound -= 7;
                }
            }
        }
    }
    var custombuybulkdiv = document.createElement("div");
    var custombuybulkinput = document.createElement("input");
    custombuybulkinput.type = "search";
    custombuybulkinput.id = "custombuybulk";
    custombuybulkinput.placeholder = "Custom Building Amount";
    var custombuybulkbtn = document.createElement("button");
    custombuybulkbtn.id = "custombuybulkbtn";
    custombuybulkbtn.setAttribute("onclick", "\
    Game.buyBulk = parseInt(document.getElementById('custombuybulk').value); \
    Game.RefreshStore();\
    ");
    custombuybulkbtn.innerHTML = "Ok";
    custombuybulkdiv.appendChild(custombuybulkinput);
    custombuybulkdiv.appendChild(custombuybulkbtn);
    var acwrink = document.createElement("button");
    acwrink.id = "acwrink";
    acwrink.innerHTML = "Auto Click Wrinklers: Off";
    acwrink.setAttribute("onClick", "acwrinkpressed()");
    setInterval(function() {
        if (acwrink.innerHTML == 'Auto Click Wrinklers: On') {
            Game.wrinklers.forEach(function (wrink) {
                if (wrink.close == 1) {
                    wrink.hp -= 1;
                }
            });
        }
    }, 300);
    function acwrinkpressed() {
        if (acwrink.innerHTML == 'Auto Click Wrinklers: Off') {
            acwrink.innerHTML = 'Auto Click Wrinklers: On'; 
        } else {
            acwrink.innerHTML = 'Auto Click Wrinklers: Off';
        }
    }
    var donttimeout = document.createElement("button");
    donttimeout.id = "donttimeout";
    donttimeout.innerHTML = "Dont Time Out: On";
    donttimeout.setAttribute("onClick", "donttimeoutpressed()");
    function donttimeoutpressed() {
        if (donttimeout.innerHTML == 'Dont Time Out: Off') {
            donttimeout.innerHTML = 'Dont Time Out: On'; 
            Game.prefs['timeout'] = 0
        } else {
            donttimeout.innerHTML = 'Dont Time Out: Off'; 
            Game.prefs['timeout'] = 1
        }
    }
    donttimeoutpressed()
    Game.prefs['timeout'] = 0;
    document.getElementById("sectionRight").prepend(woodenseparator2);
    document.getElementById("sectionRight").prepend(menu);
    document.getElementById("sectionRight").prepend(woodenseparator1);
    document.getElementById("sectionRight").prepend(title);
    [bgacbutton, acgold, acreindeer, hidetopbar, hideadsbtn, autobuyupgrades, muteclicksnd, custombuybulkbtn, custombuybulkinput, acwrink, donttimeout]
    .forEach(function(btn) {
        btn.style.color = "#F2F2F2";
        btn.style.background = "#333333";
        btn.style.outline = "none";
        btn.style.borderStyle = "none none none solid";
        btn.style.borderWidth = "4px";
        btn.style.borderColor = "#6B0F8A";
        btn.style.padding = "3px";
        menu.appendChild(btn)
    });
    bgacbutton.style.display = "block";
    acgold.style.display = "block";
    acreindeer.style.display = "block";
    hidetopbar.style.display = "block";
    hideadsbtn.style.display = "block";
    autobuyupgrades.style.display = "block";
    muteclicksnd.style.display = "block";
    custombuybulkdiv.style.display = "block";
    acwrink.style.display = "block";
    var wwoodenseparator2 = document.createElement("div");
    wwoodenseparator2.innerHTML = `<div style="background:url(img/panelHorizontal.png?v=2) repeat-x top;background:url(img/panelGradientLeft.png) no-repeat top left,url(img/panelGradientRight.png) no-repeat top right,url(img/panelHorizontal.png?v=2) repeat-x;"><p style="opacity:0">hi im here so the wood thingy shows up</p></div>`;
    var wwoodenseparator1 = document.createElement("div");
    wwoodenseparator1.innerHTML = `<div style="background:url(img/panelHorizontal.png?v=2) repeat-x top;background:url(img/panelGradientLeft.png) no-repeat top left,url(img/panelGradientRight.png) no-repeat top right,url(img/panelHorizontal.png?v=2) repeat-x;"><p style="opacity:0">hi im here so the wood thingy shows up</p></div>`;
    var betterinfo = document.createElement("div");
    menu.appendChild(wwoodenseparator1);
    menu.appendChild(betterinfo);
    betterinfo.style.position = "relative";
    betterinfo.style.width = "100%";
    betterinfo.style.background = "url(img/blackGradientSmallTop.png) repeat-x top";
    betterinfo.style.margin = "0px 0px 20px 0px;";
    betterinfo.id = "BetterInfoTitle";
    betterinfo.className = "inset title zoneTitle";
    betterinfo.innerHTML = "Info";
    var researchtime = document.createElement("p");
    researchtime.style.color = "#F2F2F2";
    researchtime.style.background = "#333333";
    researchtime.style.outline = "none";
    researchtime.style.borderStyle = "none none none solid";
    researchtime.style.borderWidth = "4px";
    researchtime.style.borderColor = "#6B0F8A";
    researchtime.style.padding = "3px";
    researchtime.style.display = "block";
    researchtime.style.fontFamily = "";
    researchtime.style.fontSize = "smaller";
    researchtime.id = "researchtime";
    menu.appendChild(wwoodenseparator2);
    menu.appendChild(researchtime);
    setInterval(function() {
        researchtime.innerHTML = 'Research Time Left: ' + Math.floor(Game.researchT / (Game.fps * 60)) + ' Minutes';
    }, 1000);
    document.addEventListener("keydown", function (event) {
        if (event.key == "u") {
            if (menu.style.display == "none") {
                woodenseparator1.style.display = "block";
                woodenseparator2.style.display = "block";
                menu.style.display = "block";
                document.getElementById("BetterCookieClickerTitle").style.display = "block";
            } else {
                woodenseparator1.style.display = "none";
                woodenseparator2.style.display = "none";
                menu.style.display = "none";
                document.getElementById("BetterCookieClickerTitle").style.display = "none";
            }
        }
    });
}
