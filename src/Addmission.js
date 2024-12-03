import React, { useState } from 'react';
import classes from './Addmission.module.css';
import graduate from "./graduated.png";
import postgraduate from "./graduated.png";
import doctoral from './graduated.png';
import stepIcon from "./foot-print.png";
import FAQs from './Faq';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    documents: null,
  });

  const steps = [
    { id: 1, title: 'STEP 1', description: 'Fill the Application Form\nBefore the last date.' },
    { id: 2, title: 'STEP 2', description: 'Upload Your Documents\nPhotograph, Signature & Marksheet' },
    { id: 3, title: 'STEP 3', description: 'Appear for KIITEE Entrance\nTest (Online Examination)' },
    { id: 4, title: 'STEP 4', description: 'Appear for the Counselling' },
  ];

  const programs = [
    { 
      title: 'Undergraduate', 
      description: 'Study Engineering, Health Sciences, Management, Law, Fashion, Film, and more.', 
      icon: graduate 
    },
    { 
      title: 'Postgraduate', 
      description: 'Pursue advanced studies in Engineering, Medicine, Management, Law, and more.', 
      icon: postgraduate 
    },
    { 
      title: 'Doctoral', 
      description: 'Engage in research in Science, Technology, Medicine, and more.', 
      icon: doctoral 
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documents: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your application has been submitted successfully!');
  };

  return (
    <div className={classes.container}>
      {/* Existing Admission Process Section */}
      <div className={classes.admissionprocess}>
        <h2 className={classes.header}>Admission Process</h2>
        <div className={classes.steps}>
          {steps.map((step) => (
            <div key={step.id} className={classes.step}>
              <div className={classes.stepnumber}>{step.id < 10 ? `0${step.id}` : step.id}</div>
              <img src={stepIcon} alt="Step Icon" className={classes.stepIcon} />
              <div>
                <h3 className={classes.steptitle}>{step.title}</h3>
                <p className={classes.stepdescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Admission Details Section */}
   
      <div className={classes.programs}>
        <h2 className={classes.header}>Explore Programs</h2>
        <div className={classes.programoptions}>
          {programs.map((program, index) => (
            <div key={index} className={classes.program}>
              <div className={classes.iconContainer}>
                <img src={program.icon} alt={`${program.title} Icon`} className={classes.programIcon} />
                <h3 className={classes.programtitle}>{program.title}</h3>
              </div>
              <p className={classes.programdescription}>{program.description}</p>
            </div>
          ))}
        </div>
        <button className={classes.findprogramsbtn}>FIND YOUR PROGRAMS</button>
      </div>

      <div className={classes.admissionForm}>
        <h2 className={classes.header}>Admission Form</h2>
        <form onSubmit={handleSubmit} className={classes.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={classes.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={classes.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className={classes.input}
          />
          <select
            name="program"
            value={formData.program}
            onChange={handleInputChange}
            required
            className={classes.select}
          >
            <option value="">Select Program</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Doctoral">Doctoral</option>
          </select>
          <input
            type="file"
            name="documents"
            onChange={handleFileChange}
            required
            className={classes.fileInput}
          />
          <button type="submit" className={classes.submitButton}>
            Submit Application
          </button>
        </form>
      </div>



      <div className={classes.admissionDetails}>
  <h2 className={classes.header}>Admissions in Centurion University (CUTM) 2025</h2>
  <p className={classes.details}>
    Candidates seeking admission to CUTM courses are required to appear for Centurion University Entrance Examination (CUEE) conducted by the University. The exam is primarily an online exam for the students aspiring to take admission in B.Tech (Regular and Lateral), B.Tech (Agri. Engg.), and B.Sc (Ag.) courses of the University. The exam is multiple choice in format and of national level standard.
  </p>
  
  <h3 className={classes.header}>Eligibility</h3>
  <p className={classes.details}>
    <strong>Admission Criteria for the Academic year 2025-26:</strong>
  </p>
  
  <table className={classes.eligibilityTable}>
    <thead>
      <tr>
        <th>Programme Name</th>
        <th>Eligibility Criteria</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>BTech (Mech, EEE, ECE, Civil, CSE, Aerospace, Mining)</td>
        <td>10+2 (Physics, Chemistry, Maths) 50% and 5% relaxation for reserved category</td>
      </tr>
      <tr>
        <td>BTech (Ag, Dairy Tech., and Phytopharma)</td>
        <td>10+2 (Physics, Chemistry, Maths/Biology) 50% at Plus 2</td>
      </tr>
      <tr>
        <td>B.Sc. Allied Health</td>
        <td>10+2 (Physics, Chemistry, Maths/Biology) 50% at Plus 2</td>
      </tr>
      <tr>
        <td>Diploma Allied Health</td>
        <td>10+2 in Science (For Diploma seats under NIOS +2 from any stream)</td>
      </tr>
      <tr>
        <td>Certificate Courses in Allied Health (2yrs/1yr courses)</td>
        <td>10+2 in Science</td>
      </tr>
      <tr>
        <td>Certified in Allied Health (6 months courses)</td>
        <td>10th Standard</td>
      </tr>
      <tr>
        <td>M.Sc Allied Health</td>
        <td>B.Sc. with Biology or any Life Science</td>
      </tr>
      <tr>
        <td>B.Sc.</td>
        <td>10+2 (Physics, Chemistry, Maths/Biology)</td>
      </tr>
      <tr>
        <td>B.Sc. IT</td>
        <td>10+2 (Physics, Chemistry, Maths)</td>
      </tr>
      <tr>
        <td>MSc (Physics, Chemistry, Maths)</td>
        <td>BSc in respective disciplines (Pass)</td>
      </tr>
      <tr>
        <td>MSc (Zoology and Botany)</td>
        <td>BSc in Zoology, Botany or Life Sciences (Pass)</td>
      </tr>
      <tr>
        <td>MSc Microbiology/MLT</td>
        <td>BSc in Life Science, BSc in Biology, BAMS, BHMS, Biotechnology, BPharma</td>
      </tr>
      <tr>
        <td>MBA</td>
        <td>Graduation in any discipline (+Entrance exam)</td>
      </tr>
      <tr>
        <td>M. Pharm</td>
        <td>B. Pharm Degree with 55% from an accredited institution</td>
      </tr>
      <tr>
        <td>B. Pharm</td>
        <td>10+2 (Physics, Chemistry, Maths/Biology) 45%</td>
      </tr>
      <tr>
        <td>BSc Ag</td>
        <td>10+2 (Physics, Chemistry, Biology) – 60% from Odisha Board/CBSE/ICSE/Other board, 80% for AP Board</td>
      </tr>
      <tr>
        <td>BFSc</td>
        <td>10+2 (Physics, Chemistry, Biology) 50%</td>
      </tr>
      <tr>
        <td>BBA, BCom, BA</td>
        <td>10+2</td>
      </tr>
      <tr>
        <td>MA</td>
        <td>Graduation in any discipline</td>
      </tr>
      <tr>
        <td>Diploma Pharma</td>
        <td>10+2 (Physics, Chemistry, Maths/Biology/BioScience)</td>
      </tr>
      <tr>
        <td>Diploma Engg</td>
        <td>10th Pass (35%) and 12th (Physics, Chemistry, Maths) Pass for lateral entry</td>
      </tr>
    </tbody>
  </table>

  {/* <h3 className={classes.header}>Lateral Entry</h3> */}
  {/* <p className={classes.details}>
    Centurion University is accepting applications under the lateral entry scheme for various programmes for the 2025-26 academic year. The university offers Lateral Entry for the following academic programmes:
  </p>

  <ul className={classes.lateralEntryList}>
    <li>B.Tech (LE)</li>
    <li>Diploma (LE)</li>
    <li>B.Sc Radiology (LE)</li>
    <li>B.Sc MLT (LE)</li>
    <li>B.Pharm (LE)</li>
    <li>Diploma</li>
  </ul> */}
{/* 
  <div className={classes.Applyhead}>How to Apply</div>
  <p className={classes.details}>
    Apply Online/Pay Online: Step 1 - Step 5
  </p> */}

  <h3 className={classes.header}>Admission Cancellation & Refund Policy</h3>
  <table className={classes.refundPolicyTable}>
    <thead>
      <tr>
        <th>Scenario</th>
        <th>Refund Policy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cancellation Before Reporting Date</td>
        <td>The entire payment will be refunded after deducting the counselling fee for all university courses.</td>
      </tr>
      <tr>
        <td>Cancellation After Reporting Date</td>
        <td>No refund will be provided in case of No Show after formal communication from the university.</td>
      </tr>
    </tbody>
  </table>

  <h3 className={classes.header}>Fee Structure from the Academic Year 2025-2026</h3>
  <table className={classes.feeStructureTable}>
    <thead>
      <tr>
        <th>Programme</th>
        <th>Fee (in INR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>B.Tech (4 years) (Mech/Civil/EEE/ECE/Mining)</td>
        <td>155,000</td>
      </tr>
      <tr>
        <td>B.Tech CSE</td>
        <td>170,000</td>
      </tr>
      <tr>
        <td>M.Tech (2 years)</td>
        <td>90,000</td>
      </tr>
      <tr>
        <td>B.Tech Aero Space</td>
        <td>160,000</td>
      </tr>
      <tr>
        <td>B.Tech (4 years) - Biotechnology</td>
        <td>155,000</td>
      </tr>
      <tr>
        <td>MBA (2 years) (All specializations)</td>
        <td>240,000</td>
      </tr>
      <tr>
        <td>BBA (4 years)</td>
        <td>75,000</td>
      </tr>
      <tr>
        <td>B.Com (4 years)</td>
        <td>75,000</td>
      </tr>
      <tr>
        <td>B.Sc - Animation & Multimedia (4 years)</td>
        <td>55,000</td>
      </tr>
      <tr>
        <td>BBA - Healthcare Management (4 years)</td>
        <td>75,000</td>
      </tr>
      <tr>
        <td>BMS - Airport and Airlines Management (4 years)</td>
        <td>120,000</td>
      </tr>
    </tbody>
  </table>
</div>



      <FAQs />
    </div>
  );
};

export default App;
