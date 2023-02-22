// 1)

let date = new Date(2012, 1, 20, 3, 12)

console.log(date)

// 2)

date = new Date(2012, 0, 3);

let getWeekDay = date => ['ВС', "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"][date.getDay()]
console.log(getWeekDay(date))

// 3)

let getLocalDay = date => date.getDay() == 0 ? 7 : date.getDay()

// 4)

let getDateAgo = (date, days) => date.setDate(date.getDate() - days).getDate()

// 5)

let getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDate()

// 6)

let getSecondsToday = () => {
    let dateNow = new Date()
    let today = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate())
    return Math.round((dateNow - today) / 1000)
}

// 7)

let getSecondsToTomorrow = () => {
    let dateNow = new Date()
    let tomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1)
    return Math.round((tomorrow - dateNow) / 1000)
}

// 8)

let formatDate = date => {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

