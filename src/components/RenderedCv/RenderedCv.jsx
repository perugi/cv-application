import styles from "./RenderedCv.module.css";

export default function RenderedCv({ className, cvData }) {
  // TODO not use index as key
  // TODO make email a mailto link
  const sortedData = {
    ...cvData,
    experience: cvData.experience.sort(
      (a, b) => new Date(b.startDate) - new Date(a.startDate)
    ),
    education: cvData.education.sort(
      (a, b) => new Date(b.startDate) - new Date(a.startDate)
    ),
  };

  return (
    <div className={`${styles.renderedCv} ${className}`}>
      <h1 className={styles.title}>CV Preview</h1>
      <section className={styles.personalInfo}>
        <h2 className={styles.fullName}>{sortedData.fullName}</h2>
        <p>
          <span className={styles.label}>Date of birth: </span>
          {sortedData.dob}
        </p>
        <p>
          <span className={styles.label}>Email address: </span>
          {sortedData.email}
        </p>
        <p>
          <span className={styles.label}>Phone number: </span>
          {sortedData.phone}
        </p>
        <p>
          <span className={styles.label}>Address: </span>
          {sortedData.address}
        </p>
      </section>
      <section className={styles.aboutMeSection}>
        <h2 className={styles.sectionHeader}>About Me</h2>
        <p>{sortedData.bio}</p>
      </section>
      <section className={styles.workExperience}>
        <h2 className={styles.sectionHeader}>Work Experience</h2>
        {sortedData.experience.map((exp, index) => (
          <section key={index} className={styles.experienceItem}>
            <div className={styles.experienceItemHeader}>
              <p className={styles.timeAndLocation}>
                {exp.startDate} - {exp.endDate} {exp.location}
              </p>
              <h3>
                <span className={styles.position}>{exp.position}</span>
                {" at "}
                <span className={styles.employer}>{exp.employer}</span>
              </h3>
            </div>
            <p>{exp.description}</p>
          </section>
        ))}
      </section>
      <section className={styles.educationalExperience}>
        <h2 className={styles.sectionHeader}>Education and Training</h2>
        {sortedData.education.map((edu, index) => (
          <section key={index} className={styles.educationItem}>
            <div className={styles.educationItemHeader}>
              <p className={styles.timeAndLocation}>
                {edu.startDate} - {edu.endDate} {edu.location}
              </p>
              <h3>
                <span className={styles.qualification}>
                  {edu.qualification}
                </span>
                {", "}
                <span className={styles.institution}>{edu.institution}</span>
              </h3>
            </div>
            <p>{edu.description}</p>
          </section>
        ))}
      </section>
    </div>
  );
}
