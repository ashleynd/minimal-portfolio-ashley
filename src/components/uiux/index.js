import React from 'react';

const UIUX = ({name, designation, profilePhoto, socials}) => {
    return (
        <div className="uiux-item">
            <div className="uiux-inner">
                <img src={require('../../assets/images/uiux/' + profilePhoto)} alt={name}/>
                <div className="uiux-content">
                    <h4>{name}</h4>
                    <span>{designation}</span>
                    <div className="uiux-social">
                        {socials.map(icon => (
                            <a key={icon.id}
                               href={`https://${icon.media}.com/${icon.username}`}
                               target="_blank"
                               rel="noreferrer noopener"
                            >
                                <i className={`fa fa-${icon.media}`}/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UIUX;