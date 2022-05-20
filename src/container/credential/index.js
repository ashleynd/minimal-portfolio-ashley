import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import SectionTitle from "../../components/SectionTitle";
import Credential from "../../components/credential";
import credentials from '../../data/credential'

const PersonalPortfolioCredential = () => {
    return (
        <div className="section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
            <div className="section-wrap section">
                <Container>
                    <Row>
                        <Col>
                            <SectionTitle
                                title={'Create Credential'}
                                content={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aliquam.'}
                            />
                        </Col>
                    </Row>

                    <Row className={'mbn-30'}>
                        {credentials.slice(0, 3).map(member => (
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
            </div>
        </div>
    );
};

export default PersonalPortfolioCredential;