import React, { Component } from 'react'
import moment from 'moment'

//Display transaction details if an item is clicked.
//Otherwise display text "Click any account for details."
class TransactionDetails extends Component {

  render() {
    let { account, date, name, amount, type, business, recipient } = this.props.transaction
    let { showDetails } = this.props
    let initialText = <div>Click any account for details.</div>
    let dateFormated = moment(date).format('D MMM, YYYY HH:mm:ss' )

    let renderDetails = <div>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th>Account</th>
            <td><strong>{account}</strong></td>
          </tr>
          <tr>
            <th>Amount</th>
            <td>{amount}</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>{dateFormated}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>{type}</td>
          </tr>
          <tr>
            <th>Business</th>
            <td>{business}</td>
          </tr>
          <tr>
            <th>Recipient Name</th>
            <td>{showDetails && recipient.name}</td>
          </tr>
          <tr>
            <th>Recipient Email</th>
            <td>{showDetails && recipient.email}</td>
          </tr>
          <tr>
            <th>Recipient Company</th>
            <td>{showDetails && recipient.company.name}</td>
          </tr>
          <tr>
            <th>Recipient Company Phone</th>
            <td>{showDetails && recipient.phone}</td>
          </tr>
          <tr>
            <th>Recipient Company Email</th>
            <td>{showDetails && recipient.email}</td>
          </tr>
          <tr>
            <th>Recipient Company Website</th>
            <td>{showDetails && recipient.website}</td>
          </tr>
        </tbody>
      </table>

    </div>

    return (
      <div>
        {this.props.showDetails === true ? renderDetails : initialText}
      </div>
    )
  }
}

export default TransactionDetails
