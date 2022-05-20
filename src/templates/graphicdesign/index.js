import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import PageContainer from "../../container/CustomPage";
import GraphicDesign from "../../components/graphicdesign";
import Loading from "../../components/loading";

const TemplateGraphicDesignPage = ({graphicdesigns, loading}) => {
    return (
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row className={'mbn-30'}>
                    {graphicdesigns.map(member => (
                        <Col key={member.id} md={6} lg={4} className={'mb-30'}>
                            <GraphicDesign
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

export default TemplateGraphicDesignPage;