import LayoutContact from '../../LayoutContact';
import Wave from '../../Wave';
import Link from 'next/link';

function callback(key) {
    console.log(key);
}

function ContactPage(props) {
    return (
        <LayoutContact>
            <div className="page-banner about-banner">
                <div className="container">
                    <div className="pagebanner-text text-white">
                        <h1>
                            <strong className="font-900">Contact</strong> Us  </h1>
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
            <div className="sec-padding contactpage-info-row text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="singal-col">
                                <p className="icon">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0)">
                                            <path d="M97.3762 77.1446L77.1358 63.6466C74.5672 61.9475 71.1242 62.5065 69.2253 64.9314L63.3295 72.5119C62.5718 73.511 61.1944 73.8008 60.0983 73.1919L58.9768 72.5736C55.259 70.5471 50.6331 68.0243 41.3128 58.7007C31.9925 49.3771 29.4646 44.7477 27.4381 41.0367L26.8232 39.9152C26.2059 38.8192 26.4902 37.4361 27.4897 36.6723L35.0651 30.7782C37.489 28.8791 38.0488 25.437 36.3516 22.8677L22.8536 2.62735C21.1142 0.0109419 17.6245 -0.774489 14.9318 0.844216L6.46797 5.92842C3.8086 7.49186 1.85752 10.0239 1.02386 12.994C-2.02393 24.099 0.26889 43.2645 28.5014 71.5003C50.9598 93.957 67.679 99.9961 79.1707 99.9961C81.8154 100.007 84.4498 99.6633 87.0029 98.973C89.9735 98.1403 92.506 96.189 94.0685 93.5289L99.1577 85.0702C100.779 82.3768 99.9937 78.885 97.3762 77.1446ZM96.2863 83.3603L91.2087 91.8241C90.0868 93.7441 88.2654 95.1558 86.1261 95.7635C75.8743 98.5781 57.9636 96.2469 30.8593 69.1425C3.7549 42.0381 1.4238 24.129 4.23842 13.8757C4.84692 11.7338 6.26039 9.91006 8.18276 8.7864L16.6465 3.70883C17.8149 3.00581 19.3295 3.34658 20.0843 4.48196L27.4166 15.4903L33.5708 24.7206C34.3078 25.835 34.0656 27.3288 33.0142 28.1534L25.437 34.0475C23.1311 35.8107 22.4726 39.0011 23.8923 41.5331L24.494 42.6263C26.6238 46.5324 29.2716 51.3916 38.9385 61.057C48.6055 70.7221 53.4632 73.3702 57.3675 75.4997L58.4622 76.103C60.9941 77.5225 64.1846 76.8642 65.9478 74.5583L71.8419 66.9811C72.6667 65.9303 74.1599 65.6883 75.2748 66.4245L95.5134 79.9225C96.6495 80.6767 96.9903 82.1921 96.2863 83.3603Z" fill="#EB4552" />
                                            <path d="M56.6639 16.6753C72.3024 16.6926 84.9755 29.366 84.9931 45.0045C84.9931 45.9248 85.7391 46.6708 86.6595 46.6708C87.5798 46.6708 88.3258 45.9248 88.3258 45.0045C88.3065 27.526 74.1424 13.3617 56.6639 13.3426C55.7435 13.3426 54.9976 14.0885 54.9976 15.0089C54.9976 15.9293 55.7435 16.6753 56.6639 16.6753Z" fill="#EB4552" />
                                            <path d="M56.6639 26.6738C66.7827 26.6857 74.9827 34.8856 74.9946 45.0045C74.9946 45.9248 75.7408 46.6708 76.6609 46.6708C77.5813 46.6708 78.3273 45.9248 78.3273 45.0045C78.3134 33.0457 68.6225 23.3547 56.6639 23.3411C55.7435 23.3411 54.9976 24.087 54.9976 25.0074C54.9976 25.9278 55.7435 26.6738 56.6639 26.6738Z" fill="#EB4552" />
                                            <path d="M56.6639 36.6723C61.2632 36.6778 64.9904 40.4049 64.9961 45.0045C64.9961 45.9248 65.7423 46.6708 66.6624 46.6708C67.5826 46.6708 68.3288 45.9248 68.3288 45.0045C68.3214 38.5652 63.1032 33.3468 56.6639 33.3396C55.7435 33.3396 54.9976 34.0856 54.9976 35.0059C54.9976 35.9263 55.7435 36.6723 56.6639 36.6723Z" fill="#EB4552" />
                                        </g>

                                    </svg>

                                </p>
                                <h2 className="sub-heading font-900 ">Call Us</h2>
                                <p><strong>Office:</strong> (+91) 814-639-0638<br />
                                    <strong>Sales: </strong>(+91) 814-639-0638</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="singal-col">
                                <p className="icon">
                                    <svg width="100" height="100" version="1.1" id="Layer_1" fill="#EB4552" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 469.336 469.336" xmlSpace="preserve">
                                        <path d="M456.836,76.168l-64-64.054c-16.125-16.139-44.177-16.17-60.365,0.031L45.763,301.682
			c-1.271,1.282-2.188,2.857-2.688,4.587L0.409,455.73c-1.063,3.722-0.021,7.736,2.719,10.478c2.031,2.033,4.75,3.128,7.542,3.128
			c0.979,0,1.969-0.136,2.927-0.407l149.333-42.703c1.729-0.5,3.302-1.418,4.583-2.69l289.323-286.983
			c8.063-8.069,12.5-18.787,12.5-30.192S464.899,84.237,456.836,76.168z M285.989,89.737l39.264,39.264L120.257,333.998
			l-14.712-29.434c-1.813-3.615-5.5-5.896-9.542-5.896H78.921L285.989,89.737z M26.201,443.137L40.095,394.5l34.742,34.742
			L26.201,443.137z M149.336,407.96l-51.035,14.579l-51.503-51.503l14.579-51.035h28.031l18.385,36.771
			c1.031,2.063,2.708,3.74,4.771,4.771l36.771,18.385V407.96z M170.67,390.417v-17.082c0-4.042-2.281-7.729-5.896-9.542
			l-29.434-14.712l204.996-204.996l39.264,39.264L170.67,390.417z M441.784,121.72l-47.033,46.613l-93.747-93.747l46.582-47.001
			c8.063-8.063,22.104-8.063,30.167,0l64,64c4.031,4.031,6.25,9.385,6.25,15.083S445.784,117.72,441.784,121.72z"/>


                                    </svg>

                                </p>
                                <h2 className="sub-heading font-900 ">Write Us</h2>
                                <p><strong>Office:</strong> Contact@gpcoders.com<br />
                                    <strong> Sales:</strong> sales@gpcoders.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="singal-col">
                                <p className="icon">
                                    <svg width="100" height="100" fill="#EB4552" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 512 512" xmlSpace="preserve">
                                        <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257
			c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22
			C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34
			C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180
			C406.1,207.121,398.689,233.688,384.866,256.818z"/>

                                        <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z
			 M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2
			C316.1,212.683,289.784,240.2,256,240.2z"/>

                                    </svg>

                                </p>
                                <h2 className="sub-heading font-900 ">Visit Us</h2>
                                <p>IT TOWER, E-261, Industrial Area,
                                    Sector 74, Mohali, Punjab 160071</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactpage-form-row text-white sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="large-heading">STAY<br />
                            IN<br />
TOUCH</div>
                            <p className="font-30 d-none d-md-block">Use contact<br />
form on the right</p>
                        </div>
                        <div className="col-md-7">
                            <div className="form-col">
                                <p>Fill out the form on below and we will reply within 12 hours. We will suggest you an online call using WhatsApp or Skype to collect all the information and prepare proposal and a initial layout for you.</p>
                                <form>
                                    <div className="form-group">
                                        <input type="text" placeholder="Name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email Address" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" placeholder="Phone Number" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Subject" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder="Message" className="form-control" >

                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Submit Now" className="btn btn-outline-secondary btn-block" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6860.641504287155!2d76.695156!3d30.709382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66d5c7ed2dcfa6dd!2sGBCODERS!5e0!3m2!1sen!2sin!4v1586862947664!5m2!1sen!2sin"
                    width="100%" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </LayoutContact>
    );
}

export default ContactPage;
