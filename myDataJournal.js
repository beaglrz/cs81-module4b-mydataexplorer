/*
Beatriz Galarza
Repository: https://github.com/beaglrz/cs81-module4b-mydataexplorer
*/

/*Predictions Before Coding
- Which day had the most screen time? Saturday
- Best focus day? Friday
- Is more caffeine helping? I don't believe so
*/

//Data (Input)
const weekData = [
  { day: "Monday", sleepHours: 9, screenTime: 5.5, mood: "busy", caffeineIntake: 1, focusLevel: 6 },
  { day: "Tuesday", sleepHours: 7, screenTime: 5, mood: "productive", caffeineIntake: 0, focusLevel: 7 },
  { day: "Wednesday", sleepHours: 6, screenTime: 5.3, mood: "stressed", caffeineIntake: 3, focusLevel: 5 },
  { day: "Thursday", sleepHours: 7, screenTime: 4.5, mood: "calm", caffeineIntake: 1, focusLevel: 5 },
  { day: "Friday", sleepHours: 8, screenTime: 2, mood: "focused", caffeineIntake: 0, focusLevel: 8 },
  { day: "Saturday", sleepHours: 6, screenTime: 6, mood: "tired", caffeineIntake: 0, focusLevel: 7 },
  { day: "Sunday", sleepHours: 8, screenTime: 4, mood: "relaxed", caffeineIntake: 1, focusLevel: 8 }
];

//Functions
function findHighestScreenTime(data) {
  let maxDay = data[0];

  for (let day of data) {
    if (day.screenTime > maxDay.screenTime){
      maxDay = day;
    }
  }
  return maxDay;
}

function averageSleep(data){
  let totalSleep = 0;

  for (let day of data){
    totalSleep += day.sleepHours;
  }
  return totalSleep / data.length;
}

//Results (Output)
const highestScreenDay = findHighestScreenTime(weekData);
console.log(`Highest Screen Time: ${highestScreenDay.day} (${highestScreenDay.screenTime} hrs)`);

const avgSleep = averageSleep(weekData);
console.log(`Average Sleep: ${avgSleep.toFixed(1)} hrs`);