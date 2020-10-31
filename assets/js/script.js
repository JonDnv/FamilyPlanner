var sun;
var sunForm;
var mon;
var monForm;
var tue;
var tueForm;
var wed;
var wedForm;
var thu;
var thuForm;
var fri;
var friForm;
var sat;
var satForm;

sun = moment().startOf("week");
sunForm = sun.format("YYYYMMDD");
mon = moment(sun).add(1, "day");
monForm = mon.format("YYYYMMDD");
tue = moment(sun).add(2, "day");
tueForm = tue.format("YYYYMMDD");
wed = moment(sun).add(3, "day");
wedForm = wed.format("YYYYMMDD");
thu = moment(sun).add(4, "day");
thuForm = thu.format("YYYYMMDD");
fri = moment(sun).add(5, "day");
friForm = fri.format("YYYYMMDD");
sat = moment(sun).add(6, "day");
satForm = sat.format("YYYYMMDD");


