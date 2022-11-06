var applications = ['unique1','unique2','unique3','unique4','unique31']//,'unique24','unique53','unique74']

function enableOnClick(){
    for(const x of applications){
        currentApp = document.getElementById(x);
        currentApp.onclick = function(){updateChart(x)};
}
};
function createMenuButtons(){
    for(const x of applications){  
        newDiv = document.createElement("div");
        newButton = document.createElement("button");
        newButton.setAttribute("id",x);
        newButton.setAttribute("class","application-button");
        newDiv.appendChild(newButton);
        currentDiv = document.getElementById("Application-Buttons");
        currentDiv.appendChild(newDiv);
    };
    enableOnClick();
};

function geAppButtonList(){ 
    let appElements = document.getElementsByClassName("application-button")
    let appList = []
    for (let i=0; i < appElements.length; i++) {
        appList.push(appElements[i].id)
    };
    return appList
};

function updateChart(elementID) {
    console.log(elementID," Was clicked.")
    let appList = geAppButtonList()

    appList.forEach(element => { //swap for appList
        if (element == elementID){
            document.getElementById(element).style.backgroundColor = "rgb(233, 226, 210)";
        }
        else {
            document.getElementById(element).style.backgroundColor = "burlywood";
        };
    });
    generateContent()
};
function generateContent() {
    currentDiv = document.getElementsByClassName("plotly-content")[0];
    newDiv = document.createElement("div");
    newDiv.setAttribute("id","gd");
    currentDiv.appendChild(newDiv);  
    Plotly.newPlot("gd", /* JSON object */ {
        "data": [{ "y": [1, 2, 3] ,"x":[4,5,6]}],
        "config": {"responsive": true}
    })          
};