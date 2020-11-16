import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Commentform from './CommentFormComponent';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import {FadeTransform,Stagger,Fade} from 'react-animation-components';
    function RenderDish({dish}){
        if (dish != null){

            return(
                <div className="col-12 col-md-5 m-1">
                <FadeTransform in 
                transformProps={{
                    exitTransform:'scale(0.5) translateY(-50%)'
                }}>
                    
                    <div className="card" style={{width:"100%"}} >
                        <img className="card-img-top" src={baseUrl+ dish.image } alt={ dish.name } />
                        <div className="card-body">
                            <h5 className="card-title">{dish.name}</h5>
                            <p className="card-text">{dish.description}</p>
                        </div>
                    </div>
            
                
                </FadeTransform>
                </div>
                
            );
        }
        else{
            return (<div>

            </div>);
        }

    }

    function RenderComments({comments,addComment,dishId}){
        if (comments.length!= null){

            return(
                <Stagger in>

                
                        {comments.map((comments)=>{
                     return (
                        <Fade in>

                        
                            <div key={comments.id}>
                                <div className="media">
                                    <div className="media-body">
                                        <p className="mb-0 mt-2">{comments.comment}</p>
                                        <p className="mb-0 mt-2"> -- {comments.author} , {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short',day:'2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                                    </div>
                                </div>
                                
                            </div>
                            </Fade>
                
                    );
                })}
             </Stagger>
                
            );

        }

        else{
            return(
                <div>

                </div>
            );
        }
    }

    function HeadingComment({dish}){
        if (dish!=null){
            return(
                <h3>Comments</h3>
            );
        }
        else{
            return(
                <div>
                    
                </div>
            );
        }
    }



   const Dish = (props)=> {
        if (props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        
        else if(props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>
                            {props.errMess}
                        </h4>
                    </div>
                </div>
            )
        }

        else if (props.dish!=null){
            return(<div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            
                <RenderDish dish={props.dish} />
            
            <div className="col-12 col-md-5 m-1">
                <HeadingComment dish={props.dish}/>
                <RenderComments comments={props.comments} addComment={props.addComment}
                dishId={props.dish.id} />
                <Commentform dishId={props.dish.id} addComment={props.addComment}/>
            </div>
        </div>
        </div>
        );
        }
        else{
            return(
                <div>

                </div>
            );
        }
   
    }


export default Dish;