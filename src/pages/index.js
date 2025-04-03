const renderCalender = () => {
    month = JSON.parse(localStorage.getItem("monthName"));
    console.log(month);

    const nameMonth = document.createElement("h3");
    nameMonth.textContent = month.name;
    const header = document.createElement("div");
    renderHeader(header);
    header.className = "header";

    const calender = document.querySelector(".calender");

    const divDays = document.createElement("div");
    divDays.className = "div-days";

    calender.append(nameMonth, header, divDays);

    month.monthDay.forEach((x) => {
        const day = document.createElement("div");
        day.innerHTML = x;
        day.className = "day";
        divDays.append(day);
    });
};

const renderHeader = (header) => {
    var cabecalho = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
    cabecalho.forEach((day) => {
        const dayWeek = document.createElement("div");

        dayWeek.textContent = day;
        dayWeek.className = "daysWeek";
        header.append(dayWeek);
    });
};

renderCalender();
