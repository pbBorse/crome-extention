document.getElementById('getTitleButton').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    let tab = tabs[0];
    let title = tab.title;
    document.getElementById('title').textContent = title;
  });
});
