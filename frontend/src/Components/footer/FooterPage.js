import React from 'react'

export default function FooterPage() {
    return (
        <div className='footerCon'>
            <footer class="padding_4x">
                <div class="flex">
                    <section class="flex-content padding_1x">
                        <h3>InterviewConnect</h3>
                         <p>Welcome to InterviewConnect - your one-stop destination for acing your next software developer interview!</p>
                    </section>
                    <section class="flex-content padding_1x">
                        <h3>Quick Links</h3>
                        <a href="/">Home</a>
                        <a href="/">Quiz</a>
                        <a href="/">Reviews</a>
 
                    </section>
                    <section class="flex-content padding_1x">
                        <h3>Features</h3>
                        <a href="/">Jobs</a>
                        <a href="/">Brand Assets</a>
                        <a href="/">Investor Relations</a>
                        <a href="/">Terms of Service</a>
                    </section>
                    <section class="flex-content padding_1x">
                        <h3>Resources</h3>
                        <a href="/">Guides</a>
                        <a href="/">Research</a>
                        <a href="/">Experts</a>
                        <a href="/">Agencies</a>
                    </section>
                    {/* <section class="flex-content padding_1x">
                        <h3>Newsletter</h3>
                        <p>You can trust us. we only send promo offers,</p>
                        <fieldset class="fixed_flex">
                            <input type="email" name="newsletter" placeholder="Your Email Address" />
                            <button class="btn btn_2">Subscribe</button>
                        </fieldset>
                    </section> */}
                </div>
                <div class="flex">
                    <section class="flex-content padding_1x">
                        <p>Copyright ©2023 All rights reserved interviewConnect</p>
                    </section>
                    <section class="flex-content padding_1x">
                        <a href="/"><i class="fa fa-facebook"></i></a>
                        <a href="/"><i class="fa fa-twitter"></i></a>
                        <a href="/"><i class="fa fa-dribbble"></i></a>
                        <a href="/"><i class="fa fa-linkedin"></i></a>
                    </section>
                </div>
            </footer>
        </div>
    )
}
