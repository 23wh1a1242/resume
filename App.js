import React from 'react';

function App() {
  return (
    <div style={styles.resume}>
      <h1 style={styles.name}>Jahnavi Mandapalli</h1>
      <p style={styles.contact}>
        📍 Hyderabad, Telangana | 📧 jahnavimandapalli98@gmail.com | 📞 9849597696
      </p>

      <section style={styles.section}>
        <h2 style={styles.heading}>Summary</h2>
        <p>Interested in Information and technology and passionate about Artifical Intelligence...</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Education</h2>
        <ul>
          <li><strong>BVRIT Hyderabad College Of Engineering For Women</strong> - CGPA: 7.88</li>
          <li><strong>Little Flowers Junior College</strong> - CGPA: 9.42</li>
          <li><strong>Triveni High School</strong> - CGPA: 10.0</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>
        <ul>
          <li>Python Project on Sensor Networks (Tkinter, PIL, Pygame)</li>
          <li>Java Project: TYPO (Online Stationery App)</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Certifications</h2>
        <ul>
          <li>Certification on C Course - Great Appsec Hackathon 2024</li>
          <li>Julia Course</li>
          <li>Freedom With AI</li>
          <li>Certificate of Energy Literacy</li>
          <li>Data Visualization with Power BI and Tableau</li>
          <li>Workshop: Success Skill Development</li>
          <li>Flipkart Grid 6.0 - E-commerce Tech Quiz</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Technical Skills</h2>
        <p>Languages: C, Java, HTML, Python, SQL, Data Structures</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Publications</h2>
        <p>Published an article on impacts of quarrying in Pure Earth Conference</p>
      </section>
    </div>
  );
}

const styles = {
  resume: {
    maxWidth: '800px',
    margin: 'auto',
    background: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  name: {
    color: '#2c3e50',
    textAlign: 'center',
  },
  contact: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  heading: {
    color: '#34495e',
    marginTop: '20px',
  },
  section: {
    marginBottom: '20px',
  }
};

export default App;
