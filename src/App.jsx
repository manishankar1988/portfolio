import './App.css';
import profilePic from './assets/profile.jpg';
function App() {
  const user = {
    name: 'Dr. Manishankar S',
    Designarion:'Associate Professor and Head of the Department',
    Department: 'Department of Computer Science and Engineering',
    Institution: 'Sahrdaya  College of Engineering and Technology, Thrissur, Kerala, India',
    specialization: 'Computer Science and Engineering',
    qualification: 'Ph.D. in Computer Science and Engineering',
    researchInterests: 'Cloud Computing, IoT, Networking, Data Science, Machine Learning',
    researchPublications: 'Over 50 research papers in reputed journals and conferences',
    researchProjects: 'Led multiple research projects funded by government and private organizations',
    researchSupervision: 'Supervised numerous undergraduate and postgraduate students in their research projects',
    researchAwards: 'Recipient of several awards for outstanding research contributions',
    researchMemberships: 'Member of various professional organizations including IEEE, ACM, and CSI',
    researchConferences: 'Regularly participates in national and international conferences as a speaker and panelist',
    researchWorkshops: 'Conducted workshops on advanced topics in computer science and engineering',
    researchConsultancy: 'Provided consultancy services to various organizations in the field of computer science and engineering',
    researchCollaboration: 'Collaborated with various institutions and industries for research and development',
    researchTeaching: 'Passionate about teaching and mentoring students in the field of computer science and engineering',
    researchCommunityService: 'Actively involved in community service and outreach programs to promote computer science education',
    age: 37,  
    email: 'manishankar1988@gmail.com',
    phone: '8867568963',
    address: 'Parvana krishnapura'
  };

  const skills = ['Cloud Computing','IoT','Networking','JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];
  const hobbies = ['Reading', 'Traveling', 'podcast', 'Gaming'];
  const interests = ['Technology', 'Science', 'Art', 'Dance'];
  const languages = ['English', 'Malayalam', 'French', 'Hindi', 'Tamil','Kannada'];	
  const socialLinks = {
    github: 'https://github.com/manishankar1988',
    linkedin: 'https://www.linkedin.com/in/manishankar-s-2279a087/?originalSubdomain=in',
    googleScholar: 'https://scholar.google.com/citations?user=9H-NZS0AAAAJ&hl=en'
  };
  
    return (
    <div className="container">
      <nav className="navbar">
        <h1>{user.name}</h1>
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#interests">Interests</a></li>
          <li><a href="#languages">Languages</a></li>
          <li><a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href={socialLinks.googleScholar} target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
        </ul>
      </nav>

      <section className="section about-me">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h2>About Me</h2>
        <p>{user.name} is {user.age} years old.</p>
        <p>Contact: {user.email}, Phone: {user.phone}</p>
        <p>Address: {user.address}</p>
      </section>
      <section className="section professional-info">
        <h2>Professional Information</h2>
        <p><strong>Designation:</strong> {user.Designarion}</p>
        <p><strong>Department:</strong> {user.Department}</p>
        <p><strong>Institution:</strong> {user.Institution}</p>
        <p><strong>Specialization:</strong> {user.specialization}</p>
        <p><strong>Qualification:</strong> {user.qualification}</p>
        <p><strong>Research Interests:</strong> {user.researchInterests}</p>
        <p><strong>Research Publications:</strong> {user.researchPublications}</p>
        <p><strong>Research Projects:</strong> {user.researchProjects}</p>      
        <p><strong>Research Supervision:</strong> {user.researchSupervision}</p>
        <p><strong>Research Awards:</strong> {user.researchAwards}</p>
        <p><strong>Research Memberships:</strong> {user.researchMemberships}</p>
        <p><strong>Research Conferences:</strong> {user.researchConferences}</p>
        <p><strong>Research Workshops:</strong> {user.researchWorkshops}</p>
        <p><strong>Research Consultancy:</strong> {user.researchConsultancy}</p>
        <p><strong>Research Collaboration:</strong> {user.researchCollaboration}</p>
        <p><strong>Research Teaching:</strong> {user.researchTeaching}</p>
        <p><strong>Research Community Service:</strong> {user.researchCommunityService}</p>
      </section>
      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>{skills.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section id="hobbies" className="section">
        <h2>Hobbies</h2>
        <ul>{hobbies.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section id="interests" className="section">
        <h2>Interests</h2>
        <ul>{interests.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <section id="languages" className="section">
        <h2>Languages</h2>
        <ul>{languages.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </section>

      <footer className="footer">
        <p>&copy; 2025 {user.name}</p>
      </footer>
    </div>
  );
}

export default App;
