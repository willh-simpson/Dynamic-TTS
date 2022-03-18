// const r = new snoowrap({
//     userAgent: 'dynamic tts',
//     clientId: 'd3eJD1-Na1mmQ9On_Z13VQ',
//     clientSecret: 'lMbGouAYBy5wTO2C8bjyAqqiqKCYSQ',
//     refreshToken: '43864152-vNRzhp9pvLRDmjtt8NCI2lxqz2Zy1w'
// });

// var activeTab = ;

function main() {
    // r.getSubmission('4j8p6d').expandReplies({limit: Infinity, depth: Infinity}).then(console.log);
}

// this isn't final, i may be changing this to use activeTab instead
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        document.getElementById("output").innerHTML = "on reddit";
    },
    { urls: ["*://*.reddit.com/*"] },
    []
);

window.onload = function() {
    main();
};