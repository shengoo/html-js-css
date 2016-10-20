var name1 = '/0158.HK';
var name2 = '002815.SZ';

function getCodeFromRicName(ricname) {
	var result = ricname.replace('/','')
	result = result.substr(0,result.indexOf('.'));
	return result;
}

console.log(getCodeFromRicName(name1));
console.log(getCodeFromRicName(name2));

var a = {
        "Entity": {
            "ID": "TATimeSeries",
            "E": "TATimeSeries",
            "W": {
                "Tickers": ["aCNWSAGBEA",
                    "aCNWSAGTIA",
                    "aCNWSAGHIA",
                    "aCNWSAGSIA",
                    "aCNWSAGMNA",
                    "aCNWSAGLIA",
                    "aCNWSAGJLA",
                    "aCNWSAGHJA",
                    "aCNWSAGSHA",
                    "aCNWSAGJSA",
                    "aCNWSAGZHA",
                    "aCNWSAGANA",
                    "aCNWSAGFJA",
                    "aCNWSAGJNA",
                    "aCNWSAGSDA",
                    "aCNWSAGHEA",
                    "aCNWSAGHBA",
                    "aCNWSAGHUA",
                    "aCNWSAGGUA",
                    "aCNWSAGGXA",
                    "aCNWSAGHAA",
                    "aCNWSAGCNA",
                    "aCNWSAGSNA",
                    "aCNWSAGGIA",
                    "aCNWSAGYUA",
                    "aCNWSAGTBA",
                    "aCNWSAGSXA",
                    "aCNWSAGGAA",
                    "aCNWSAGQIA",
                    "aCNWSAGNIA",
                    "aCNWSAGXJA"],
                "Interval": "Quarterly",
                "IntervalMultiplier": 1,
                "DateRange":"Day",
                "DateRangeMultiplier": 1
            }
        }
    };console.log(JSON.stringify(a))