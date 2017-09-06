// ========================
/* 调试时使用 */
// chrome.tabs.executeScript(null, {file: "script/jquery-3.2.1.slim.min.js"});
chrome.tabs.executeScript(null, {file: "script/main.js"});
// ========================

console.log('popup start');

function sendOnekeyFill () {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log('tabs: ', tabs)
    chrome.tabs.sendMessage(tabs[0].id, {fill: true}, function(response) {
      console.log(response);
    });
  });
}

document.getElementById('onekey').addEventListener('click', sendOnekeyFill);