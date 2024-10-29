document.getElementById('battMgmt').addEventListener('click', displayBattMgmt);
document.getElementById('calcPage').addEventListener('click', displayCalcPage);
document.getElementById('safetyInfo').addEventListener('click', displaySafetyInfo);
document.getElementById('creditsPage').addEventListener('click', displayCreditsPage);
document.getElementById('modelsPage').addEventListener('click', displayModelsPage);

function displayBattMgmt (){
    let battMgmt = document.getElementById("battMgmtDisplay");
    battMgmt.style.setProperty("display", "flex");
    let calc = document.getElementById("calcPageDisplay");
    calc.style.setProperty("display", "none");
    let safety = document.getElementById("safetyDisplay");
    safety.style.setProperty("display", "none");
    let credPage = document.getElementById("credPageDisplay");
    credPage.style.setProperty("display", "none");
    let modelPage = document.getElementById("modelPageDisplay");
    modelPage.style.setProperty("display", "none");
}

function displayCalcPage(){
    let calc = document.getElementById("calcPageDisplay");
    calc.style.setProperty("display", "flex");
    let battMgmt = document.getElementById("battMgmtDisplay");
    battMgmt.style.setProperty("display", "none");
    let safety = document.getElementById("safetyDisplay");
    safety.style.setProperty("display", "none");
    let credPage = document.getElementById("credPageDisplay");
    credPage.style.setProperty("display", "none");
    let modelPage = document.getElementById("modelPageDisplay");
    modelPage.style.setProperty("display", "none");
}

function displaySafetyInfo(){
    let safety = document.getElementById("safetyDisplay");
    safety.style.setProperty("display", "flex");
    let battMgmt = document.getElementById("battMgmtDisplay");
    battMgmt.style.setProperty("display", "none");
    let calc = document.getElementById("calcPageDisplay");
    calc.style.setProperty("display", "none");
    let credPage = document.getElementById("credPageDisplay");
    credPage.style.setProperty("display", "none");
    let modelPage = document.getElementById("modelPageDisplay");
    modelPage.style.setProperty("display", "none");
}

function displayCreditsPage(){
    let credPage = document.getElementById("credPageDisplay");
    credPage.style.setProperty("display", "flex");
    let battMgmt = document.getElementById("battMgmtDisplay");
    battMgmt.style.setProperty("display", "none");
    let calc = document.getElementById("calcPageDisplay");
    calc.style.setProperty("display", "none");
    let safety = document.getElementById("safetyDisplay");
    safety.style.setProperty("display", "none");
    let modelPage = document.getElementById("modelPageDisplay");
    modelPage.style.setProperty("display", "none");
}

function displayModelsPage(){
    let modelPage = document.getElementById("modelPageDisplay");
    modelPage.style.setProperty("display", "flex");
    let battMgmt = document.getElementById("battMgmtDisplay");
    battMgmt.style.setProperty("display", "none");
    let calc = document.getElementById("calcPageDisplay");
    calc.style.setProperty("display", "none");
    let safety = document.getElementById("safetyDisplay");
    safety.style.setProperty("display", "none");
    let credPage = document.getElementById("credPageDisplay");
    credPage.style.setProperty("display", "none");
}