const hideCounts = () => {
  const currentURL = window.location.href;
  const hideElement = (element) => (element.style.setProperty('display', 'none', 'important'));
  const replaceElement = (element, replacement) => {
    if (element.innerHTML !== replacement) {
      element.innerHTML = replacement;
    }
  };

  // console.log('### HIDING COUNTS!! ###');

  hiders.forEach((hider) => {
    if (hider.check(currentURL)) {
      hider.run(document, hideElement, replaceElement);
    }
  });
};

const body = document.getElementsByTagName('body')[0];

const observer = new MutationObserver((mutations) => {
  try {
    hideCounts();
  } catch(e) {}
});

const config = {
  childList: true,
  subtree: true,
};

observer.observe(body, config);
