const date = '2022-03-01T00:00:00.000Z'
let currentDate = Date.parse(new Date());
let secFromStart = (currentDate - Date.parse(date));
let sumEl = $("#sum")
let ratio = +$(sumEl).attr("data-ratio")
let sumFromStart = secFromStart * ratio

setNewSum(sumFromStart)


setInterval(function() {
    setNewSum(sumFromStart+1)
}, 1000);

function setNewSum(sum) {
    sumFromStart = sum
    $(sumEl).html(sumFromStart.toLocaleString())
}

