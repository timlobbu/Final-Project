import React from 'react'
import "../assets/css/templatemo-style.css"

export default function Contact() {
  return (
    <div className="container" id='Contact'>
        <main>
            <header className="row tm-welcome-section">
            <h2 className="col-12 text-center tm-section-title">Contact</h2>
            <p className="col-12 text-center"><a rel="nofollow" href="https://www.ltcclock.com/downloads/simple-contact-form/" target="_blank"></a> Kalo ngoni butuh sesuatu hubungi pa torang. torang so sediakan kontak yang bisa ngoni mo hubungi</p>
            </header>
            <div className="tm-container-inner-2 tm-contact-section">
            <div className="row">
                <div className="col-md-6">
                <form action method="POST" className="tm-contact-form">
                    <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Nama" required />
                    </div>
                    <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                    <textarea rows={5} name="message" className="form-control" placeholder="Pesan" required defaultValue={""} />
                    </div>
                    <div className="form-group tm-d-flex">
                    <button type="submit" className="tm-btn tm-btn-success tm-btn-right">
                        Kirim
                    </button>
                    </div>
                </form>
                </div>
                <div className="col-md-6">
                <div className="tm-address-box">
                    <h4 className="tm-info-title tm-text-success">Alamat</h4>
                    <address>
                    Kelurahan Kadoodan, Kota Bitung.
                    </address>
                    <a href="tel:080-090-0110" className="tm-contact-link">
                    Telp :<i className="fas fa-phone tm-contact-icon" /> 888-888-888-888
                    </a>
                    <a href="mailto:info@company.co" className="tm-contact-link">
                    Email :<i className="fas fa-envelope tm-contact-icon" />wrgkampoeng@gmail.com
                    </a>
                    <div className="tm-contact-social">
                    <a href="https://fb.com/templatemo" className="tm-social-link"><i className="fab fa-facebook tm-social-icon" /></a>
                    <a href="#" className="tm-social-link"><i className="fab fa-twitter tm-social-icon" /></a>
                    <a href="#" className="tm-social-link"><i className="fab fa-instagram tm-social-icon" /></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* How to change your own map point
            1. Go to Google Maps
            2. Click on your location point
            3. Click "Share" and choose "Embed map" tab
            4. Copy only URL and paste it within the src="" field below
        */}
            <div className="tm-container-inner-2 tm-map-section">
            {/* tambah maps */}
            </div>
            <div className="tm-container-inner-2 tm-info-section">
            <div className="row">
                <div className="col-12 tm-faq">
                <h2 className="text-center tm-section-title">Denver Group</h2>
                <p className="text-center">Final Project - Front End Web Developer - A</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                </div>
            </div>
            </div>
        </main>
    </div>

  )
}
