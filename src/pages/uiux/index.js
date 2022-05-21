import React, {Fragment, useState} from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import TemplateUIUXPage from "../../templates/uiux";
import FooterTwo from "../../components/footer/FooterTwo";

import uiuxMembers from '../../data/uiux';

const UIUXPage = () => {
    const [uiuxPerPage, setUIUXPerPage] = useState(3);
    const [loading, setLoading] = useState(false);
    const uiuxs = uiuxMembers.slice(0, uiuxPerPage);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setUIUXPerPage(uiuxPerPage + 3);
            setLoading(false);
        }, 200);
    };

    const allItems = uiuxPerPage >= uiuxMembers.length;


    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateUIUXPage uiuxs={uiuxs} loading={loading}/>
            <FooterTwo loadHandler={loadMore} allItems={allItems} />
        </Fragment>
    );
};

export default UIUXPage;