const expandLeftNavMenu = () => {
  sel("[left-nav][nav-col]").style.width = "200px";
};

const windowKnocked = (e) => {
  const parent = e.target.parentNode;
  if (parent && (parent === document || (!parent.hasAttribute(
    "left-el-link") && !e.target.hasAttribute("left-nav")))) 
    sel("[left-nav][nav-col]").style.width = "30px";
};

const powerUpLeftNavUI = () => {
  document.addEventListener("click", windowKnocked);
  sel("[left-menu-el][dashboard]").addEventListener('click', expandLeftNavMenu);
};

let docIsReady;
const isReady = () => {
  if (document.readyState === 'complete') {
    clearInterval(docIsReady);
    docIsReady = undefined;
    powerUpLeftNavUI();
  }
};
docIsReady = setInterval(isReady);
