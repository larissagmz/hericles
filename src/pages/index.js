month = JSON.parse(localStorage.getItem("monthName"));

const renderCalender = () => {
    month = JSON.parse(localStorage.getItem("monthName"));
    console.log(month);

    const nameMonth = document.createElement("h3");
    nameMonth.textContent = month.name;
    const header = document.createElement("div");
    renderHeader(header);
    header.className = "header";

    const calender = document.querySelector(".calender");
    calender.innerHTML = "";
    const divDays = document.createElement("div");
    divDays.className = "div-days";

    calender.append(nameMonth, header, divDays);

    month.monthDay.forEach((x) => {
        const day = document.createElement("div");
        day.innerHTML = x;
        day.className = "day";
        day.dataset.day = x;

        month.event.forEach((m) => {
            if (Array.isArray(m.day)) {
                m.day.forEach((eventDay) => {
                    if (eventDay === Number(x)) {
                        day.style.backgroundColor = m.color;
                    }
                });
            } else {
                if (m.day === x) {
                    day.style.backgroundColor = m.color;
                }
            }
        });

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

function toggleRows() {
    const rowsWrapper = document.getElementById("tableRowsWrapper");
    const arrowIcon = document.querySelector(".arrow");

    rowsWrapper.classList.toggle("show");

    arrowIcon.classList.toggle("rotated");
}

const toggleButtonEdit = () => {
    const button = document.querySelector(".button-edit");

    button.addEventListener("click", (e) => {
        button.classList.toggle("button-edit-active");
        if (button.classList.contains("button-edit-active")) {
            if (!document.querySelector("form")) {
                renderForm();
                handleForm();
            }
        } else {
            const form = document.querySelector(".form");
            if (form) {
                form.remove();
            }
        }
    });
};

const buttonEdit = () => {
    console.log("asd");
};

const renderForm = () => {
    const main = document.querySelector(".section-calender");
    const form = document.createElement("form");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const inputColor = document.createElement("input");
    const button = document.createElement("button");
    const day = document.createElement("p");

    day.className = "selected-day";
    button.textContent = "salvar";
    form.className = "form";
    label.textContent = "descricao";
    day.textContent = "nenhum dia selecionado";
    input.className = "description-input";
    button.type = "submit";
    inputColor.type = "color";
    inputColor.className = "input-color";

    form.append(label, day, input, inputColor, button);
    main.append(form);
};

const handleForm = (firstClick, secondClick) => {
    const buttonDay = document.querySelectorAll(".day");
    const daySelected = document.querySelector(".selected-day");
    const form = document.querySelector(".form");

    let month = JSON.parse(localStorage.getItem("monthName")) || { event: [] };
    console.log(month);
    daySelected.textContent = firstClick;
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let value = document.querySelector(".description-input").value;
        let valueColor = document.querySelector(".input-color").value;

        console.log(secondClick);

        if (firstClick === secondClick) {
            const event = {
                day: firstClick,
                color: valueColor,
                description: value,
            };
            month.event.push(event);
        }

        if (firstClick !== secondClick) {
            const click = Number(firstClick);
            const daysArray = [];
            for (let i = click; i <= secondClick; i++) {
                daysArray.push(i);
            }
            const event = {
                day: daysArray,
                color: valueColor,
                description: value,
            };
            month.event.push(event);
            console.log(daysArray);
        }

        month.event.sort((a, b) => {
            const dayA = Array.isArray(a.day) ? a.day[0] : a.day;
            const dayB = Array.isArray(b.day) ? b.day[0] : b.day;
            return dayA - dayB;
        });
        renderTableDescription(month.event);

        localStorage.setItem("monthName", JSON.stringify(month));

        document.querySelector(".description-input").value = "";
        renderCalender();

        firstClick = null;
        secondClick = null;

        daySelected.textContent = "";

        form.remove();
        dayEvents();
        const button = document.querySelector(".button-edit");
        button.classList.remove("button-edit-active");
    });
};

function removeOldDayEvents() {
    const oldButtons = document.querySelectorAll(".day");

    oldButtons.forEach((btn) => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
    });
}

function dayEvents() {
    removeOldDayEvents();
    const daySelected = document.querySelector(".selected-day");
    const newButtonDay = document.querySelectorAll(".day");
    const button = document.querySelector(".button-edit");
    firstClick = null;
    secondClick = null;
    newButtonDay.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            console.log("Dia selecionado:", btn.dataset.day);
            const clickedDay = btn.dataset.day;

            if (!firstClick) {
                firstClick = clickedDay;
            } else {
                secondClick = clickedDay;
                if (!document.querySelector("form")) {
                    button.classList.add("button-edit-active");
                    renderForm();
                    handleForm(firstClick, secondClick);
                }
            }
            console.log("Primeiro clique:", firstClick);
            console.log("Segundo clique:", secondClick);
        });
    });
}

const renderTableDescription = (eventMonth) => {
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    eventMonth.forEach((e) => {
        const tr = document.createElement("tr");
        const day = document.createElement("td");
        const description = document.createElement("td");

        description.textContent = e.description;
        if (Array.isArray(e.day)) {
            day.textContent = `${e.day[0]} ao ${e.day[e.day.length - 1]}`;
        } else {
            day.textContent = e.day;
        }

        tr.append(day, description);
        tbody.append(tr);
    });
};

toggleRows();
renderCalender();

renderTableDescription(month.event);
dayEvents();
toggleButtonEdit();
