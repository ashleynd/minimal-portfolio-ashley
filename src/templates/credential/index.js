import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PageContainer from "../../container/CustomPage";
import Credential from "../../components/credential";
import Loading from "../../components/loading";

const TemplateCredentialPage = ({credentials, loading}) => {
    return (
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row className={'mbn-30'}>
                    {credentials.map(member => (
                        <Col key={member.id} md={6} lg={4} className={'mb-30'}>
                            <Credential
                                name={member.name}
                                designation={member.designation}
                                profilePhoto={member.profilePhoto}
                                socials={member.socials}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>

            {loading ? <Loading/> : null}
        </PageContainer>
    );
};

export default TemplateCredentialPage;