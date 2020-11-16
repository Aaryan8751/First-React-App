import React from 'react';
import { CardSubtitle } from 'reactstrap';
import {Loading} from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform,Fade,Stagger } from 'react-animation-components';

function RenderCard({item,isLoading,errMess}){
    if (isLoading){
        return(
            <Loading />
        );
    }

    else if (errMess){
        return(
            <h4>
                {errMess}
            </h4>
        );
    }
    else{
        return(
            <FadeTransform in 
                transformProps={{
                    exitTransform:'scale(0.5) translateY(-50%)'
                }}>
                    <div className="card">
                    <img className="card-img-top" src={baseUrl + item.image} alt={item.name} />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <p className="card-text">{item.description}</p>
                    </div>
                    </div>
                
                </FadeTransform>
            
        );
    }
    
}


function Home(props){
    return(
        <div className="container">
            <h4>
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish} isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess}/>
                    </div>
                    <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                    </div>
                    <div className="col-12 col-md m-1">
                    <RenderCard item={props.leaders} isLoading={props.leaderLoading} errMess={props.leaderErrMess} />
                    </div>

                </div>
            </h4>
        </div>
    );
}

export default Home;