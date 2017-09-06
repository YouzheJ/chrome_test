console.log('start to content script');

// var subject = $('#subject').val();
// console.log(subject)
// $('#subject').val(subject.replace('#2017', ''));
// $('#subject').trigger('change');

function FillData() {
  this.init = function() {

  }
  this.getZWDData = function() {

  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request, sender, sendResponse)
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension, fill: " + request.fill);
    if (request.fill === true) {
      sendResponse({status: 1, msg: "fill success", data: ZWDDATA});
    }else {
      sendResponse({status: 0, msg: "not fill"}); // snub them.
    }
  }
);
