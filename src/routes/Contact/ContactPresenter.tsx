import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import Loading from '../../components/Loader';

interface IProps{
    loading: boolean,
    error: ErrorEvent | null
}
const Container = styled.div`
    margin-top: 80px;
    padding: 20px;
`;

// const String = styled.span`
//     color: blank;
// `;

const ImageDiv = styled.div<{ bgUrl: string }>`
    background-image: url(${(props) => props.bgUrl});
    width: 300px;
    height: 200px;
`;

const location_1 = require('../../assets/img/location_1.png');

const ContactPresenter = ({loading, error}: IProps) => {
    return (
        <>
            <HelmetProvider>
                <Helmet title="联系方式 | 双喜网套店"/>
            </HelmetProvider>
            {
                loading? (
                <Loading/>
                ):(
                    <Container>
                        <ImageDiv bgUrl={location_1} />
                    </Container>                   
                )
            }
        </>
    )
}

export default ContactPresenter;