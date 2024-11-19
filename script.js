function calculateWorkingTime() {
  const morningStartTime = document.getElementById('morning-start-time').value;
  const morningEndTime = document.getElementById('morning-end-time').value;
  const afternoonStartTime = document.getElementById('afternoon-start-time').value;
  const afternoonEndTime = document.getElementById('afternoon-end-time').value;
  const minimumTime = document.getElementById('minimum-time').value;

  if (morningStartTime && morningEndTime && afternoonStartTime && afternoonEndTime && minimumTime) {
    const morningStart = new Date(`1970-01-01T${morningStartTime}:00`);
    const morningEnd = new Date(`1970-01-01T${morningEndTime}:00`);
    const afternoonStart = new Date(`1970-01-01T${afternoonStartTime}:00`);
    const afternoonEnd = new Date(`1970-01-01T${afternoonEndTime}:00`);
    const minTimeParts = minimumTime.split(':');
    const minTimeInHours = parseInt(minTimeParts[0]) + parseInt(minTimeParts[1]) / 60;

    const morningDiff = (morningEnd - morningStart) / (1000 * 60 * 60); // Difference in hours
    const afternoonDiff = (afternoonEnd - afternoonStart) / (1000 * 60 * 60); // Difference in hours
    const totalDiff = morningDiff + afternoonDiff;

    let resultText;
    if (morningDiff < 0 || afternoonDiff < 0) {
      resultText = 'End times must be after start times.';
    } else {
      const totalHours = Math.floor(totalDiff);
      const totalMinutes = Math.round((totalDiff - totalHours) * 60);
      resultText = `Total working time: ${totalHours} hours and ${totalMinutes} minutes.`;

      if (totalDiff < minTimeInHours) {
        const hoursNeeded = minTimeInHours - totalDiff;
        const hours = Math.floor(hoursNeeded);
        const minutes = Math.round((hoursNeeded - hours) * 60);
        resultText += ` You need ${hours} hours and ${minutes} minutes more to reach the minimum working time of ${minTimeParts[0]}:${minTimeParts[1]}.`;
      }
    }
    document.getElementById('result').textContent = resultText;
  } else {
    document.getElementById('result').textContent = 'Please enter all start and end times.';
  }
}
