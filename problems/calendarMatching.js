/*
  Imagine that you want to schedule a meeting of a certain duration with a
  co-worker. You have access to your calendar and your co-worker's calendar
  (both of which contain your respective meetings for the day, in the form of
  [startTime, endTime]), as well as both of your daily bounds
  (i.e., the earliest and latest times at which you're available for meetings
  every day, in the form of [earliestTime, latestTime]).

  Write a function that takes in your calendar, your daily bounds, your
  co-worker's calendar, your co-worker's daily bounds, and the duration of the
  meeting that you want to schedule, and that returns a list of all the time
  blocks (in the form of [startTime, endTime]) during which you
  could schedule the meeting, ordered from earliest time block to latest.

  Note that times will be given and should be returned in military time. For
  example: 8:30, 9:01, and 23:56.

  Also note that the given calendar times will be sorted by start time in
  ascending order, as you would expect them to appear in a calendar application
  like Google Calendar.

  Sample Input
    calendar1 = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]
    dailyBounds1 = ['9:00', '20:00']
    calendar2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
    dailyBounds2 = ['10:00', '18:30']
    meetingDuration = 30

  Sample Output
    [['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:30']]
*/

function calendarMatching(cal1, hours1, cal2, hours2, meetingDuration) { 
  const result = [];
  const [start1, end1] = hours1.map(timeToFloat);
  const [start2, end2] = hours2.map(timeToFloat);
  const duration = meetingDuration / 60;

  let startTime = Math.max(start1, start2);
  let maxTime = Math.min(end1, end2);
  
  if (cal1.length === 0 && cal2.length === 0) {
    return [[floatToTime(startTime), floatToTime(maxTime)]];
  }
  
  let index1 = 0;
  let index2 = 0;

  while (startTime + duration <= maxTime ) {
    const [currentStart1, currentEnd1] = cal1[index1] && cal1[index1].map(timeToFloat) || [24, 24];
    const [currentStart2, currentEnd2] = cal2[index2] && cal2[index2].map(timeToFloat) || [24, 24];

    if (startTime + duration > currentStart1) {
      index1++;
      startTime = Math.max(startTime, currentEnd1);
    } else if (startTime + duration > currentStart2) {
      index2++;
      startTime = Math.max(startTime, currentEnd2);
    } else {
      const endTime = Math.min(currentStart1, currentStart2, end1, end2);
      const avaliableMeetingTime = [startTime, endTime].map(floatToTime);
      result.push(avaliableMeetingTime);
      startTime = endTime;
    }
  }

  return result;
}

// helper function to convert 11:31 into 11.5167
function timeToFloat(str) {
  const [hour, minute] = str.split(':');
  return parseInt(hour) + (minute / 60);
}

// helper function to convert 11.5167 into 11:31
function floatToTime(float) {
  const hour = Math.floor(float);
  const minute = (float % 1 * 60).toFixed(0).toString().padStart(2, '0');

  return `${hour}:${minute}`;
}

module.exports = calendarMatching;