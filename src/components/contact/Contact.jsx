import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  render () {
    const instagramLogo = require('../../images/instaGlyphWhite.png')
    return (
      <div className='listWrapper contactComponent'>
        <div className='leftSpacer' />
        <div className='listCont'>
          <div className='plHeader'>
            <h1>Contact</h1>
          </div>
          <div className='blurb'>
            <p>For enquiries and appointments please get in touch with Alana.</p>
          </div>
          <div className='email'>
            <p>email: <a href='mailto:hairwithaviewbrooklyn@gmail.com' target='_top'>hairwaithaviewbrooklyn@gmail.com</a></p>
          </div>
          <div className='phone'>
            <p>text: <a href='sms:+640274657856'>0274657856</a></p>
          </div>
          <div className='socials'>
            <a href='https://www.instagram.com/hair_by_alana1/' target='_blank' rel='noopener noreferrer'><div className='logoContainer'><img className='instaLogo' src={instagramLogo} alt='instagram' /></div></a>
          </div>
        </div>
        <div className='rightSpacer' />
      </div>
    )
  }
}
