import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            My name is Oluwabunmi Ayeni. A graduate of Federal university of Technology, Akure.I am a front end web developer with the skill set of HTML, Javascript and React framework.
            I have developed series of projects with vanilla Javascript and React js. 
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> 15 Kofoworola Street, Lagos
              </p>
              <p>
                <strong>Email:</strong> joluwabunmi75@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 09039498954
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Second Language</strong> - Yoruba
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
