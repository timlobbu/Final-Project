import React, { useState, useEffect } from 'react';
import "../assets/css/templatemo-style.css";
import Contact from './Contact';
import About from './About';
import axios from "axios";
import Top from './Top';
import History from './History';
import Zoom from 'react-reveal/Zoom'

const Homepage = () => {


    return(
        <div className="container">
            <Top />
            <main>
                <Zoom>
                <header className="row tm-welcome-section">
                <h2 className="col-12 text-center tm-section-title">Marijo makang disini kawan</h2>
                <p className="col-12 text-center">Budayakan malas memasa, karena memasa torang pe kerja. Singgah jo, nanti om deng tanta yang ator ngoni pe makang. Abis makang jang lupa bayar neh, nda mahal-mahal skali kwa eh. Puru kenyang, ngoni senang, om deng tanta senang.</p>
                </header>
                
                </Zoom>
                {/* Menu */}
                <div className="row tm-gallery">
                {/* gallery page 1 */}
                <div id="tm-gallery-page-pizza" className="tm-gallery-page">
                 
                </div> 
                </div>
               
                <div className="tm-section tm-container-inner">
                <div className="row">
                    <div className="col-md-6">
                    <figure className="tm-description-figure">
                        <img src="https://asset.kompas.com/crops/pjtMmztUVAA5dh3m4aYd289jugo=/0x0:773x515/750x500/data/photo/2022/08/30/630d6bda8bef1.png" alt="Image" className="img-fluid" />
                    </figure>
                    </div>
                    <div className="col-md-6">
                    <div className="tm-description-box"> 
                    <br></br>
                        <h2 style={{color: 'rgba(100, 1, 1, 1)'}}>Terbukti Terkenal!!!</h2> <br></br>
                        <p className="tm-mb-45">See??? Bahkan Jess No Limit deng Sisca Kohl pernah makang disiniii :p. Kong mo tunggu apalagi guys? Datang deng pesan jo sekarang! ^^</p>
                    </div>
                    </div>
                </div>
                </div>
                <br></br><br></br><br></br>
                <About />
                <History />
                <Contact />
            </main>
        </div>

        

    )
};

export default Homepage;