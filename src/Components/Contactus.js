import React from 'react'
import './Contactus.css'
export default function Contactus () {
	return (
		 <div className="contact-us">
			  <div className="div">
				<header className="header">
				  <div className="navbar">
					<div className="item-link-home">HOME</div>
					<div className="item-link-fleet">FLEET</div>
					<div className="item-link-quote">QUOTE</div>
					<div className="item-link-reviews">REVIEWS</div>
					<div className="item">
					  <div className="link-services">SERVICES</div>
					  {/* <img className="pseudo" alt="Pseudo" src="pseudo.svg" /> */}
					</div>
					<div className="item-link-contact-us">CONTACT US</div>
				  </div>
				  <div className="overlap-group">
					<div className="contact">
					  <div className="link">+966597710964</div>
					  <div className="link-info">info@Al-Musafer-transport.com</div>
					</div>
					<img
					  className="element-f"
					  alt="Element f"
					  url="./src/public/language.png"
					/>
					<div className="text-wrapper">English</div>
				  </div>
				  <img className="logo" alt="Logo" url="./src/public/logo.png" />
				</header>
				<div className="section">
				  <div className="link-main">Main</div>
				  <div className="text-wrapper-2"> /</div>
				  <div className="text-wrapper-3">Contact</div>
				</div>
				<div className="section-2">
				  <div className="contact-2">CONTACT</div>
				  <div className="div-contacts-items">
					<div className="div-contacts-item">
					  <div className="text-wrapper-4">Phone</div>
					  <div className="text-wrapper-5">+966597710964</div>
					</div>
					<div className="div-contacts-item-2">
					  <div className="text-wrapper-4">e-Mail</div>
					  <div className="text-wrapper-6">info@Al-Musafer-transport.com</div>
					</div>
					<div className="div-contacts-item-3">
					  <div className="text-wrapper-7">address</div>
					  <div className="div-contacts-value">
						<p className="element-ST-MECCA-KING">
						  2923 ST MECCA, KING FAISAL RD,
						  <br />
						  MECCA, 24431
						</p>
					  </div>
					</div>
				  </div>
				  <div className="iframe">
					<div className="body">
					  <div className="div-mapdiv">
						<div className="div-hd-fafbd">
						  <img className="image"  url="./src/public/map.png" />
						</div>
					  </div>
					</div>
				  </div>
				</div>
				<div className="overlap">
				  <div className="you-have-questions">YOU HAVE QUESTIONS?</div>
				  <div className="form-form-wrapper">
					<div className="form-form">
					  <div className="div-form-top">
						<div className="div-form-wrap-input">
						  <div className="label-your-name">Your name</div>
						  <div className="input" />
						</div>
						<div className="div-form-wrap-input-2">
						  <div className="label-e-mail">E-mail</div>
						  <div className="input" />
						</div>
						<div className="div-form-wrap-input-3">
						  <div className="label-phone-number">Phone number</div>
						  <div className="input" />
						</div>
					  </div>
					  <div className="div-form-bot">
						<div className="label-message">Message</div>
						<div className="textarea" />
						<div className="input-send">SEND</div>
					  </div>
					</div>
				  </div>
				</div>
				<footer className="footer">
				  <img className="img" alt="Logo" url="./src/public/logo.png" />
				  <div className="text-wrapper-8">PREMIUM LIMO, LLC</div>
				  <img className="saudi-business" alt="Saudi business"  url="./src/public/saudi-business-center.png" />
				  <div className="info">
					<div className="explore">
					  <div className="list">
						<div className="text-wrapper-9">Home</div>
						<div className="text-wrapper-10">Fleet</div>
						<div className="text-wrapper-10">Quote</div>
					  </div>
					  <div className="list-2">
						<div className="text-wrapper-9">Reviews</div>
						<div className="text-wrapper-10">Contact us</div>
					  </div>
					  <div className="list-3">
						<div className="text-wrapper-9">Copyright ©</div>
						<div className="text-wrapper-10">Terms of service</div>
						<div className="text-wrapper-10">Privacy policy</div>
					  </div>
					</div>
					<div className="contact-3">
					  <div className="link">+966597710964</div>
					  <div className="link-info">info@Al-Musafer-transport.com</div>
					</div>
				  </div>
				</footer>
			  </div>
			</div>
	)
}