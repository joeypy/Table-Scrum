
// const time = 1589987573;
// const fecha = moment.unix(time).format("DD/MM/YYYY");

// console.log(fecha);

function unixToDate(time, format = "DD/MM/YYYY"){
    return moment.unix(time).format(format);
}