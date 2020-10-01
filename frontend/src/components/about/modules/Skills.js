import React from 'react'

const Skills = () => (
  <section>

    <div className="skills-container">

      <div className="col-wrap">
        <h4>Front-End</h4>
        <div className="skill">
          <p>CSS (& SCSS)</p>
        </div>
        <div className="skill">
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <p>React</p>
        </div>
        <div className="skill">
          <p>HTML</p>
        </div>
      </div>

      <div className="col-wrap">
        <h4>Back-End</h4>
        <div className="skill">
          <p>Python (Django)</p>
        </div>
        <div className="skill">
          <p>SQL</p>
        </div>
        <div className="skill">
          <p>NoSQL (Mongo DB)</p>
        </div>
      </div>


      <div className="col-wrap">
        <h4>Other</h4>
        <div className="skill">
          <p>Git & Github</p>
        </div>
        <div className="skill">
          <p>UNIX</p>
        </div>
        <div className="skill">
          <p>Insomnia / TablePlus</p>
        </div>
      </div>

    </div>

  </section>
)

export default Skills