function openPageInVueHn(event) {
  const target = event.linkUrl || event.pageUrl;
  if (target.includes('id=')) {
    const url = `https://vue-hn.now.sh/item/${target.split('id=')[1]}`;
    chrome.tabs.create({ url });
  }
}
chrome.contextMenus.create({
  title: 'Open in Vue-HN',
  contexts: ['page', 'link'],
  onclick: openPageInVueHn,
  type: 'normal',
});
