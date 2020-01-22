import React from 'react';
import { Card, CardImg, CardBody, CardText, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderFashion({fashion}) {
    return (
        <div className="col-md-3">
                <Card>
                    <CardImg top src={fashion.image} alt={fashion.name}/>
                    <CardBody>
                        <CardText>{fashion.description}</CardText>
                    </CardBody>
                </Card>
         </div>
            );
        }

function RenderFashions({fashions}) {
            if (fashions){
                return (
                    <div className="col-md-5">
                        <h4>fashions</h4>
                        {fashions.map(fashion => {
                            return (
                                <div key={fashion.id}>
                                    <p>{fashion.text}</p>
                                    <p>{fashion.author}   
                                    </p>
                                </div>
                            );
                        })}
                    </div> 
                    );
                }
             return <div />;
        }   
    

function FashionInfo(props) {
        if (props.fashion) {
            return (
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/boutique">Boutique</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.fashion.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.fashion.name}</h2>
                        <hr />
                    </div>
                </div>
                    <div className="row">
                        <RenderFashion fashion={props.fashion} />
                        <RenderFashions fashions={props.fashions} />
                    </div>
                </div>
            );
        }
        return <div />;
    }

export default FashionInfo;