import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };

        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log('Change detected. State updated' + name + ' = ' + value);
    }

    handleSubmit(event) {

        alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email);
        event.preventDefault();
        const book = event.target;
        const data = new FormData(book);
        console.log(JSON.parse(stringifyFormData(data)));
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>

                <button type="button" className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#myAddModal">Add
                </button>


                <div className="modal fade" id="myAddModal" tabIndex="-1" role="dialog"
                     aria-labelledby="myModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4>Add data</h4>
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                {/*// <!-- BASIC FORM ELEMENTS -->*/}
                                <div className="row mt">
                                    <div className="col-lg-12">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="nameImput">Name</label>
                                                <input type="text"
                                                       name="name"
                                                       value={this.state.name}
                                                       onChange={this.handleChange}
                                                       className="form-control"
                                                       id="nameImput" placeholder="Name"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="emailImput">Name</label>
                                                <input name="email" type="email"
                                                       value={this.state.email}
                                                       onChange={this.handleChange}
                                                       className="form-control"
                                                       id="emailImput" placeholder="email@domain.com"/>
                                            </div>
                                            <input type="submit" value="Submit" className="btn btn-primary"/>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    console.log("colling in stringifyFormData function after a for loop ", JSON.stringify(data, null, 2));
    return JSON.stringify(data, null, 2);
}

export default Home;
