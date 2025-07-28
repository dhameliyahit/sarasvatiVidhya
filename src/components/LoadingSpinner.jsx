import React from 'react';
import { Spin } from 'antd';

const LoadingSpinner = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-black/70 flex items-center justify-center">
            <Spin
                size="large"
                tip="Loading..."
                className="text-white"
            />
        </div>
    );
};

export default LoadingSpinner;
