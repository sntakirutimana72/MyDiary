// Edit Entry
const editEntry = ({target}) => {
  toggleCtrls(target);
}

// Select all
const selectAll = () => {}

// Copy All
const copyAll = () => {}

// Cut All
const cutAll = () => {}

// Save Changes
const saveEntry = () => {}

// Bold Entry text
const setBold = ({target}) => {
  toggleCtrls(target);
}

// Underline Entry text
const setUnderline = ({target}) => {
  toggleCtrls(target);
}

// Italic Entry text
const setItalic = ({target}) => {
  toggleCtrls(target);
}

// Font Family
const fontFamily = () => {}

// Font Size
const fontSize = () => {}

// UpperCase
const upperCase = ({target}) => {
  toggleCtrls(target);
}

// LowerCase
const lowerCase = ({target}) => {
  toggleCtrls(target);
}

// Background Color
const backgroundColor = () => {}

// Fore Color
const foreColor = () => {}

// Text Alignment
const textAlign = ({target}) => {
  removeClass(siblings(target), "note-ctrl-active");
  toggleCtrls(target);
}

// Zoom In - Out
const zoomInOut = () => {}

// Clear Entry data
const clearAll = () => {}

// Delete Entry - Audio record
const deleteEntryAudio = () => {}

// Make Entry Audio record
const audioRecord = () => {}

//  Toggle Activation on Note ctrls
const toggleCtrls = (element) => {
  toggle(element, "note-ctrl-active");
}

// Zoom handlers
const directZoom = ({layerX}) => {
  const left = regulateValue(layerX);
  if (left) sel("[zoom-bar-handler]").style.left = left;
}
const regulateValue = (pa) => {
  if ((pa - 6) >= 0) return `${pa - 6}px`;
}
const sequelZoom = ({target}) => {
  add_removeEvent_onZoomBar();
  target.onmouseup = on_up;
  target.onmousemove = on_move;

  function on_move ({layerX}) {
    const left = regulateValue(layerX);
    if (left) this.style.left = left;
  }
  function on_up ({target}) {
    add_removeEvent_onZoomBar(true);
    clearMouseEvents(target);
  }
  function clearMouseEvents (target) {
    target.onmouseup = null;
    target.onmousemove = null;
  }
}
const add_removeEvent_onZoomBar = (proof) => {
  proof ? sel(
    "div[zoom-ctrl]").addEventListener("click", directZoom) : sel(
      "div[zoom-ctrl]").removeEventListener("click", directZoom);
}

const powerNoteUI = () => {
  // Entry File Controls Events
  sel("img[nt-cut]").addEventListener("click", cutAll);
  sel("img[nt-cpy]").addEventListener("click", copyAll);
  sel("img[nt-del]").addEventListener("click", clearAll);
  sel("img[nt-edt]").addEventListener("click", editEntry);
  sel("img[nt-slc]").addEventListener("click", selectAll);
  sel("img[nt-sav]").addEventListener("click", saveEntry);

  // Entry Data Controls Events
  sel("img[nt-bold]").addEventListener("click", setBold);
  sel("img[nt-itl]").addEventListener("click", setItalic);
  sel("img[nt-underl]").addEventListener("click", setUnderline);

  // Entry Data Left Controls
  sal("img[nt-algn]").forEach(
    alignEl => alignEl.addEventListener("click", textAlign)
  );
  sel("img[nt-underl]").addEventListener("click", setUnderline);

  // Entry Data Lower Controls
  add_removeEvent_onZoomBar(true);
  sel("[zoom-bar-handler]").addEventListener("mousedown", sequelZoom);
}

const runNoteDashboard = () => {
  powerNoteUI();
};

let noteIsReady;
const noteReady = () => {
  if (document.readyState === 'complete') {
    clearInterval(noteIsReady);
    noteIsReady = undefined;
    runNoteDashboard();
  }
};
noteIsReady = setInterval(noteReady);
