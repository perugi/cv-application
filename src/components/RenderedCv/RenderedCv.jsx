import styles from "./RenderedCv.module.css";
import { Fragment } from "react";

function formatDate(dateString) {
  if (dateString === "Present") return dateString;
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function renderExperienceItem(exp) {
  return (
    <Fragment key={exp.id}>
      {exp.organization && exp.title && (
        <section className={styles.experienceItem}>
          <div className={styles.experienceItemHeader}>
            <p className={styles.timeAndLocation}>
              {exp.startDate && exp.endDate && (
                <>
                  {formatDate(exp.startDate)} -{" "}
                  {exp.endDateIsPresent ? "Present" : formatDate(exp.endDate)}
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
    </Fragment>
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
    <div
      className={`${styles.renderedCv} ${className}`}
      data-theme={cvControl.colorTheme}
    >
      <section className={styles.personalInfo}>
        {sortedData.personalInfo.fullName && (
          <h1 className={styles.fullName}>
            {sortedData.personalInfo.fullName}
          </h1>
        )}
        {sortedData.personalInfo.dob && (
          <p>
            <span className={styles.label}>Date of birth:&nbsp;</span>
            {sortedData.personalInfo.dob}
          </p>
        )}
        {sortedData.personalInfo.email && (
          <p>
            <img src="./src/assets/email.svg" alt="" className={styles.icon} />
            <span id="email" className={`${styles.label} ${styles.email}`}>
              Email address:&nbsp;
            </span>
            <a
              aria-labelledby="email"
              href={`mailto:${sortedData.personalInfo.email}`}
              className={styles.emailLink}
            >
              {sortedData.personalInfo.email}
            </a>
          </p>
        )}
        {sortedData.personalInfo.phone && (
          <p>
            <img src="./src/assets/phone.svg" alt="" className={styles.icon} />
            <span id="phone" className={`${styles.label} ${styles.phone}`}>
              Phone number:&nbsp;
            </span>
            <span aria-labelledby="phone">{sortedData.personalInfo.phone}</span>
          </p>
        )}
        {sortedData.personalInfo.address && (
          <p>
            <img src="./src/assets/home.svg" alt="" className={styles.icon} />
            <span id="address" className={`${styles.label} ${styles.address}`}>
              Address:&nbsp;
            </span>
            <span aria-labelledby="address">
              {sortedData.personalInfo.address}
            </span>
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
        {sortedData.professional.length > 0 && (
          <>
            <h2 className={styles.sectionHeader}>Work Experience</h2>
            {sortedData.professional.map(renderExperienceItem)}
          </>
        )}
      </section>
      <section className={styles.educationalExperience}>
        {sortedData.education.length > 0 && (
          <>
            <h2 className={styles.sectionHeader}>Education and Training</h2>
            {sortedData.education.map(renderExperienceItem)}
          </>
        )}
      </section>
    </div>
  );
}
