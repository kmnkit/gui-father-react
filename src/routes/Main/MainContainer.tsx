import React, { useEffect, useState } from 'react';
import MainPresenter from './MainPresenter';

const MainContainer: React.FunctionComponent = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ErrorEvent | null>(null);

    useEffect(() => {
        try{
            setLoading(true);
        }catch(e){
            setError(e);
        }
        finally{
            setLoading(false);
        }
    }, []);
    return (
        <MainPresenter loading={loading} error={error}/>
    )
}

export default MainContainer;