import React,{useEffect,useState}from "react";
import axios from "axios";
const apiUrl = "https://localhost:7183/api/Employee";



class GetRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
      isEditUser: false,
    };
  }




  componentDidMount() {
    axios
      .get(apiUrl + "/GetAlldetails")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  

  deleteUser(id) {
    const { users } = this.state;
    console.log(id)
    axios.delete(`${apiUrl}/DeleteCustomerDetails?uid=${id}`).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.id !== id),
      });
    });

    
  }
  

  

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div className="hole">
        <table  >
            <thead className="btn">
            <tr className="tab">
                    <th>EmployeeCode</th>
                    <th>EmployeeName</th>
                    <th>CTC</th>
                    <th>Basic</th>
                    <th>PF</th>
                    <th>Medical</th>
                    <th>Telephone</th>
                    <th>LTA</th>
                    <th>SPI Allowance</th>
                    <th>Action</th>
                  </tr>
            </thead>
            <tbody className="list">
            {users.map((user)=>(
                <tr key={user.id} >
                    <td>{user.employeeCode}</td>
                    <td>{user.employeeName}</td>
                    <td>{user.ctc}</td>
                    <td>{user.basic}</td>
                    <td>{user.pf}</td>
                    <td>{user.medical}</td>
                    <td>{user.telephone}</td>
                    <td>{user.lta}</td>
                    <td>{user.spiallowance}</td>
                  <td>
                    <div>
                    <button
                      variant="danger"
                      onClick={() => this.deleteUser(user.id)}
                    >
                      Delete
                    </button>
                    {/* <button
                      variant="danger"
                      onClick={() => this.props.editUser(user.id)}
                    >
                      Edit
                    </button> */}

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default GetRegister;