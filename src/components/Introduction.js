import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './introduction.cssmodule.css';

class Introduction extends React.Component {

  render() {
    return (
      <div styleName="introduction-component">
        <h1>John Lewis Partnership Card Export Converter</h1>
      <h2>Usage</h2>
      <ol>
      <li>Login to the <a href="https://servicing-card.johnlewisfinance.com/">
            John Lewis Partnership portal website</a>.</li>
      <li>Do a transaction search by specifying the 'from' and 'to' dates. 
          (Be careful about simply viewing a statement. It won't work right...)</li>
      <li>Click export button and download the CSV file.</li>
      <li>Click the upload button to the left and pick the file downloaded.</li>
      <li>Make sure that the Transaction Year is set correctly. (Sorry, but it only
      supports one year at a time, so try to make sure your transactions don't 
      cross New Years Eve!)</li>
      <li>Click the Download link. The CSV that is downloaded can be imported into YNAB.</li>
      </ol>
      <div>Nothing is sent to the server. All processing is done in the browser, so
        your transaction information isn't leaving your computer.</div>
      <div>One warning: a problem with the site means that you cannot export the whole statement,
      as it will only export the first page. Instead, make sure to do a transaction search for the date
      range you need and then export to get the full list. I raised this problem with support and they
      brushed me off saying something about "taking it on as a feature request". Morons.</div>
      <h2>Change Log</h2>
        <div>03-Feb-2017 - JL decides to switch from UTF16LE to Western - ISO Latin 1 encoding.</div>
        <div>26-Jan-2017 - Initial launch</div>
      <h2>Why This Exists</h2>
      <div>
        In October of 2016, The John Lewis Partnership made a bunch of changes
      to the customer technology systems for the John Lewis Partnership Credit Card.
      The result was a general disaster of a website and customer experience. The site was slower,
      had reduced functionality and payments would fail, causing several customers to be charged
      late fees.
      </div>
      <div>For those users who make use of the export function to move their data into
      Personal Finance tools like You Need a Budget (YNAB) or Microsoft Money, the most irritating
      problem was the loss of OFX-format exports of statements. Instead, the only export now
      available is some sort of UTF-16LE encoded CSV with a bunch of header rows. When I called
      JLP Customer Service about this, the uninformed representative told me this was a feature 
      because "those other formats were old and now you can use PDF". Ugh.</div>
      <div>So I made this little tool and hope it can help others. It takes the export from the
      JLP website and formats it into the YNAB CSV format for download. I might make an OFX version
      as well if I find the time.
      </div>
      <h2>Support and Contributing</h2>
      <div>
        Feel free to log issues or submit pull requests at <a href='https://github.com/clancychilds/jlp-ynab-converter'>https://github.com/clancychilds/jlp-ynab-converter</a> Will try to help out where possible.
      </div>
      </div>
    );
  }
}

Introduction.displayName = 'Introduction';
Introduction.propTypes = {};
Introduction.defaultProps = {};

export default cssmodules(Introduction, styles);
