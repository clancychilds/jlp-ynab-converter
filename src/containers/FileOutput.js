import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Table from 'rc-table';
import DownloadLink from 'react-download-link';
import Papa from 'papaparse';
import ReactGA from 'react-ga';

import { } from '../actions/';
import Main from '../components/App';

class FileOutput extends Component {
  
  generateFile() {
    ReactGA.event({
      category: 'File Download',
      action: 'YNAB CSV Downloaded'
    });   
    return Papa.unparse({
      data: this.props.transactions, 
      fields: ['Date','Payee','Category','Memo','Outflow','Inflow']
    });
  }
  
  render() {
    const { actions } = this.props;
    const { transactions } = this.props;
    const { exportFile } = this.props;
    const columns = [{
      title: 'Date',
      key: 'Date',
      dataIndex: 'Date'
    },
    {
      title: 'Payee',
      key: 'Payee',
      dataIndex: 'Payee'
    },
    {
      title: 'Outflow',
      key: 'Outflow',
      dataIndex: 'Outflow'
    },
    {
      title: 'Inflow',
      key: 'Inflow',
      dataIndex: 'Inflow'
    }
    ];
  return <div style={{display: ((transactions.length > 0) ? 'block' : 'none')}}>
    <DownloadLink filename="jlp_card_ynab.csv"
    label="-> Download YNAB-formatted CSV file <-"
    exportFile={ this.generateFile.bind(this) } style={{color: 'lightgreen'}}/>
    <Table data={transactions} columns={columns} prefixCls='preview-table'/>
    </div>
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
