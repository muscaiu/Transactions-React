import React, { Component } from 'react'

//Displays the transaction account passes the selected item to be enabled in the List 
class TransactionItem extends Component {

  render() {
    let { transaction, selectedTransaction } = this.props
    const style = {
      itemStyle: {
        cursor: "pointer",
      },
      itemSelected: {
        color: "white",
        backgroundColor: "grey"
      }
    }

    return (
      <a className="list-group-item"
        style={Object.assign({},
          style.itemStyle,
          transaction.account === selectedTransaction.account ? style.itemSelected : null)}
        onClick={() => this.props.handleShowDetails(transaction)}>

          {transaction.account}

      </a>
    )
  }
}

export default TransactionItem
