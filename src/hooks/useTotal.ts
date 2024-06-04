import { useState, useEffect } from 'react';

const useTotal = (items: any) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (!items || !Array.isArray(items)) {
            setTotal(0);
            return;
        }

        const newTotal = items.reduce((accumulator, currentValue) => {
            return accumulator + (+currentValue.price * currentValue.quantity);
        }, 0);

        setTotal(newTotal);
    }, [items]);

    return [total];
};

export default useTotal;
