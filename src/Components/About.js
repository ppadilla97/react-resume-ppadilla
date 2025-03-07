import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownloadEnglish = this.props.data.resumedownloadEnglish;
      var resumeDownloadSpanish = this.props.data.resumedownloadSpanish;
      var resumeDownloadCatalan = this.props.data.resumedownloadCatalan;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Pol Padilla Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownloadEnglish} className="button"><i className="fa fa-download"></i>Download Resume (English)</a>
                     <a href={resumeDownloadSpanish} className="button"><i className="fa fa-download"></i>Download Resume (Spanish)</a>
                     <a href={resumeDownloadCatalan} className="button"><i className="fa fa-download"></i>Download Resume (Catalan)</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
