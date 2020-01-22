import React, { Component } from 'react';
import Boutique from './BoutiqueComponent';
import AboutUs from './AboutComponent';
import FashionInfo from './FashionInfoComponent';
import Create from './CreateComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FASHIONS } from '../shared/fashions';
import { MODES } from '../shared/modes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fashions: FASHIONS,
            modes: MODES
              
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                    fashion={this.state.modes.filter(fashion => fashion.featured)[0]}
                    
                />
            );
        }

        const FashionWithId = ({match}) => {
            return (
                <FashionInfo 
                    fashion={this.state.modes.filter(fashion => fashion.id === +match.params.fashionId)[0]}
                    fashions={this.state.fashions.filter(fashion => fashion.fashionId === +match.params.fashionId)}
                />
            );
        }; 

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/boutique' render={() => <Boutique 
                        fashions={this.state.fashions} />} />
                    <Route path='/boutique/:fashionId' component={FashionWithId} /> 
                    <Route exact path='/aboutus' component={AboutUs}/>} />
                    <Route exact path='/createaccount' component={Create} /> 
                    <Redirect to='/Home' />
                </Switch> 
                        
                <Footer/>
            </div>
        );
    };
}

export default Main;