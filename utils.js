export const generateId = (fullName, postfixNumber) => {
  const names = fullName.split(' ')
  names.length = 2

  let id = 'S'

  names.forEach((name, index) => {

    const charsCount = (index === 0) ? 3 : 2
    const namePart = name.substring(0, charsCount)

    id += namePart
  })
  id += `${postfixNumber}`

  return id.toUpperCase()
}

const convertArrayOfObjectsToCSV = (arrayOfObjects) => {
  let result, ctr, keys, columnDelimiter, lineDelimiter;

  if (arrayOfObjects == null || !arrayOfObjects.length) {
    return null;
  }

  columnDelimiter = columnDelimiter || ',';
  lineDelimiter = lineDelimiter || '\n';

  keys = Object.keys(arrayOfObjects[0]);

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  arrayOfObjects.forEach(item => {
    ctr = 0;
    keys.forEach(function(key) {
      if (ctr > 0) result += columnDelimiter;

      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

export const downloadCSV = (arrayOfObjects,filename)=> {
  
  var data, filename, link;


  var csv = convertArrayOfObjectsToCSV(arrayOfObjects);
  alert(csv)
  if (csv == null) return;

  filename = filename || 'export.csv';

  if (!csv.match(/^data:text\/csv/i)) {
    csv = 'data:text/csv;charset=utf-8,' + csv;
  }
  data = encodeURI(csv);
  
  link = document.createElement('a');
  link.setAttribute('href', data);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
