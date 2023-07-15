chrome.runtime.onMessage.addListener(function (message, sender, response) {
    console.log(message);

        (async () => {
            const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
            console.log(tab);
            let redir = "http://localhost:3000";
            if(message.clicked == "Cart")
            {
                redir = redir + "/cart"; 
            }
            const response = await chrome.tabs.sendMessage(tab.id, {link: redir});
            // do something with response here, not outside the function
            console.log(response)
          })();
    
})

