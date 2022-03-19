import React from 'react';
import coverImage from '../../assets/cover/Tanner.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          My name is Tanner Shahan and I recently have been studying Web Development. I'm a social media manager at SkullCandy and I make music on the side.
        </p>
      </div>
    </section>
  );
}

export default About;
