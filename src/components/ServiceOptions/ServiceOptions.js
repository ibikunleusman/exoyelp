import React from 'react';
import './ServiceOptions.css';

class ServiceOptions extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    containsClass(element, cl) {
        return (' ' + element.className + ' ').indexOf(' ' + cl + ' ') > -1;
    }

    handleClick() {
        const el_food = document.getElementById('option_food');
        const el_shop = document.getElementById('option_shop');
        const el_auto = document.getElementById('option_auto');
        const el_home = document.getElementById('option_home');
        const el_night = document.getElementById('option_night');
        
        if (this.containsClass(el_food, 'option-food')) {
            window.open('https://www.yelp.com/search?cflt=restaurants');
        } 
        else if (this.containsClass(el_shop, 'option-shopping')) {
            window.open('https://www.yelp.com/search?cflt=shopping');
        }
        
        else if (this.containsClass(el_auto, 'option-auto')) {
            window.open('https://www.yelp.com/search?cflt=auto');
        }
        
        else if (this.containsClass(el_night, 'option-nightlife')) {
            window.open('https://www.yelp.com/search?cflt=nightlife');    
        }
        
        else if (this.containsClass(el_home, 'option-home')) {
            window.open('https://www.yelp.com/search?cflt=homeservices');
        }
        
        else {
            window.open('https://www.yelp.com/search?cflt=active');
        }
    }

    render() {
        return (
            <div className="ServiceOptions mt-5 mb-5">
                <div className="container">
                    <div className="row options-row-one justify-content-around">
                        <div id="option_food" className="options option-food col-md-2" onClick={this.handleClick}>
                            <p>Food</p>
                        </div>
                        <div id="option_shop" className="options option-shopping col-md-2" onClick={this.handleClick}>
                            <p>Shop</p>
                        </div>
                        <div id="option_auto" className="options option-auto col-md-2" onClick={this.handleClick}>
                            <p>Auto</p>
                        </div>
                        <div id="option_home" className="options option-home col-md-2">
                            <p>Home</p>
                        </div>
                        <div id="option_night" className="options option-nightlife col-md-2">
                            <p>Nightlife</p>
                        </div>
                        <div id="option_active" className="options option-activelife col-md-2">
                            <p>Active Life</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceOptions;