import React from 'react';
import Link from 'next/link';
class FooterContact extends React.Component {
    render() {
        return (
            <div className="site-footer">
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">Copyright &copy; 2020 GPcoders</div>
                            <div className="col-md-6">
                                <div className="social">
                                    <Link href="/">
                                        <a>
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a>
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a>
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <a>
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FooterContact;
