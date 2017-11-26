import React, { Component } from 'react'

import TransactionItem from './TransactionItem'

//Takes the transaction list and passes each item to TransactionItem
class TransactionList extends Component {

  render() {

    return (
      <div className="list-group">
        {this.props.transactions.map((transaction) => {
          return (
            <TransactionItem
              transaction={transaction}
              selectedTransaction={this.props.selectedTransaction}
              handleShowDetails={this.props.handleShowDetails}
              key={transaction.account}
            />
          )
        })
        }
      </div>
    )
  }
}

export default TransactionList
