// Listen for the events comming from the host website.
const db = {
    frames: [],
    state: null,
};

// Listen to events comming from the host website / devtools middleware
document.addEventListener('SafariReduxDevToolsExtension', function (e) {

    if (e.detail.frame && e.detail.state) {
        db.frames.push(e.detail.frame);
        db.state = e.detail.state;
    }


    // Send a single frame from content js
    browser.runtime.sendMessage({
        type: 'frame',
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
