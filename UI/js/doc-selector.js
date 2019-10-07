/**
 * @param {CSSStyleRule} cssel a css selector for one element
*/
function sel (cssel) {
  return document.querySelector(cssel)
} 

/**
 * @param {CSSStyleRule} cssel a css selector for all elements
*/
function sal (cssel) {
  return document.querySelectorAll(cssel)
}

/**
 * @param {HTMLElement} el html element to set or get attribute from
 * @param {String} attrib name of an attribute to get or set
 * @param {String} val value when setting value to an attribute
*/
function attr (el, attrib, val=null) {
  if (el && attrib) {
    if (val !== null) el.setAttribute(attrib, val);
    else return el.getAttribute(attrib);
  }
}

/**
 * @param {HTMLElement} el html element to set or get attribute from
 * @param {String} value value when setting value to an attribute
*/
function val (el, value=null) {
  if (el) {
    if (value !== null) el.value = value;
    else return el.value;
  }
}

/**
 * @param {HTMLElement} el html element to set or get attribute from
 * @param {String} value value when setting value to an attribute
*/
function text (el, value=null) {
  if (el) {
    if (value !== null) el.textContent = value;
    else return el.textContent;
  }
}

/**
 * @param {HTMLElement} el html element to set or get attribute from
 * @param {String} attrib name of an attribute to remove
*/
function rAttr (el, attrib) {
  if (el && attrib) el.removeAttribute(attrib);
}

/**
 * @param {HTMLElement} element a html element name
 * @param {String} html inner text or html
*/
function htmlToElement (element, html='') {
  const newElement = document.createElement(element);
  newElement.textContent = html.trim();
  return newElement;
}
