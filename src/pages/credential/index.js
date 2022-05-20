import React, {Fragment, useState} from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import TemplateCredentialPage from "../../templates/credential";
import FooterTwo from "../../components/footer/FooterTwo";

import credentialMembers from '../../data/credential';

const CredentialPage = () => {
    const [credentialPerPage, setCredentialPerPage] = useState(3);
    const [loading, setLoading] = useState(false);
    const credentials = credentialMembers.slice(0, credentialPerPage);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCredentialPerPage(credentialPerPage + 3);
            setLoading(false);
        }, 200);
    };

    const allItems = credentialPerPage >= credentialMembers.length;


    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplateCredentialPage credentials={credentials} loading={loading}/>
            <FooterTwo loadHandler={loadMore} allItems={allItems} />
        </Fragment>
    );
};

export default CredentialPage;