const addressPrefix = 'https://chatgpt.com';

const fetchAuthSession = async () => {
  try {
    const response = await fetch(addressPrefix + '/api/auth/session');

    if (response.status === 403) {
      return {
        state: "cloudflare",
        message: 'Please login and pass the Cloudflare check at <a href="' + addressPrefix + '" target="_blank" rel="noreferrer">chatgpt.com</a>',
      };
    }

    const data = await response.json();
    if (!response.ok || !data.accessToken) {
      return {
        state: "unauthorized",
        message: 'Please login at <a href="' + addressPrefix + '" target="_blank" rel="noreferrer">chatgpt.com</a> first',
      };
    }

    return { state: "authorized" };
  } catch (error) {
    console.error("Error fetching session:", error);
    return { state: "error", message: "Error fetching session. Please try again later." };
  }
};

const renderChatFrame = (container) => {
  container.innerHTML = '<iframe scrolling="no" src="' + addressPrefix + '/chat" frameborder="0" style="width: 100%; height: 100vh;"></iframe>';
};

const renderMessage = (container, message) => {
  container.innerHTML = '<div class="extension-body"><div class="notice"><div>' + message + '</div></div></div>';
};

const initializeBar = async () => {
  const container = document.getElementById("iframe");

  const authStatus = await fetchAuthSession();

  if (authStatus.state === "authorized") {
    renderChatFrame(container);
  } else {
    renderMessage(container, authStatus.message);
  }
};

initializeBar();
