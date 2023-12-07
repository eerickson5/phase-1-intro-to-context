// Your code here
function createEmployeeRecord(employeeArray){
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

// function convertStringToDate(dateStamp){
//     const date = new Date(dateStamp.slice(0, 10) + "T" + dateStamp.slice(11, 13) + ":" + dateStamp.slice(13));
//     return date;
// }

function createEmployeeRecords(employeesArray){
    return employeesArray.map( employee => createEmployeeRecord(employee));
}

function createEventObject(dateStamp, typeOfEvent){
    return {
        type: typeOfEvent,
        hour: parseInt(dateStamp.slice(11, 13) + "00"),
        date: dateStamp.slice(0, 10)
    }
}

function createTimeInEvent(employeeRecord, dateStamp) {
    const newRecord = Object.assign(employeeRecord)
    const time =  createEventObject(dateStamp, "TimeIn")
    newRecord.timeInEvents.push(time)
    return newRecord
}

function createTimeOutEvent(employeeRecord, dateStamp) {
    const newRecord = Object.assign(employeeRecord)
    const time =  createEventObject(dateStamp, "TimeOut")
    newRecord.timeOutEvents.push(time)
    return newRecord
}

function hoursWorkedOnDate(employeeRecord, date){
    //i could write a binary search but i dont feel like it
    const clockIn = employeeRecord.timeInEvents.reduce()
}