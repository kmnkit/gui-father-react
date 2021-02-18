import React, { useEffect, useState } from 'react';
import ProductPresenter from './ProductPresenter';

const ProductContainer: React.FunctionComponent = () => {
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
        <ProductPresenter loading={loading} error={error}/>
    )
}

export default ProductContainer;