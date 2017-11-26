import React, { Component } from 'react';
import faker from 'faker'

import TransactionList from './TransactionList'
import TransactionDetails from './TransactionDetails'

//Main Component
//Fetches all transactions and passes them to the TransactionList Component
//Sends showDetails state to the TransactionDetails Component
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transactions: [],
      transaction: {},
      showDetails: false
    }
    this.handleShowDetails = this.handleShowDetails.bind(this)
  }

  componentDidMount() {
    let transactions = this.getTransactions()
    this.setState({ transactions })
  }

  getTransactions() {
    return Array.apply(null, { length: 20 }).map(() => {
      let transaction = faker.helpers.createTransaction()
      transaction.recipient = faker.helpers.userCard()
      return transaction
    })
  }

  handleShowDetails(transaction) {
    this.setState({ transaction, showDetails: true })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="page-header">
              <h1>Transactions</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <TransactionList
              selectedTransaction={this.state.transaction}
              transactions={this.state.transactions}
              handleShowDetails={this.handleShowDetails}
            />
          </div>
          <div className="col-sm-9">
            <TransactionDetails
              transaction={this.state.transaction}
              showDetails={this.state.showDetails}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App