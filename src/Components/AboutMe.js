import React from 'react'
import author from "../profile.jpg"
export default function AboutMe() {
  return (
    <div className='container py-5' id='aboutme'>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
            <img src={author} alt="profile..." className='profile-img'  />
            </div>
        </div>
        <div className="col-lg-6 col-xm-12">
            <h1 className='about-heading'>about me</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quasi 
                voluptatem eveniet ipsum minus inventore minima magnam incidunt dolor, 
                odit expedita, ullam illum maxime sequi. Eligendi reiciendis vero natus 
                ullam.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus 
                laudantium necessitatibus perferendis hic cumque id doloribus rem sequi 
                natus soluta nostrum veniam consequatur eos quae ipsum facere odio, illum 
                eveniet.
            </p>
        </div>
      </div>
    </div>
  )
}
