import React from 'react';
import {getDataService} from '../restService/bookService'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            data:[
                {
                    "id": 1,
                    "title": "SAVE LIFE FOR POOR CHILDREN",
                    "date": "2019-07-05",
                    "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\nNullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
                },
                {
                    "id": 3,
                    "title": "SAVE LIFE FOR POOR CHILDREN",
                    "date": "2019-07-12",
                    "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n\nNullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
                },
                {
                    "id": 4,
                    "title": "Save Life for poor children",
                    "date": "2019-07-04",
                    "content": "Enter text here...Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the tEnter text here...Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the tEnter text here...Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the tEnter text here...Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the tEnter text here...Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the tEnter text here...Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the tEnter text here...Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the textarea tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.Note: The maxlength attribute of the t"
                },
                {
                    "id": 5,
                    "title": "Gg",
                    "date": "2019-07-26",
                    "content": "Gy"
                },
                {
                    "id": 6,
                    "title": "SAVE LIFE FOR POOR CHILDREN",
                    "date": "2019-07-10",
                    "content": "cnewnewnewnewnewnewnewnewnewnewnewnewnewnewnewnew"
                }
            ]
        };

        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        getDataService()
            .then((res) => {
                if (res.status === 200 && res.data.content) {
                    console.log("got data", res.data.content);
                    this.setState({data: res.data.content});
                    console.log(this.state.data);
                }
            })
            .catch((error) => {
                console.log("in App.js file error" + error);
            });
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
        // const book = event.target;
        // const data = new FormData(book);
        // console.log(JSON.parse(stringifyFormData(data)));
    }

    render() {
        const data = this.state.data;
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

                    {
                        data ?
                            <tbody>
                            {
                                this.state.data.map((singleData, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{singleData.id}</td>
                                            <td>{singleData.date}</td>
                                            <td>{singleData.title}</td>
                                            <td>{singleData.title}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>

                            :
                            <div></div>
                    }

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
