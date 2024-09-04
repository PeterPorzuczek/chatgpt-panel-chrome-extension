chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        "id": 1,
        "priority": 1,
        "action": {
          "type": "modifyHeaders",
          "responseHeaders": [
            { "header": "content-security-policy", "operation": "remove" },
            { "header": "x-frame-options", "operation": "remove" }
          ]
        },
        "condition": {
          "urlFilter": "https://chatgpt.com/*",
          "resourceTypes": ["main_frame", "sub_frame"]
        }
      }
    ],
    removeRuleIds: [1]
  });
});

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error))

 