import "./access.css";

const Access = () => {
  return (
    <section id="access" className="contact section">
      {/* Section Title */}
      <div className="section-title pb-0 mb-5 mt-2">
        <h2 className="d-flex align-items-center justify-content-center">
          Access
        </h2>
      </div>
      {/* End Section Title */}
      <div className="map-container mb-5 pt-2 container">
        <iframe
          title="maps"
          className="map-iframe"
          src="https://maps.google.com/maps?q=sls%20shish&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder={0}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* End Google Maps */}
      <div className="container">
        <div className="row gy-4">
          <div>
            <div className="d-md-flex justify-content-between align-items-start">
              <div>
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Location</h3>
                    <p>
                      〒211-0004 Kanagawa, Kawasaki, Nakahara Ward,
                      Shinmarukohigashi, 2 Chome−924-47 シャンティ加藤 3F
                    </p>
                  </div>
                </div>
                <div className="d-md-flex">
                  <div className="info-item d-flex m-0 mt-4 margin-right-20">
                    <i className="bi bi-telephone flex-shrink-0" />
                    <div>
                      <h3>Call Us</h3>
                      <a className="contact-link" href="tel:+815088830886">
                        +81 50-8883-0886
                      </a>
                    </div>
                  </div>
                  <div className="info-item d-flex mt-4 mb-4" style={{marginLeft:"30px"}}>
                    <i className="bi bi-envelope flex-shrink-0" />
                    <div>
                      <h3>Email Us</h3>
                      <p>perrys.shibuya@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-item d-flex m-0 lh-lg">
                <div>
                  <h2 className="open-hours-title">Open Hours</h2>
                  <p>
                    <b>Monday-Thursday:</b> 7:00 PM - 5:00 AM
                  </p>
                  <p>
                    <b>Friday:</b> 7:00 PM - 6:00 AM
                  </p>
                  <p>
                    <b>Saturday:</b> 7:00 PM - 6:00 AM
                  </p>
                  <p>
                    <b>Sunday:</b> 7:00 PM - 6:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
