import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import dashboard from "../../Assets/Projects/dashboard.jpeg";
import revolution from "../../Assets/Projects/revolution.png";
import recruteur from "../../Assets/Projects/recruteur.png";
import candidat from "../../Assets/Projects/candidat.png";
import ecom from "../../Assets/Projects/ecom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are<strong className="purple"> My professionnel projects </strong>that I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recruteur}
              isBlog={false}
              title= {<strong className="purple">Recrutement_ONEE Espace Recreuteurs</strong>}
              description="I developed the recruiter module of a recruitment platform in .NET MVC for the Office National de l'Électricité et de l'Eau Potable (ONEE). This module streamlines the hiring process by enabling recruiters to create job postings, manage applications, schedule interviews, and evaluate candidates efficiently. It includes features such as candidate profile management, recruiter-candidate communication, and analytical tools to enhance decision-making."
              ghLink="https://github.com/Chourti/ONEE_Recrutement/tree/main/ONEE_BE-Recruteur"
              technologies={[".NET", "C#","MVC", "SQL Server", "Bootstrap","Pie Chart"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={candidat}
              isBlog={false}
              title= {<strong className="purple">Recrutement_ONEE Espace Candidates </strong>}
              description="I developed this platform using .NET for the backend and Angular for the frontend. Candidates can search for job offers, apply by submitting necessary documents like their diploma, CV, and CIN, while recruiters validate or reject applications after reviewing the provided documents. The system ensures smooth communication between candidates and recruiters through confirmations and notifications at each step."
              ghLink="https://github.com/Chourti/ONEE_Recrutement/tree/main/CandidatApp"
            // ghLink2="https://github.com/Chourti/ONEE_Recrutement/tree/main/candidat_front"
            technologies={[".NET", "C#", "ANGULAR", "SQL Server", "tailwind","Bootstrap"]}

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={revolution}
              title={<strong className="purple"> Revolution Laundry </strong>}
              description="I worked with a departmental team to develop a mobile application called Revolution Laundry using Flutter and Dart. This app is designed to help people in France by connecting them with nearby laundry services. Users can easily find local laundromats, schedule laundry pickups and deliveries, track the status of their laundry."
              ghLink={false}  // This will prevent the GitHub button from rendering
              technologies={["Flutter","JAVA","Dart","MySQL","Angular"]}
            />
          </Col>
          <Col title="Dashboard Demo ONEE"
           md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title={<strong className="purple">Dashboard Demo ONEE</strong>}
              description="I developed this admin dashboard using HTML, CSS, and JavaScript, featuring a modern UI with a sidebar navigation, key statistics, and tables for recent orders and customers. It includes a search bar, user profile section, and color-coded status labels for better visualization. The design ensures a clean and user-friendly experience, making it ideal for eCommerce or business analytics platforms."
              ghLink="https://github.com/Chourti/Dashboard_demo/tree/main"
            // ghLink2="https://github.com/Chourti/ONEE_Recrutement/tree/main/candidat_front"
            technologies={["HTML","CSS","MySQL","JS","Pie chart"]}


            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title={<strong className ="purple">Site E-commerce</strong>}  
              description="I created an e-commerce website using HTML, CSS, and JavaScript with a modern and responsive design. The site features a clean layout, smooth animations, and an intuitive navigation system, making it easy for users to browse and shop. It is optimized for both desktop and mobile devices, ensuring a seamless shopping experience."
              ghLink="https://github.com/Chourti/E-com-site/tree/master"
              technologies={["HTML","CSS","Angular","JS"]}
            />
          </Col>

        </Row>
      </Container>
      <Container>

      </Container>
    </Container>
  );
}

export default Projects;
