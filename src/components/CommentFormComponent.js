import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, Button,Row, Label} from 'reactstrap';
import { LocalForm, Control,Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class Commentform extends Component {

    constructor(props){
        super(props);

        this.state={
            isModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId,values.rating,values.author,values.Comment);
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }


    render() {
        return (
            <React.Fragment>
                <div className="mt-2">
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>
                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        <strong>
                            SubmitComment
                        </strong>
                    </ModalHeader>
                    <ModalBody>
                        <div className="container">
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="Rating">Rating</Label>
                                <Control.select model=".Rating" name="Rating" className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" name="author" className="form-control" validators={{
                                    required,maxLength:maxLength(15),minLength:minLength(2)
                                }}/>
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />

                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="Comment">Comment</Label>
                                <Control.textarea model=".Comment" name="Comment" className="form-control" rows="6" validators={{
                                    required
                                }}/>
                                <Errors
                                    className="text-danger"
                                    model=".Comment"
                                    show="touched"
                                    messages={{
                                        required:'Required'
                                    }}
                                />
                            </Row>
                            <Row className="form-group">
                                <Button className="bg-primary" type="submit" value="submit">Submit</Button>
                            </Row>

                        </LocalForm>

                        </div>
                        
                    </ModalBody>
                </Modal>

            </React.Fragment>
        )
    }
}

export default Commentform