import styles from "./RenderedCv.module.css";

function formatDate(dateString) {
  if (dateString === "Present") return dateString;
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function renderExperienceItem(exp) {
  console.log(exp);
  return (
    <>
      {exp.organization && exp.title && (
        <section key={exp.id} className={styles.experienceItem}>
          <div className={styles.experienceItemHeader}>
            <p className={styles.timeAndLocation}>
              {exp.startDate && exp.endDate && (
                <>
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  {exp.location && " • "}
                </>
              )}
              {exp.location}
            </p>
            <h3>
              <span className={styles.position}>{exp.title}</span>
              {" • "}
              <span className={styles.employer}>{exp.organization}</span>
            </h3>
          </div>
          {exp.description && <p>{exp.description}</p>}
        </section>
      )}
    </>
  );
}

export default function RenderedCv({ className, cvData, cvControl }) {
  // TODO implement effect of cvControl on rendered CV.

  function sortExperience(a, b, sorting) {
    if (sorting === "newestFirst") {
      return new Date(b.startDate) - new Date(a.startDate);
    }

    return new Date(a.startDate) - new Date(b.startDate);
  }

  const sortedData = {
    ...cvData,
    professional: cvData.professional.toSorted((a, b) =>
      sortExperience(a, b, cvControl.sorting)
    ),
    education: cvData.education.toSorted((a, b) =>
      sortExperience(a, b, cvControl.sorting)
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
        {sortedData.professional.map(renderExperienceItem)}
      </section>
      <section className={styles.educationalExperience}>
        <h2 className={styles.sectionHeader}>Education and Training</h2>
        {sortedData.education.map(renderExperienceItem)}
      </section>
    </div>
  );
}
