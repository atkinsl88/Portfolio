import React from 'react'
import image from '../../../assets/hero.png'

const Imgtxt = () => (
  <section>

    <div className="txtimg-container">

      <div className="txtimg-lft">
        <div className="img-lft">
          <img src={image} alt="logo" />
        </div>
      </div>

      <div className="txtimg-rgt">
        <div className="txt-rgt">
          <h4>Project Manager</h4>
          <p>I’ve been working as a Digital Project Manager, during which time I’ve done just about every job imaginable. In those roles, I’ve worked directly with clients, and indirectly through account managers. I’ve been responsible for projects, managed and mentored project managers and designers, and I’ve been directly involved at all levels in hundreds of projects for just about every type of client in a multitude of industries.</p>
        </div>
      </div>

    </div>

  </section>
)

export default Imgtxt