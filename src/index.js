// const renderHeader = (array) => {
//     const header = document.querySelector(".header");
//     array.forEach((element) => {
//         const div = document.createElement("div");
//         div.textContent = element;
//         header.append(div);
//     });
// };

// function intervalo(datas) {
//     var dia = 24 * 60 * 60 * 1000;
//     var resultado = [];
//     for (
//         var i = datas.inicio.getTime(), fim = datas.fim.getTime();
//         i <= fim;

//     ) {
//         var ano = new Date(i).getFullYear();
//         var mes = new Date(i).getMonth();
//         var data_inicio_mes = new Date(ano, mes, 1, 15, 0, 0, 0);
//         var data_fim_mes = new Date(
//             data_inicio_mes.getFullYear(),
//             data_inicio_mes.getMonth() + 1,
//             0
//         );
//         resultado.push(data_inicio_mes);
//         i = data_fim_mes.getTime() + dia;
//     }
//     return resultado;
// }
// var datas = {
//     inicio: new Date(2025, 0, 28, 15, 0, 0, 0),
//     fim: new Date(2025, 11, 1, 15, 0, 0, 0),
// };
// var calendario = intervalo(datas);
// var nomes = [
//     "Janeiro",
//     "Fevereiro",
//     "Março",
//     "Abril",
//     "Maio",
//     "Junho",
//     "Julho",
//     "Agosto",
//     "Setembro",
//     "Outubro",
//     "Novembro",
//     "Dezembro",
// ];
// for (var x = 0; x < calendario.length; x++) {
//     var data_inicio = calendario[x];
//     var ultimoDiaDoMes = new Date(
//         data_inicio.getFullYear(),
//         data_inicio.getMonth() + 1,
//         0
//     );
//     var ano = data_inicio.getFullYear();
//     var mes = data_inicio.getMonth();
//     var acrescimo_inicio = 0;
//     var acrescimo_fim = 0;
//     var fim = ultimoDiaDoMes.getDate();
//     var dia_semana_inicio = new Date(
//         data_inicio.getFullYear(),
//         data_inicio.getMonth(),
//         1
//     ).getDay();
//     var dia_semana_fim = ultimoDiaDoMes.getDay();
//     var array_calendario = [];
//     if (dia_semana_inicio > 0) {
//         for (i = dia_semana_inicio; i >= 0; i--) {
//             acrescimo_inicio++;
//         }
//     }
//     if (dia_semana_fim > 0) {
//         if (dia_semana_fim != 6) {
//             acrescimo_fim = 6 - dia_semana_fim;
//         }
//     }
//     for (i = 0; i < acrescimo_inicio - 1; i++) {
//         array_calendario.push("--");
//     }
//     for (i = 1; i <= fim; i++) {
//         array_calendario.push(("0" + i).slice(-2));
//     }
//     for (i = 0; i <= acrescimo_fim; i++) {
//         array_calendario.push("--");
//     }

//     const main = document.querySelector(".main");
//     const calender = document.createElement("div");
//     const headerCalender = document.createElement("div");
//     const divDays = document.createElement("div");

//     calender.dataset.nameMonth = nomes[mes];

//     calender.addEventListener("click", (e) => {
//         const name = calender.dataset.nameMonth;
//         localStorage.setItem("nameMonth", name);
//     });

//     calender.innerHTML = nomes[mes];
//     calender.className = "calender";
//     divDays.className = "div-days";
//     headerCalender.className = "header";

//     calender.append(headerCalender, divDays);
//     main.append(calender);
//     var cabecalho = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
//     cabecalho.forEach((element) => {
//         const div = document.createElement("div");
//         div.textContent = element;
//         div.className = "daysWeek";
//         headerCalender.append(div);
//     });
//     console.log(nomes[mes] + " - " + ano);
//     console.log(cabecalho);
//     var tmp = "";
//     var z = 1;
//     console.log(array_calendario);
//     for (i = 0; i < array_calendario.length; i++) {
//         const day = document.createElement("div");

//         day.innerHTML = array_calendario[i];
//         day.className = "day";
//         divDays.append(day);
//         tmp += array_calendario[i] + " - ";
//         if (z == 7) {
//             tmp = tmp.slice(0, -3);

//             console.log(tmp);
//         }
//         z++;
//         if (z > 7) {
//             z = 1;
//             tmp = "";
//         }
//     }
// }

// const getNameMonth = (name) => {
//     localStorage.setItem("nameMonth", name);
// };

var data_inicio = new Date();
var ultimoDiaDoMes = new Date(
    data_inicio.getFullYear(),
    data_inicio.getMonth() + 1,
    0
);
var fim = ultimoDiaDoMes.getDate();
var ultimoDiaDoMes = new Date(
    data_inicio.getFullYear(),
    data_inicio.getMonth() + 1,
    0
);
var dia_semana_inicio = new Date(
    data_inicio.getFullYear(),
    data_inicio.getMonth(),
    1
).getDay();
var dia_semana_fim = ultimoDiaDoMes.getDay();
console.log(fim);
console.log(dia_semana_inicio);
console.log(dia_semana_fim);

function intervalo(datas) {
    var dia = 24 * 60 * 60 * 1000;
    var resultado = [];
    for (
        var i = datas.inicio.getTime(), fim = datas.fim.getTime();
        i <= fim;

    ) {
        var ano = new Date(i).getFullYear();
        var mes = new Date(i).getMonth();
        var data_inicio_mes = new Date(ano, mes, 1, 15, 0, 0, 0);
        var data_fim_mes = new Date(
            data_inicio_mes.getFullYear(),
            data_inicio_mes.getMonth() + 1,
            0
        );
        resultado.push(data_inicio_mes);
        i = data_fim_mes.getTime() + dia;
    }
    return resultado;
}

const getYear = () => {
    var datas = {
        inicio: new Date(2022, 0, 28, 15, 0, 0, 0),
        fim: new Date(2022, 11, 1, 15, 0, 0, 0),
    };
    var calendario = intervalo(datas);
    var nomes = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    var fulYearArray = [];

    for (var x = 0; x < calendario.length; x++) {
        var data_inicio = calendario[x];
        var ultimoDiaDoMes = new Date(
            data_inicio.getFullYear(),
            data_inicio.getMonth() + 1,
            0
        );
        var fim = ultimoDiaDoMes.getDate();
        var array_calendario = [];

        var dia_semana_inicio = new Date(
            data_inicio.getFullYear(),
            data_inicio.getMonth(),
            1
        ).getDay();
        var dia_semana_fim = ultimoDiaDoMes.getDay();

        var acrescimo_inicio =
            dia_semana_inicio > 0 ? 7 - dia_semana_inicio : 0;
        var acrescimo_fim =
            dia_semana_fim > 0 && dia_semana_fim != 6 ? 6 - dia_semana_fim : 0;

        for (let i = 0; i < acrescimo_inicio; i++) {
            array_calendario.push("--");
        }

        for (let i = 1; i <= fim; i++) {
            array_calendario.push(("0" + i).slice(-2));
        }

        for (let i = 0; i < acrescimo_fim; i++) {
            array_calendario.push("--");
        }

        let teste = {
            name: nomes[x],
            monthDay: array_calendario,
        };
        fulYearArray.push(teste);
    }

    console.log(fulYearArray);

    return fulYearArray;
};

const renderCalender = () => {
    const months = getYear();
    const main = document.querySelector(".main");
    months.forEach((m) => {
        console.log(m);
        const nameMonth = document.createElement("h3");
        nameMonth.textContent = m.name;
        const header = document.createElement("div");
        renderHeader(header);
        header.className = "header";

        const calender = document.createElement("div");
        calender.className = "calender";
        const divDays = document.createElement("div");
        divDays.className = "div-days";

        calender.append(nameMonth, header, divDays);
        main.append(calender);
        calender.addEventListener("click", (e) => {
            localStorage.setItem("monthName", JSON.stringify(m));
            window.location = "./pages/calender.html";
        });

        m.monthDay.forEach((x) => {
            const day = document.createElement("div");
            day.innerHTML = x;
            day.className = "day";
            divDays.append(day);
        });
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
