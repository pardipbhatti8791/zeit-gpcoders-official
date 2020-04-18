import LayoutPage from '../../LayoutPage';
import Wave from '../../Wave';
import Link from 'next/link';

function callback(key) {
    console.log(key);
}

function AboutPage(props) {
    return (
        <LayoutPage>
            <div className="page-banner about-banner">
                <div className="container">
                    <div className="pagebanner-text text-white">
                        <h1>
                            <strong className="font-900">About</strong> Us  </h1>
                        <p>
                            What makes a company great? That’s simple.
                            It’s the people who work here.
                        </p>
                        <p>
                            <Link href="/services">
                                <a className="btn btn-outline-secondary">
                                    Services</a>
                            </Link>

                        </p>
                    </div>
                </div>
                <Wave />
            </div>
            <div className="about-intro-sec sec-padding">
                <div className="container">
                    <div className="intro-text">
                        <h1 className="widget-title font-50">The Day When GPCODERS Was Born</h1>
                        <p>On one fine winter of 2015, Pardip got a Shopify project. Creating an e-commerce website with Shopify can be tricky. But Pardip was looking for a long haul. So, he took that project and get along.
                             That very first project of e-commerce website set the foundations of GPCODERS.</p>
                        <p>That wasn’t it. This is where the story of designing and development starts. Pardip was determined to prepare himself for a long haul. He crafted this name which stands for “A Group of Elite Coders”. This was the vision. And then the expansion starts. In two years,
                             GPCODERS evolve itself to be one of the finest web development and mobile app development company.</p>
                        <p>The days were full of ups and downs but spirits were never lit down. In the dawn of 2018, we decided to test our understanding in the realm of digital marketing as well. In such small period of time, no one can imagine growing like this. Our experience is full of success but the main learning points were those where we lack.
                            Our precision and wits to learn to help us grow in this dynamic world of web and mobile app development.</p>
                        <p>Yes, we fall and rise from the ashes of our mistakes, which helped us to reforge ourselves into a better version. December 2015 is still fresh in front of our eyes and we still remember how tiny we started. Never forget who you were at the start of the journey.
                            And this has been one heck of a journey where we helped businesses to grow along with ourselves.</p>
                    </div>
                </div>
            </div>
            <div className="technology-sec position-relative text-white sec-paddingfull">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="position-relative ">
                                <div className="iconbox">
                                    <ul className="d-flex icon-list">
                                        <li>
                                            <img src="/static/media/gpcodersimages/technology-logos/angular.png" />
                                            <div className="text-box">Angular</div>
                                        </li>
                                        <li>
                                            <img src="/static/media/gpcodersimages/technology-logos/bootstrap.png" />
                                            <div className="text-box">Bootstrap</div>
                                        </li>
                                        <li>
                                            <img src="/static/media/gpcodersimages/technology-logos/flutter.png" />
                                            <div className="text-box">Flutter</div>
                                        </li>
                                        <li>
                                            <img src="/static/media/gpcodersimages/technology-logos/mongo.png" />
                                            <div className="text-box">MongoDB</div>
                                        </li>
                                        <li>
                                            <img src="/static/media/gpcodersimages/technology-logos/mysql.png" />
                                            <div className="text-box">MySQL</div>
                                        </li>
                                        <li>
                                            <img src="/static/media/gpcodersimages/technology-logos/node.png" />
                                            <div className="text-box">Node JS</div>
                                        </li>
                                        <li>
                                            <img src="/static/media/gpcodersimages/technology-logos/php.png" />
                                            <div className="text-box">PHP</div>
                                        </li>
                                        <li>
                                            <img src="/static/media/gpcodersimages/technology-logos/react.png" />
                                            <div className="text-box">React</div>
                                        </li>
                                        <li>
                                            <img
                                                src="/static/media/gpcodersimages/technology-logos/Sass.png"
                                                alt="sass"
                                            />
                                            <div className="text-box">Sass</div>
                                        </li>
                                        <li>
                                            <img src="/static/media/gpcodersimages/technology-logos/swift.png" />
                                            <div className="text-box">Swift</div>
                                        </li>
                                        <li>
                                            <img src="/static/media/gpcodersimages/technology-logos/vuejs.png" />
                                            <div className="text-box">VueJs</div>
                                        </li>
                                        <li>
                                            <img src="/static/media/gpcodersimages/technology-logos/laravel.png" />
                                            <div className="text-box">Laravel</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="textcol">
                                <h1 className="widget-title">
                                    <span className="font-300">We work on</span>
                                    <br />
                  Major Technologies
                </h1>
                                <p>For the past couple of decades, technology evolves exponentially. Our team is mix-bag of experience, skills, and dedication. We are well versed and up to date team of developers, designers and strategists.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="why-choose-us sec-paddingfull">
                <div className="container">
                    <div className="choose-box">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="text-box">
                                    <h1 className="widget-title font-50">Why Choose Us?</h1>
                                    <p>You can completely rely on app development services because:</p>
                                    <ul className="list-icon">
                                        <li>We build attractive as well as sophisticated products in order to gain          .      customer's satisfaction at the most.
</li>
                                        <li>We make use of the best development methodologies with the best
                                        functionalities.
</li>
                                        <li>We deal with the latest and advanced platforms, frameworks, and
                                        programming languages to offer the best solutions.
</li>
                                        <li>We adopt a communicative, collaborative, and transparent strategy for
                                        delivering our services.
</li>
                                    </ul>
                                    <p>So, if you're looking for trusted and proven app development services, you can surely count on GP Coders. We have a proven track record of delivering high standard and quality services. So, be ready to convert your ideas into actions with our assistance and guidance.  </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-block d-md-none img-box">
                                    <img src="/static/media/gpcodersimages/our-expertise.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPage>
    );
}

export default AboutPage;
