import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import Loading from '../../components/Loader';
import img from '../../assets/img/location_1.png';

interface IProps {
    loading: boolean,
    error: ErrorEvent | null
}

const Container = styled.div`
    margin-top: 80px;
    padding: 0px 0.5rem;
    font-size: 10px;
    @media only screen and (min-width: 1160px){
        display: flex;
        justify-content: center;
    }
`;

const TitleContainer = styled.div`
    align-text:center;
    width: 100%;
    height: 50px;
    margin-top: 50px;
    display: grid;
    place-items: center;
`;

const Title = styled.span`
    font-size: 78px;
    color:black;
`;

const ImageDiv = styled.div`
    width: 500px;
    height: 300px;
    background-size: cover;
    background-position: center;
    @media only screen and (min-width: 800px){
        width: 600px;
        height: 400px;
        display: flex;
        justify-content: center;
    }
`;
const StoreInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Phone = styled.span`
    color: black;
    font-size: 48px;
`;

const AddressTitle = styled.p`
    color: blue;
    font-size: 50px;
`;

const Address = styled.span`
    color: black;
    font-size: 36px;
    padding: 1rem 2rem;
`;

const MessageContainer = styled.div`
    align-text:center;
    width: 100%;
    height: 50px;
    margin: 1rem 0;
    display: grid;
    place-items: center;
`;

const Message = styled.span`
    font-size: 50px;
    color: black;
`;

const ContactPresenter = ({ loading, error }: IProps) => {
    return (
        <>
            <HelmetProvider>
                <Helmet title="联系方式 | 双喜网套店" />
            </HelmetProvider>
            {
                loading ? (
                    <Loading />
                ) : (
                        <>
                            <TitleContainer>
                                <Title>店铺地址</Title>
                            </TitleContainer>
                            <Container>
                                <ImageDiv style={{ backgroundImage: `url(${img})` }} />
                                <StoreInfoContainer>
                                    <AddressTitle>店铺地址</AddressTitle>
                                    <Address>和布克赛尔蒙古自治县和布克赛尔镇 敖包特西街</Address>
                                    <Phone>手机号码：13579509848</Phone>
                                </StoreInfoContainer>
                            </Container>
                            <MessageContainer>
                                <Message>
                                    欢迎光临!
                                </Message>
                            </MessageContainer>
                        </>
                    )
            }
        </>
    )
}

export default ContactPresenter;