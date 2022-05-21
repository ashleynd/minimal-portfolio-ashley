import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PageContainer from "../../container/CustomPage";
import UIUX from "../../components/uiux";
import Loading from "../../components/loading";

const TemplateUIUXPage = ({uiuxs, loading}) => {
    return (
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row className={'mbn-30'}>
                    {uiuxs.map(member => (
                        <Col key={member.id} md={6} lg={4} className={'mb-30'}>
                            <UIUX
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

export default TemplateUIUXPage;