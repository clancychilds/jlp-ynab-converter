import { UPLOAD_FILE, ADD_TRANSACTION } from './const';
import Papa from 'papaparse';
import changeStatus from './changeStatus';

function uploadAndParseFile(file) {
  return (dispatch, getState) => {
    Papa.parse(file, {
    	encoding: "UTF-16LE",
      skipEmptyLines: true,
      complete: function(results) {
        var numberTransactions = 0;
        const year = getState().inputFile.year;
        results.data.slice(3).forEach(function(line){
          var transaction = {};
          
          var parsedDate = new Date(line[0]);
          parsedDate.setYear(year);
          transaction.parsedDate = parsedDate;
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
