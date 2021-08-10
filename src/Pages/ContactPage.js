import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=450&amp;hl=en&amp;q=bhubaneswar odisha&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 7008493948'} title={'Phone'} />
                    <ContactItem icon={email} text1={'sujitmishra115@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'Baramunda H.B Colony, BBSR'} text2={'INDIA'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
