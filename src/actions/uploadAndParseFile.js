import { UPLOAD_FILE, ADD_TRANSACTION } from './const';
import Papa from 'papaparse';
import changeStatus from './changeStatus';

function uploadAndParseFile(file) {
  return (dispatch, getState) => {
    Papa.parse(file, {
    	encoding: "ISO-8859-1",
      skipEmptyLines: true,
      complete: function(results) {
        var numberTransactions = 0;
        results.data.slice(1).forEach(function(line){
          if (line[0] == 'Pending') 
            return;
          var transaction = {};
          transaction.parsedDate = new Date(line[0]);
          transaction.Date = transaction.parsedDate.toLocaleDateString('en-US');
          transaction.Payee = line[1];
          transaction.Category = '';
          transaction.Memo = '';
          if (line[2].startsWith("+ ")) {
            transaction.Outflow = '';
            transaction.Inflow = line[2].replace(/[^\d\.]/g, '');
          } else {
            transaction.Outflow = line[2].replace(/[^\d\.]/g, '');
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
