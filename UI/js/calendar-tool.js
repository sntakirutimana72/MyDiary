const arrange_dates = (month, year="") => { 
  const calTableEl = htmlToElement("table");

  if (!year) year = sel("select[year]").value;
  if (!month) month = sel("select[month]").value;

  // creating week-days names
  const dateTrEl = htmlToElement('tr'); 
  ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].forEach(day_name => {
    const dateThEl = htmlToElement('th', day_name);
    dateTrEl.appendChild(dateThEl);
  });
  calTableEl.appendChild(dateTrEl);

  // creating a custom date based on current month and year values
  const custom_date = new Date(`${year}-${month}`);

  //  generating maximun month dates
  if (month == 2) {
    var last_date = (+month % 4) ? 29 : 28; // February month days
  } else var last_date = "1 3 5 7 8 10 12".includes(month) ? 31 : 30;  // other months days

  let current_date = 0;
  let today_date;
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
        if (today.getDate() === current_date && today.getMonth() === (+month - 1) ) {
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
    calTableEl.appendChild(rowTrEl);
  }

  const calendarContainer = sel('[calendar] [cal-body]');
  const oldCalTableEl = sel('[calendar] [cal-body] > table');
  if (oldCalTableEl) oldCalTableEl.remove();
  calendarContainer.appendChild(calTableEl);
}

const monthChanged = ({target}) => {
  arrange_dates(target.value);
}

const yearChanged = ({target}) => {
  arrange_dates(null, target.value);
}

const monthStartUpLoad = () => {
  const date = new Date(), 
  monthSelectEl = document.querySelector("select[month]");

  [
    'January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'
  ].forEach((val, i) => {
    const monthOptionEl = htmlToElement("option", val);
    attr(monthOptionEl, "value", i + 1);

    if (date.getMonth() === i) attr(monthOptionEl, "selected", "true");
    monthSelectEl.appendChild(monthOptionEl);
  })
}

const yearStartUpLoad = () => {
  const date = new Date(), 
  yearSelectEl = sel("select[year]");

  for (let i = 0; i < 10; i ++) {
    const yearOptionEl = htmlToElement("option", `${date.getFullYear() + i}`);
    attr(yearOptionEl, "value", date.getFullYear() + i);

    if (!i) attr(yearOptionEl, "selected", 'true');
    yearSelectEl.appendChild(yearOptionEl);
  }
  arrange_dates();
}

const next_month = () => {
  remove_change_events();
  const cur_year = sel("select[year]"), 
  cur_month = sel("select[month]");

  if (cur_month.value === "12") {
    var next_month = sel("[month] option[value='1']");
    const next_year = sel(`[year] option[value='${(+cur_year.value + 1)}']`);
    val(cur_year, next_year.value);
  } else var next_month = sel(`[month] option[value='${(+cur_month.value + 1)}']`);

  val(cur_month, next_month.value);

  arrange_dates(cur_month.value, cur_year.value);
  add_change_events();
}

const previous_month = () => {
  remove_change_events();
  const cur_year = sel("select[year]"), 
  cur_month = sel("select[month]");

  if (cur_month.value === "1") {
    var next_month = sel("[month] option[value='12']");
    const next_year = sel(`[year] option[value='${(+cur_year.value - 1)}']`);
    val(cur_year, next_year.value);
  } else var next_month = sel(`[month] option[value='${(+cur_month.value - 1)}']`);
  
  val(cur_month, next_month.value);

  arrange_dates(cur_month.value, cur_year.value);
  add_change_events();
}

const add_change_events = () => {
  sel("select[year]").addEventListener("change", yearChanged);
  sel("select[month]").addEventListener("change", monthChanged);
}

const remove_change_events = () => {
  sel("select[year]").removeEventListener("change", yearChanged);
  sel("select[month]").removeEventListener("change", monthChanged);
}

const powerUpUI = () => {
  add_change_events();
  sel("img.next").addEventListener("click", next_month);
  sel("img.previous").addEventListener("click", previous_month);
}

const runCalendarApp = () => {
  powerUpUI();
  monthStartUpLoad();
  yearStartUpLoad();
}

let calendarIsReady;
const calendarReady = () => {
  if (document.readyState === 'complete') {
    clearInterval(calendarIsReady);
    calendarIsReady = undefined;
    runCalendarApp();
  }
};
calendarIsReady = setInterval(calendarReady);
