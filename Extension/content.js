console.log('Hello World');

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
                  window.location.href = message.link;

      sendResponse({farewell: "greeting"});

      }
);