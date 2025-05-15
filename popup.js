document.getElementById("translate").addEventListener("click", () => {
  const lang = document.getElementById("language").value;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentUrl = tabs[0].url;

    const translatedUrl = `https://translate.google.com/translate?hl=${lang}&sl=auto&tl=${lang}&u=${encodeURIComponent(
      currentUrl
    )}`;

    chrome.tabs.update(tabs[0].id, { url: translatedUrl });
  });
});
