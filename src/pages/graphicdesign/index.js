import React, {Fragment, useState} from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import TemplateGraphicDesignPage from "../../templates/graphicdesign";
import FooterTwo from "../../components/footer/FooterTwo";

import graphicdesignMembers from '../../data/graphicdesign';

const GraphicDesignPage = () => {
    const [graphicdesignPerPage, setGraphicDesignPerPage] = useState(3);
    const [loading, setLoading] = useState(false);
    const graphicdesigns = graphicdesignMembers.slice(0, graphicdesignPerPage);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setGraphicDesignPerPage(graphicdesignPerPage + 3);
            setLoading(false);
        }, 200);
    };

    const allItems = graphicdesignPerPage >= graphicdesignMembers.length;


    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateGraphicDesignPage graphicdesigns={graphicdesigns} loading={loading}/>
            <FooterTwo loadHandler={loadMore} allItems={allItems} />
        </Fragment>
    );
};

export default GraphicDesignPage;