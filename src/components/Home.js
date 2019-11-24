import React from 'react';
import {getDataService, getBooksService , addBooksService} from '../restService/bookService'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            authorId: '',
            price:'',
            data: [],
            books: []
        };

        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        getDataService()
            .then((res) => {
                if (res.status === 200 && res.data.content) {
                    this.setState({data: res.data.content});
                    console.log(this.state.data);
                }
            })
            .catch((error) => {
                console.log("in App.js file error" + error);
            });
        getBooksService()
            .then((res) => {
                if (res.status === 200 && res.data) {
                    this.setState({books: res.data.payload});
                    console.log(this.state.books);
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
        event.preventDefault();
        const book = event.target;
        const data = new FormData(book);
        console.log(JSON.parse(stringifyFormData(data)));
        addBooksService(JSON.parse(stringifyFormData(data)))
            .then((res) => {
                if (res.status === 200) {
                        alert("book added");
                }
            })
            .catch((error) => {
                alert("try again");
                console.log("in App.js file error" + error);
            });
    }

    render() {
        const data = this.state.data;
        const books = this.state.books;
        return (
            <div className="container">

                {
                    books ?
                        <div>
                            {
                                this.state.books.map((book, index) => {
                                   return(
                                       <div key={index}>
                                           <div className="card">
                                               <div className="card-header">
                                                   {book.id}
                                               </div>
                                               <div className="card-body">
                                                   <h5 className="card-title">book name :{book.name}</h5>
                                                   <p className="card-text">price : {book.price}</p>
                                                   <p className="card-text">author : {book.author.name}</p>
                                                   {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                                               </div>
                                           </div>
                                           <br/>
                                       </div>

                                   );
                                })
                            }
                        </div>

                        :
                        <div>
                            no books
                        </div>
                }


                <button type="button" className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#myAddModal">Add
                </button>


                {/*add popUp*/}
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
                                                <label htmlFor="nameInput">Author Id</label>
                                                <input type="text"
                                                       name="authorId"
                                                       value={this.state.authorId}
                                                       onChange={this.handleChange}
                                                       className="form-control"
                                                       id="nameInput" placeholder="Author Id"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="nameInput">Name</label>
                                                <input name="name" type="text"
                                                       value={this.state.name}
                                                       onChange={this.handleChange}
                                                       className="form-control"
                                                       id="emailInput" placeholder="book name"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="nameInput">Price</label>
                                                <input name="price"
                                                       type="text"
                                                       value={this.state.price}
                                                       onChange={this.handleChange}
                                                       className="form-control"
                                                       id="emailInput" placeholder="price"/>
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
    console.log("calling in stringifyFormData function  ", JSON.stringify(data, null, 2));
    return JSON.stringify(data, null, 2);
}

export default Home;
