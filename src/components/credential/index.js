import React from 'react';

const Credential = ({name, designation, profilePhoto, socials}) => {
    return (
        <div className="credential-item">
            <div className="credential-inner">
                <img src={require('../../assets/images/credential/' + profilePhoto)} alt={name}/>
                <div className="credential-content">
                    <h4>{name}</h4>
                    <span>{designation}</span>
                    <div className="credential-social">
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

export default Credential;