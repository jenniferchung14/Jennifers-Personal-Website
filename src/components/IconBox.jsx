import React from 'react';

function IconBox({ icons }) {
    return (
        <div className="icon-box">
            <ul className="skills-container">
                {icons.map((icon, index) => (
                    <li key={index} className="glass-card">
                        <img src={icon.src} alt={icon.alt} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IconBox;