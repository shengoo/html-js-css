var x =[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
console.log(x)


// filter

var columns = [
    {
      "ColumnName": "chinese_name",
      "IsSortable": false,
      "IsDetailedColumn": false,
      "ColumnIndex": 0,
      "ColumnType": null,
      "ColumnFormat": null,
      "ColumnStyle": null,
      "ColumnHeaderCN": "",
      "ColumnHeaderEN": "",
      "DisplayHeader": null,
      "Culture": "zh-CN"
    },
    {
      "ColumnName": "volume",
      "IsSortable": false,
      "IsDetailedColumn": false,
      "ColumnIndex": 0,
      "ColumnType": "decimal",
      "ColumnFormat": "{0:N2}",
      "ColumnStyle": null,
      "ColumnHeaderCN": "面额",
      "ColumnHeaderEN": "Volume",
      "DisplayHeader": null,
      "Culture": "zh-CN"
    },
    {
      "ColumnName": "number",
      "IsSortable": false,
      "IsDetailedColumn": false,
      "ColumnIndex": 0,
      "ColumnType": null,
      "ColumnFormat": "{0:N0}",
      "ColumnStyle": null,
      "ColumnHeaderCN": "次数/笔数",
      "ColumnHeaderEN": "Number",
      "DisplayHeader": null,
      "Culture": "zh-CN"
    },
    {
      "ColumnName": "volume_year",
      "IsSortable": false,
      "IsDetailedColumn": false,
      "ColumnIndex": 0,
      "ColumnType": "decimal",
      "ColumnFormat": "{0:N2}",
      "ColumnStyle": null,
      "ColumnHeaderCN": "面额",
      "ColumnHeaderEN": "Volume",
      "DisplayHeader": null,
      "Culture": "zh-CN"
    },
    {
      "ColumnName": "number_year",
      "IsSortable": false,
      "IsDetailedColumn": false,
      "ColumnIndex": 0,
      "ColumnType": null,
      "ColumnFormat": "{0:N0}",
      "ColumnStyle": null,
      "ColumnHeaderCN": "次数/笔数",
      "ColumnHeaderEN": "Number",
      "DisplayHeader": null,
      "Culture": "zh-CN"
    },
    {
      "ColumnName": "volume_last_year",
      "IsSortable": false,
      "IsDetailedColumn": false,
      "ColumnIndex": 0,
      "ColumnType": "decimal",
      "ColumnFormat": "{0:N2}",
      "ColumnStyle": null,
      "ColumnHeaderCN": "面额",
      "ColumnHeaderEN": "Volume",
      "DisplayHeader": null,
      "Culture": "zh-CN"
    },
    {
      "ColumnName": "number_last_year",
      "IsSortable": false,
      "IsDetailedColumn": false,
      "ColumnIndex": 0,
      "ColumnType": null,
      "ColumnFormat": "{0:N0}",
      "ColumnStyle": null,
      "ColumnHeaderCN": "次数/笔数",
      "ColumnHeaderEN": "Number",
      "DisplayHeader": null,
      "Culture": "zh-CN"
    }
  ];
var formatCloumns = columns.reduce(function (previousValue, currentValue, currentIndex, array) {

    if (currentValue.ColumnFormat)
         previousValue.push(currentValue);
    
        return previousValue;
}, []);
console.log(formatCloumns)