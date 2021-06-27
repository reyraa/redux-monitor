// Add a listener for data comming from content.js
browser.runtime.onMessage.addListener((message, sender, handler) => {


    if (message.type == 'init' && message.direction == 'POP->BG') {


        browser.tabs.query(
            { currentWindow: true, active: true },
            (tabs) => {
                browser.tabs.sendMessage(
                    tabs[0].id,
                    {
                        type: 'init',
                        direction: 'BG->CNT',
                    },
                );
            }
       );

    }
});
