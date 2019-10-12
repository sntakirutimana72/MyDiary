// All manipulation for schedule dashboard

const allMonths = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 
  'August', 'September', 'October', 'November', 'December' 
]

const loadCalendar = () => {
  const now = new Date();
  const monthContainer = sel("div[sched-cal-months]");

  allMonths.forEach((mo_name, mo_no) => {
    const monthEl = htmlToElement("span", mo_name.slice(0, 3).toUpperCase());
    attr(monthEl, "value", mo_no + 1);
    
    if (now.getMonth() + 1 == mo_no + 1) attr(monthEl, "nowMonth", "");
    monthContainer.appendChild(monthEl);
  })

  loadDaysDate(true);
}

const loadDaysDate = (course) => {
  let custom_date = new Date();
  const year = custom_date.getFullYear();
  const dayTbEl = sel("table[sched-dates]");

  if (course) {
    const day = custom_date.getDate(), 
      month = allMonths[custom_date.getMonth()];
    text(sel("div[sched-now-dt]"), `${month} ${day} ${year}`);
  } else {
    const month = attr(sel("span[nowMonth]"), "value");
    custom_date = new Date(`${year}-${month}`);
  }

  //  generating maximun month dates
  let last_date, month = custom_date.getMonth() + 1;
  if (month == 2) {
    last_date = (month % 4) ? 29 : 28; // February month days
  } else last_date = "1 3 5 7 8 10 12".includes(month + "") ? 31 : 30;  // other months days

  let current_date = 0, today_date;

  for (let rows = 0; rows < 6; rows ++) {
    const rowTrEl = htmlToElement("tr");
    const col_start = !rows ? rows : (rows + 1) * 7;

    for (let cols = col_start; cols < (col_start + 7); cols ++) {
      const colTdEl = htmlToElement("td");

      if (cols >= custom_date.getDay()) {
        current_date ++;
        text(colTdEl, current_date);
      }

      if (!today_date) {
        const today = new Date();
        if (today.getDate() === current_date && today.getMonth() === (month - 1) ) {
          today_date = true;
          attr(colTdEl, "class", "today");
        }
      }

      rowTrEl.appendChild(colTdEl);
      if (current_date === last_date) {
        rows = 6;
        break;
      }
    }

    dayTbEl.appendChild(rowTrEl);
  }
}

const scheduleDashboardApp = () => {
  loadCalendar();
}

const scheDashReady = () => {
  if (document.readyState === 'complete') {
    clearInterval(scheDashIsReady);
    scheDashIsReady = undefined;
    scheduleDashboardApp();
  }
};
let scheDashIsReady = setInterval(scheDashReady);
