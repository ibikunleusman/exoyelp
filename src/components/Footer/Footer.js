import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div className="container">
                    <div className="col-md-12">
                        <p>Designed and Built By Abdulhakeem Usman</p>
                    </div>
                    <div className="col-md-12">
                        <span>Github</span>
                        <span>Website</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;