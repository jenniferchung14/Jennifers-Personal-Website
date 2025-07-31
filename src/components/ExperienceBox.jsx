import React from 'react';

function ExperienceBox({ title, company, dateRanges, bulletPoints }) {
  const isMultiple = Array.isArray(dateRanges) && dateRanges.length > 1;

  return (
    <div className="experience-box">
      {isMultiple ? (
        <>
          <div className="position-info">
            <h3>{title}</h3>
            <p><i>{company}</i></p>
          </div>
          {dateRanges.map((date, idx) => (
            <React.Fragment key={date + idx}>
              <div className="date-section">
                <p className="date">{date}</p>
              </div>
              <div className="bullet-points">
                <ul>
                  {bulletPoints[idx].map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          ))}
        </>
      ) : (
        <>
          <div className="position-info2">
            <div className="title-section">
              <h3>{title}</h3>
              <p><i>{company}</i></p>
            </div>
            <div className="date-section2">
              <p className="date">{Array.isArray(dateRanges) ? dateRanges[0] : dateRanges}</p>
            </div>
          </div>
          <div className="bullet-points">
            <ul>
              {(Array.isArray(bulletPoints[0]) ? bulletPoints[0] : bulletPoints).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ExperienceBox;