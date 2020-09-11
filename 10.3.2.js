let x = ;
switch (typeof x) {
  case "string":
    console.log("Значение - строка");
    break;
  case "number":
    console.log('Значение - число');
    break;
  case "boolean":
    console.log('Значение - лигический тип');
    break;
  default:
    console.log('Тип значения не определен');
    
}
