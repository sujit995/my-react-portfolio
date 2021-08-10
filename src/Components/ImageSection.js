import React from 'react';


function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <h4>I am<span> Sujit Mishra</span></h4>
                <p className="about-text">
                A passionate programmer, born in India. I am a Frontend Web Developer with HTML5, CSS3, Javascript, React.js, Redux as my tech stack and have backend knowledge on Nodejs. In 2019, I successfully completed my Master's Degree.<br />
                I love learning about new technologies, and solving problems to build better and scalable products.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Age</p>
                        <p>Degree</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Email </p>
                    </div>
                    <div className="right-section">
                        <p>: 25</p>
                        <p>: Master</p>
                        <p>: Indian</p>
                        <p>: English, Hindi, Odia</p>
                        <p>: Bhubaneswar, Odisha</p>
                        <p>: sujitmishra115@gmail.com</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
