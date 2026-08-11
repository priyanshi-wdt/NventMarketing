function isBusinessOpen(company) {
  console.log('company',company);
  
  if (!company?.businessHours) {
    return false;
  }

  const now = new Date();

  const indiaDate = new Date(
    now.toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    })
  );

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const today = days[indiaDate.getDay()];

  const hours = company.businessHours[today];
  console.log('hours',hours);
  

  if (!hours || hours.closed) {
    return false;
  }

  const currentMinutes =
    indiaDate.getHours() * 60 + indiaDate.getMinutes();

  const [openHour, openMinute] =
    hours.open.split(":").map(Number);

  const [closeHour, closeMinute] =
    hours.close.split(":").map(Number);

  const openMinutes = openHour * 60 + openMinute;
  const closeMinutes = closeHour * 60 + closeMinute;

  console.log('open',openHour,closeHour);
  

  return (
    currentMinutes >= openMinutes &&
    currentMinutes <= closeMinutes
  );
}

module.exports = isBusinessOpen;

