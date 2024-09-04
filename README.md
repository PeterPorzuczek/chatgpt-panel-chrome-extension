
# ChatGPT Panel Chrome Extension

## Overview

This Chrome extension integrates ChatGPT directly into your browser's side panel, allowing users to interact with ChatGPT seamlessly while browsing the web. The extension makes it convenient to access ChatGPT without opening a new tab or navigating away from the current page.

## Features

- **Side Panel Integration:** ChatGPT is accessible from the browser's side panel.
- **Session Authentication:** The extension checks the user's authentication status with ChatGPT and prompts login if necessary.
- **Customizable Chat Frame:** Once authenticated, a chat frame is rendered inside the panel for easy access to ChatGPT.
- **Header Modifications:** Automatically removes content security policy and frame options from requests to ensure ChatGPT functions properly in the panel.

## Installation

1. Clone or download the project files.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the directory containing the extension files.
5. The extension will now appear in the Chrome extensions list and can be accessed from the toolbar.

## Permissions

- **sidePanel:** Allows the extension to add content to the browser's side panel.
- **declarativeNetRequest & declarativeNetRequestWithHostAccess:** Used to modify the headers of the network requests to ensure the embedded ChatGPT interface works smoothly.

## How It Works

1. When the extension is loaded, the side panel becomes available, showing either the ChatGPT login prompt or the chat interface.
2. The `popup.js` file checks the user's session status and handles rendering the appropriate content inside the side panel.
3. If the user is authenticated, an iframe displaying ChatGPT is shown.
4. The extension modifies specific request headers to prevent `content-security-policy` and `x-frame-options` from blocking the integration.

## Troubleshooting

- **Unauthorized or Cloudflare Error:** Ensure you are logged in to ChatGPT and have passed any security checks.
- **Error fetching session:** This may occur if there is an issue with network connectivity. Try refreshing the panel or reloading the extension.

## License

This project is licensed under the MIT License.
