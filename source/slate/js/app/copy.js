/* eslint-disable strict */
/* eslint-disable linebreak-style */
function copyToClipboard(container) {
  const el = document.createElement('textarea');
  el.value = container.textContent.replace(/\r(?=\n$)/gm, '');
  document.body.appendChild(el);
  // Technique from https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard#using_the_clipboard_api
  function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(function() {
      /* clipboard successfully set */
    }, function() {
      /* clipboard write failed */
      el.select();
      document.execCommand('copy');
    });
  }
  navigator.permissions.query({name: "clipboard-write"}).then(result => {
    if (result.state == "granted" || result.state == "prompt") {
      /* write to the clipboard now */
        updateClipboard(el.value);
    }
  });

  document.body.removeChild(el);
}

function setupCodeCopy() {
  $('pre.highlight').prepend('<div class="copy-clipboard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg></div>');
  $('.copy-clipboard').on('click', function() {
    copyToClipboard(this.parentNode.children[1]);
  });
}
