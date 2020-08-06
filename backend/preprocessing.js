
var fs = require('fs')
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

async function myFunc() {
    // var readme = fs.readFileSync('/Users/shriyashshingare/Desktop/AppsCountry/CoutryCities/ChinesCities.csv','utf-8');
    // var readmeString = readme.toString()
    // readmeString.replace(',',';')
    // console.log(readmeString)

    var ChinesCompany = [];
    var filter = []
    const csvWriter = createCsvWriter({
        path: '/Users/shriyashshingare/Desktop/AppsCountry/CoutryCities/SampleChinesCompany.csv',
        header: [
            { id: 'country_iso_3166-1_alpha-2', title: 'country_iso_3166-1_alpha-2' },
            { id: 'country_name', title: 'country_name' },
            { id: 'company_name', title: 'company_name' },
            { id: 'string_match', title: 'string_match' },
        ]
    });

    fs.createReadStream('/Users/shriyashshingare/Desktop/AppsCountry/CoutryCities/ChinesCompany.csv')
        .pipe(csv())
        .on('data', (row) => {
            var strmatch = []
            let company =row[0]
            let rowdata = { "country_iso_3166-1_alpha-2": 'CN', "country_name": "China", "company_name": company, "string_match": company }
            ChinesCompany.push(rowdata)
        })
        .on('end', () => {
            csvWriter
                .writeRecords(ChinesCompany)
                .then(() => console.log('The CSV file was written successfully'));
            console.log('CSV file successfully processed');
        });
}
myFunc();