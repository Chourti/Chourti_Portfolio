import React from "react";
import Card from "react-bootstrap/Card";
// eslint-disable-next-line no-unused-vars
import "./Experiences.css";


const experiences = [
    {
        role :".NET DeveloperFull Stack Intern",
        company : "Office National de l'Électricité et de l'Eau Potable (ONEE-BE)",
        duration : "5 Months, March - August  2024",
        description : "I developed a recruitment platform in .NET for the Office National de l'Électricité et de l'Eau Potable (ONEE). This modern web solution automated the entire recruitment process, from creating job offers to the final selection of candidates. Utilizing the latest .NET frameworks, I designed a user-friendly platform to manage applications, schedule interviews, and assess profiles. It integrated advanced features such as candidate profile management, recruiter-candidate communication, and analytical tools. As a .NET developer, I ensured that the platform was secure, high-performing, and scalable by working closely with a multidisciplinary team to meet business requirements.",
        technologies :[".NET","MVC","C#","MySQL Workbensh","Angular","JS"],
    },
    {
        role :"Mobile Developer",
        company : "DSI Conseils & Services",
        duration : "3 Months, June - sept 2023",
        description : "I worked with a departmental team to develop a mobile application using Flutter and Dart. I also contributed to the update of the RICHBOND website and the creation of interactive forms with Angular. These team projects strengthened my collaborative development skills and led to practical solutions.",
        technologies :[" Java", "Flutter", "Dart", "JavaScript"," AngularJS"," English"],
    },
    {
        role :"Web Developer",
        company : "SOMAGIC Group",
        duration :"1 month, August - Sept 2022",
        description:"I created a customer management application using MySQL for the databases. At the same time, I built an e-commerce website using Python and the Django framework. These experiences improved my development skills and allowed me to contribute to the creation of functional and efficient solutions.",
        technologies:["Python","Django","MySQL","HTML","CSS","Merise","JavaScript","English"],
    }
];

function Experience() {
  return (
    <div className="experience-section">
      <h2 className="section-title">Professional Experiences</h2>
      {experiences.map((exp, index) => (
        <Card key={index} className="experience-card">
          <Card.Body>
            <Card.Title>{exp.role} - <span className="company">{exp.company}</span></Card.Title>
            <Card.Subtitle className="duration">{exp.duration}</Card.Subtitle>
            <Card.Text>{exp.description}</Card.Text>
            <div className="tech-stack">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="tech-circle">{tech}</span>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Experience;
