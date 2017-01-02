import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from 'react-table';
import DownloadLink from 'react-download-link'
import Papa from 'papaparse';

import { } from '../actions/';
import Main from '../components/App';

class FileOutput extends Component {
  
  generateFile() {   
    return Papa.unparse(this.props.transactions);
  }
  
  render() {
    const { actions } = this.props;
    const { transactions } = this.props;
    const { exportFile } = this.props;
    const columns = [{
      header: 'Date',
      accessor: 'Date'
    },
    {
      header: 'Payee',
      accessor: 'Payee'
    },
    {
      header: 'Category',
      accessor: 'Category'
    },
    {
      header: 'Memo',
      accessor: 'Memo'
    },
    {
      header: 'Outflow',
      accessor: 'Outflow'
    },
    {
      header: 'Inflow',
      accessor: 'Inflow'
    }
    ];
  return <div><ReactTable data={transactions} columns={columns} />
    <DownloadLink filename="jlp_card_ynab.csv"
    label="Download YNAB file"
    exportFile={ this.generateFile.bind(this) }/></div>
  }
}

FileOutput.propTypes = {
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  const props = {
    transactions: state.transactions
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(FileOutput);
