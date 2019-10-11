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
 * @param {HTMLElement} el html element which is an element
*/
function siblings (el) {
  const otherChildren = [];
  let child = parent(el).firstChild;
  while (child) {
    if (child !== el) otherChildren.push(child);
    child = child.nextSibling;
  }
  return otherChildren;
}

/**
 * @param {HTMLElement} el html element to return its parent
*/
function parent (el) {
  return el.parentNode;
}

/**
 * @param {HTMLElement} el html element to set or get attribute from
 * @param {String} class_name name of Class - attribute to remove or add
*/
function toggle (el, class_name) {
  if (el && class_name) el.classList.toggle(class_name);
}

/**
 * @param {Array} els A list of html elements on which to remove class name
 * @param {String} class_name name of Class - attribute to remove
*/
function removeClass (els, class_name) {
  if (els && class_name) els.forEach(el => {
    if (el.classList) el.classList.remove(class_name);
  });
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
