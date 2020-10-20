import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p> Copyright © {(new Date().getFullYear())} Samresh Kumar</p>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
