import * as React from 'react';
import "../styles/experience.css";

const Experience = () => {

    return (
        <section id="experience" className="experience-section">
            <h1 className="experience-title">My Experience</h1>
            <div className="experience-timeline">

                <div className="experience-timeline-container left-container">
                    <img src="/images/tcs.png" alt="tcs-pic"/>
                    <div className="timeline-text-box">
                        <h2>Tata Consultancy Services</h2>
                        <small>2021-Present</small>
                        <ul>
                            <li>Developed user-friendly interfaces for ATM cashbox balancing and teller transactions using React JS, ensuring accurate cash calculations and streamlined workflows.</li>
                            <li>Enhanced real-time functionality by implementing Context API for instant updates in Night Drop Utility notifications and log activity tables.</li>
                        </ul>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="experience-timeline-container right-container">
                    <img src="/images/changepond.png" alt="cp-pic"/>
                    <div className="timeline-text-box">
                        <h2>Changepond Technologies</h2>
                        <small>2020-2021</small>
                        <ul>
                            <li>
                                Designed dynamic dashboard maps for truck movement tracking and route visualization using React JS, Google Maps API, and Material UI.
                            </li>
                            <li>
                                Implemented real-time truck status updates with Firebase and optimized data filtering with AG-Grid for seamless user experience.
                            </li>
                        </ul>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

                <div className="experience-timeline-container left-container">
                    <img src="/images/infoview.png" alt="ivtl-pic"/>
                    <div className="timeline-text-box">
                        <h2>Infoview Technologies</h2>
                        <small>2018-2020</small>
                        <ul>
                            <li>Streamlined state management by implementing Redux and fixing critical bugs, improving application stability for the Cortex application.</li>
                            <li>Developed automated workflows for electronic signatures and routing, enhancing operational efficiency in the CDDC application.</li>
                        </ul>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default Experience;