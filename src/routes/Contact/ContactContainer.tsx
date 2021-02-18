import React, { useEffect, useState } from 'react';
import ContactPresenter from './ContactPresenter';

const ContactContainer: React.FunctionComponent = () => {
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
        <ContactPresenter loading={loading} error={error}/>
    )
}

export default ContactContainer;