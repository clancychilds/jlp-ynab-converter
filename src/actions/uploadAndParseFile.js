import { UPLOAD_FILE, ADD_TRANSACTION } from './const';
import Papa from 'papaparse';
import changeStatus from './changeStatus';

function uploadAndParseFile(file) {
  return (dispatch) => {
    Papa.parse(file, {
    	encoding: "UTF-16LE",
      skipEmptyLines: true,
      complete: function(results) {
    		console.log(results);
        var numberTransactions = 0;
        results.data.slice(3).forEach(function(line){
          var transaction = {};
          var year = '2016';
          var parsedDate = new Date(line[0]);
          parsedDate.setYear(year);
          transaction.Date = parsedDate.toLocaleDateString();
          transaction.Payee = line[1];
          transaction.Category = '';
          transaction.Memo = '';
          if (line[3] == 'CR') {
            transaction.Outflow = '';
            transaction.Inflow = line[2];
          } else {
            transaction.Outflow = line[2];
            transaction.Inflow = '';
          }
          console.log(transaction);
          dispatch(addTransaction(transaction));
          numberTransactions++;
        });
        dispatch(changeStatus(numberTransactions + ' transactions loaded'));
    	}
    });
  }
}

function addTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    transaction
  }
}

module.exports = uploadAndParseFile;
