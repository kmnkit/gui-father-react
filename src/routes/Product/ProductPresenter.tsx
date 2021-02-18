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

const String = styled.span`
    color: blank;
`;

const ProductPresenter = ({loading, error}: IProps) => {
    return (
        <>
            <HelmetProvider>
                <Helmet title="被子/价格 | 双喜网套店"/>
            </HelmetProvider>
            {
                loading? (
                <Loading/>
                ):(
                    <Container>
                        <String>你好</String>

                    </Container>
                )
            }
        </>
    )
}

export default ProductPresenter;