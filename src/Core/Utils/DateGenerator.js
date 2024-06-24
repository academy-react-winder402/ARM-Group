// ** Date
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";

const DateGenerator = (RawDate) => {
  var date = new DateObject(RawDate);
  date.convert(persian);

  const MonthGenerator = (MonthNumber) => {
    switch (MonthNumber) {
      case "01":
        return "فروردین";
      case "02":
        return "اردیبهشت";
      case "03":
        return "خرداد";
      case "04":
        return "تیر";
      case "05":
        return "مرداد";
      case "06":
        return "شهریور";
      case "07":
        return "مهر";
      case "08":
        return "آبان";
      case "09":
        return "آذر";
      case "10":
        return "دی";
      case "11":
        return "بهمن";
      case "12":
        return "اسفند";
    }
  };

  const FirstZeroRemover = (text) => {
    if (text[0] == 0) {
      return text.slice(1);
    } else return text;
  };

  return (
    date.format("YYYY") +
    " / " +
    MonthGenerator(date.format("MM")) +
    " / " +
    FirstZeroRemover(date.format("DD"))
  );
};

export default DateGenerator;
