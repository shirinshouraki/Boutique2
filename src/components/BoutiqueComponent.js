import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderBoutiqueItem({fashion}) {
    return(
        <Card>
         <Link to={`/boutique/${fashion.id}`}>
            <CardImg width="100%" src={fashion.image} alt={fashion.name} />
                <CardImgOverlay>
                    <CardTitle>{fashion.name}</CardTitle>
                </CardImgOverlay> 
          </Link>   
        </Card> 
    );
}

function Boutique(props) {
        const boutique = props.fashions.map(fashion => {
            return (
                <div key={fashion.id} className="col-md-3 mb-3">
                    <RenderBoutiqueItem fashion={fashion} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Boutique</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Boutique</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {boutique}
                </div>
            </div>
        );
    }

export default Boutique;