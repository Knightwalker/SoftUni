function DayOfWeek(str1) {
  str1 = str1.toLowerCase();
  res = "";

  if (str1 == "monday") { res = "1"; }
  else if (str1 == "tuesday") { res = "2"; }
  else if (str1 == "wednesday") { res = "3"; }
  else if (str1 == "thursday") { res = "4"; }
  else if (str1 == "friday") { res = "5"; }
  else if (str1 == "saturday") { res = "6"; }
  else if (str1 == "sunday") { res = "7"; }
  else { res = "error"; }

  console.log(res);
}