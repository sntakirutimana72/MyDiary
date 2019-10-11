let autoSlideScheduler;

const changeHelpSlide = ({target}) => {
  stopHelpSlide();
  slideToAnotherPage(target.getAttribute("for"));
  startHelpSlide();
};

const startHelpSlide = () => {
  autoSlideScheduler = setInterval(slideToAnotherPage, 400 * 25);
};

const stopHelpSlide = () => {
  if (autoSlideScheduler) {
    clearInterval(autoSlideScheduler);
    autoSlideScheduler = undefined;
  }
};

const slideToAnotherPage = (pageCss) => {
  const activePage = sel(".page-on");
  const [currentPage] = activePage.classList;

  if (!pageCss) {
    const currentIndex = parseInt(currentPage.replace("page-", ""));
    const nextIndex = (currentIndex > 3) ? 1 : (currentIndex + 1);
    flugCurrent_nextPage(activePage, `page-${currentIndex}`, `page-${nextIndex}`);
  } else {
    if (activePage.classList.contains(pageCss)) return;
    flugCurrent_nextPage(activePage, currentPage, pageCss);
  }
};

const flugCurrent_nextPage = (active, curCss, nextCss) => {
  active.classList.remove("page-on");
  sel(`.${nextCss}`).classList.add("page-on");
  sel(`[for="${curCss}"`).classList.remove("active-manual");
  sel(`[for="${nextCss}"`).classList.add("active-manual");
};

const powerHelpUI = () => {
  sal("[guide-manuals] > span").forEach(
    (dotel) => dotel.addEventListener('click', changeHelpSlide));
};

const runHelp = () => {
  powerHelpUI();
  startHelpSlide();
};

let docIsReady;

const isReady = () => {
  if (document.readyState === 'complete') {
    clearInterval(docIsReady);
    docIsReady = undefined;
    runHelp();
  }
};
docIsReady = setInterval(isReady);
