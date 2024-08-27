import { LoaderCircle } from 'lucide-react';
import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="loader"><LoaderCircle className='text-green-700' /></div>
        </div>
    );
};

export default Loader;
