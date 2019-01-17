import React, {Component} from 'react';
import Table from 'react-bootstrap/lib/Table'
import axios from 'axios'
import * as env from './env'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val, this.props.eventKey)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val || this.props.eventKey !== prevProps.eventKey) {
      this.getCustomerDetails(this.props.val, this.props.eventKey)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id, url) {
    axios.get(`${env[url]}/accounts`, {
      headers: {
        "x-entity": parseInt(id)
    }}).then(response => {
      this.setState({customerDetails: response.data})
    })
  };


  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">

    <Table striped bordered condensed hover>  
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Currency Type</th>
            <th>Balance</th>
            <th>Locked</th>
          </tr>
        </thead>
        <tbody>
    {
      this.state.customerDetails.map((customerDetail, index) => 
          <tr key={index}>
          <td>{customerDetail.name}</td>
          <td>{customerDetail.number}</td>
          <td>{customerDetail.currency_type}</td>
          <td>{customerDetail.balance}</td>
          <td>{customerDetail.locked}</td>
          <td>

          </td>
          </tr>
      )
    }
        </tbody>
      </Table>
    </div>)
  }
}