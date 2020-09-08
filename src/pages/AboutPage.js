import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      {/* Add in Facebook, Email, instagram, twitter */}
      <Content>
        <p>Howdy,</p>
        <p>
          My name is Samuel Mahan. I am a Junior Computer Science major from
          Houston Texas, but more importantly I am one of the proudest members
          of the Texas A&M student body!
        </p>
        <p>
          {" "}
          The Boy Scouts of America had a heavy influence on my life growing up,
          through their organization alone I was able to earn over 360 volunteer
          hours as well as learn the fundamentals of team leadership. I hope to
          emulate those values instilled within me as I enter the work force,
          and possibly become a project manager down the road.{" "}
        </p>
        <p>
          I’ve been pursuing a career in computer science since my freshman year
          of college when I heard about the concept of big data. As soon as I
          attended my first lecture on the subject, I was interested and looking
          for a mentor. That year I partook in a machine learning mentorship,
          which would evolve into research on neural networks. The mentorship
          was wonderful and introduced me to resources such as Kaggle where I
          took machine learning courses, as well as educated myself on the math
          that is happening behind the neural networks and their processing
          techniques.
        </p>
        <p>
          From that mentorship and research, I was able to participate in the
          annual datathon (Data Science hackathon) and lead a team in a project
          that utilizes k-means clustering.{" "}
        </p>
        <p>
          My most recent internship experience involves a remote project for
          Andon Specialties. I was tasked with designing, developing and
          presenting a cross platform mobile application for their quote
          requesting process.
        </p>
        <p>
          During this process I was a team of one, self-managing and
          self-teaching myself as I went about this project in an attempt to
          deliver a well thought out product. I had the pleasure of working with
          some of the upper management as I would display progress on my
          application throughout the internship.
        </p>
        <p>
          I truly enjoy being around people as well, and interacting with them.
          People can bring such interesting perspectives to projects. I love to
          see how we can use our diversity in background to benefit ourselves
          during the design and execution.{" "}
        </p>
        <p>
          These experiences have allowed me to grow as a programmer, team
          leader, and student.
          I am seeking internships in web devleopment, app development, and data science.
        </p>
      </Content>
      
    </div>
  );
}
export default AboutPage;
