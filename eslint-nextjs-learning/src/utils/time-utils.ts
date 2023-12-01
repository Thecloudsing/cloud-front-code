export function isDarkOrLight(timezone: any) {
  // Get current date and time
  const now = new Date();

  // Convert to specified timezone
  const options: Intl.DateTimeFormatOptions = {
    timeZone: timezone,
    hour: "2-digit",
    hour12: false,
  };
  const timeInTimezone = now.toLocaleString("en-US", options);

  // Get the hour in 24-hour format
  const hour = parseInt(timeInTimezone);
  // Define sunrise and sunset hours (simplified)
  const sunrise = 6; // 6 AM
  const sunset = 18; // 6 PM

  // Determine if it's day or night
  if (hour >= sunrise && hour < sunset) {
    return "light";
  } else {
    return "dark";
  }
}

export function autoIsDarkOrLight() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return isDarkOrLight(timezone);
}
