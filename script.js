document.getElementById("clearButton").addEventListener("click", clearJenkinsFields);

async function clearJenkinsFields() {
	let tab = await getCurrentTab();
    await chrome.tabs.sendMessage(tab.id, 'cleanSlate');
};

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}