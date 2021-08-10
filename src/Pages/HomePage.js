import React from 'react';
import Typewriter from 'typewriter-effect';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hello, my name is <br />
                    <span> Sujit Mishra</span>
                    <h2 className="text-2">And I'm a </h2>        
                </h1>
                <h1 className="typing">
                <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    "Developer",
                                    "Learner"
                                ]
                            }}
                        />  
                </h1>
            </header>
        </div>
    )
}

export default HomePage;
