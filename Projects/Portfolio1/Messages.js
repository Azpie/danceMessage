function generateRandomTimetable(num) {
    return Math.floor(Math.random() * num)
 }
 
 const timetableData = {
day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
time: ['3pm','4pm', '5pm','6pm','7pm','8pm','9pm'],
style: ['Ballet', 'Jazz', 'Tap', 'Hip hop', 'Contemporary', 'Lyrical','Acro']
 }
 
 let personalTimetable = []
 
 for(let today in timetableData) {
   let option = generateRandomTimetable(timetableData[today].length)
 
   switch(today) {
     case 'day':
       personalTimetable.push(`Scheduled day: "${timetableData[today][option]}".`)
       break
     case 'time':
       personalTimetable.push(`Scheduled time: "${timetableData[today][option]}".`)
       break
     case 'style':
       personalTimetable.push(`Scheduled dance style: "${timetableData[today][option]}".`)
       break
     default:
       personalTimetable.push('Maybe just spend the day stretching.')
   }
 }
 
 function formatTodaysSchedule(schedule) {
    const joinUp = personalTimetable.join('\n')
   console.log(joinUp)
 }
 
 formatTodaysSchedule(personalTimetable);