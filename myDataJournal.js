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
  { day: "Friday", sleepHours: 8, screenTime: 2, mood: "busy", caffeineIntake: 0, focusLevel: 8 },
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

function mostFrequentMood(data){
const moodCounts = {};

  for (let day of data){
    const mood = day.mood;
    moodCounts[mood] = (moodCounts[mood] || 0) +1;
}
  let topMood = ""
  let topCount = 0;

  for (let mood in moodCounts){
    if (moodCounts[mood] > topCount){
      topMood = mood;
      topCount = moodCounts[mood];
    }
  }
  return topMood;
} 

function correlateCaffeineToFocus(data) {
  let highCafFocusTotal = 0;
  let highCafDays = 0;

  let lowCafFocusTotal = 0;
  let lowCafFocusDays = 0;

  for (let day of data) {
    if (day.caffeineIntake >= 2) {
      highCafFocusTotal += day.focusLevel;
      highCafDays++;
    } else {
      lowCafFocusTotal += day.focusLevel;
      lowCafFocusDays++;
    }
  }

  const highAvg = highCafDays ? highCafFocusTotal / highCafDays : 0;
  const lowAvg = lowCafFocusDays ? lowCafFocusTotal / lowCafFocusDays : 0;

  return lowAvg > highAvg
    ? `No, focus was higher on low-caffeine days (${lowAvg.toFixed(1)} vs ${highAvg.toFixed(1)})`
    : `Yes, focus was higher on high-caffeine days (${highAvg.toFixed(1)} vs ${lowAvg.toFixed(1)})`;
}


//Results (Output)
const highestScreenDay = findHighestScreenTime(weekData);
console.log(`Highest Screen Time: ${highestScreenDay.day} (${highestScreenDay.screenTime} hrs)`);

const avgSleep = averageSleep(weekData);
console.log(`Average Sleep: ${avgSleep.toFixed(1)} hrs`);

const frequentMood = mostFrequentMood(weekData);
console.log(`Most Frequent Mood: "${frequentMood}"`);

const caffeineResult = correlateCaffeineToFocus(weekData);
console.log(`More caffeine meant better focus? ${caffeineResult}`);