import React, {Component} from 'react';
import Tab from 'react-bootstrap/lib/Tab'
import Tabs from 'react-bootstrap/lib/Tabs'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'

import MenuItem from 'react-bootstrap/lib/MenuItem'
import CustomerDetails from './CustomerDetails'
import axios from 'axios'


export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedOption: "poc"
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then(response => {
    
      this.setState((prevState) => ({
        ...prevState, 
        customerList: response
      }))
    })
  }


  handleSelect(eventKey, event) {
    console.log(eventKey)
    this.setState((prevState) => ({
      ...prevState, 
      selectedOption: eventKey
    }));
  }
  
  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">

    <div className="select_environment">
        <DropdownButton
            title={this.state.selectedOption}
            id="dropdown-basic-1"
            onSelect={this.handleSelect.bind(this)}
        >
        <MenuItem eventKey="staging" active>STAGING</MenuItem>
        <MenuItem eventKey="dev01">DEV01</MenuItem>
        <MenuItem eventKey="dev02">DEV02</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="poc">POC</MenuItem>
      </DropdownButton>
    </div>

    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        {

          this.state.customerList.data.map((customer, index) => <Tab key={index} eventKey={index} title={customer.name}>
                <CustomerDetails val={customer.id} eventKey={this.state.selectedOption}/>
            </Tab> )
        }
      </Tabs>
    </div>)
  }

}