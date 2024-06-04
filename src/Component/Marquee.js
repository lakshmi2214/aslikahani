import React, { useEffect, useState } from 'react';

const Marquee = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/purity/v1/keystore/values`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <></>;
    }

    if (error) {
        return <></>;
    }

    return (
        <div>
            {data.length > 0 && (
                <div class="marquee">
                    <p> <span>Today's Rate - Gold 24k/1 g Rs {data[0].value}</span> | <span>Silver 24k/1 g Rs {data[1].value}</span> </p>
                    <p> <span>Today's Rate - Gold 24k/1 g Rs {data[0].value}</span> | <span>Silver 24k/1 g Rs {data[1].value}</span> </p>
                    <p> <span>Today's Rate - Gold 24k/1 g Rs {data[0].value}</span> | <span>Silver 24k/1 g Rs {data[1].value}</span> </p>
                </div>
            )}
        </div>

    );
};

export default Marquee;

