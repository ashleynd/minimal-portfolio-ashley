import React from 'react';
import {Link} from "react-router-dom";

const PortfolioDetailsContent = ({title, slug, category, description, meta}) => {
    return (
        <div className="portfolio-details-content">
            <Link to={`/portfolio/${slug}`} className="category">{category}</Link>
            {/* <Link to={`http://picslink.herokuapp.com/`} className="title">{title}</Link> */}
            {/* <h1 className="title">{title}</h1> */}
            <p>{description}</p>
            <ul className="project-info">
                <li><span>Project:</span> {meta?.client}</li>
                <li><span>Date:</span> {meta?.date}</li>
                {/* <li>
                    <span>Website:</span>
                    <a href="https://google.com/"
                       target="_blank"
                       rel="noopener noreferrer">{meta?.website}
                    </a>{meta?.website}
                </li> */}
                <li>
                    <span>Website:</span>{meta?.website}
                </li>
            </ul>

           

        </div>
    );
};

export default PortfolioDetailsContent;