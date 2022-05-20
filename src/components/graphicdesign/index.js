import React from 'react';

const GraphicDesign = ({name, designation, profilePhoto, socials}) => {
    return (
        <div className="graphicdesign-item">
            <div className="graphicdesign-inner">
                <img src={require('../../assets/images/graphicdesign/' + profilePhoto)} alt={name}/>
                <div className="graphicdesign-content">
                    <h4>{name}</h4>
                    <span>{designation}</span>
                    <div className="graphicdesign-social">
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

export default GraphicDesign;