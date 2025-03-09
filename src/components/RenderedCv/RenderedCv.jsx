import styles from "./RenderedCv.module.css";

export default function RenderedCv({ className, cvData, cvControl }) {
  console.log(cvControl);

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
      <section className={styles.personalInfo}>
        {sortedData.personalInfo.fullName && (
          <h1 className={styles.fullName}>
            {sortedData.personalInfo.fullName}
          </h1>
        )}
        {sortedData.personalInfo.dob && (
          <p>
            <span className={styles.label}>Date of birth: </span>
            {sortedData.personalInfo.dob}
          </p>
        )}
        {sortedData.personalInfo.email && (
          <p>
            <span className={styles.label}>Email address: </span>
            <a href={`mailto:${sortedData.personalInfo.email}`}>
              {sortedData.personalInfo.email}
            </a>
          </p>
        )}
        {sortedData.personalInfo.phone && (
          <p>
            <span className={styles.label}>Phone number: </span>
            {sortedData.personalInfo.phone}
          </p>
        )}
        {sortedData.personalInfo.address && (
          <p>
            <span className={styles.label}>Address: </span>
            {sortedData.personalInfo.address}
          </p>
        )}
      </section>
      {sortedData.personalInfo.bio && (
        <section className={styles.aboutMeSection}>
          <h2 className={styles.sectionHeader}>About Me</h2>
          <p>{sortedData.personalInfo.bio}</p>
        </section>
      )}
      <section className={styles.workExperience}>
        <h2 className={styles.sectionHeader}>Work Experience</h2>
        {sortedData.experience.map((exp) => (
          <section key={exp.id} className={styles.experienceItem}>
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
        {sortedData.education.map((edu) => (
          <section key={edu.id} className={styles.educationItem}>
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
