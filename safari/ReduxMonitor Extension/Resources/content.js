// Listen for the events comming from the host website.
const db = {
    actions: [],
    state: null,
};

// Listen to events comming from the host website / devtools middleware
document.addEventListener('SafariReduxDevToolsExtension', function (e) {

    if (e.detail.action && e.detail.state) {
        db.actions.push(e.detail.action);
        db.state = e.detail.state;
    }


    // Send an instant action from content js
    browser.runtime.sendMessage({
        type: 'instant',
        direction: 'CNT->POP',
        data: e.detail
    });

}, false);


// Listen to messages from background js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {


    if (message.type === 'init' && message.direction === 'BG->CNT') {

        browser.runtime.sendMessage({
            type: 'init',
            direction: 'CNT->POP',
            data: db
        });

    }

});
