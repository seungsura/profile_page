import { useState, useEffect } from 'react';
import Typist from 'react-typist-component';
import jsonData from '../app/api/hello.json';

const DynamicMessageComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleTypingDone = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % jsonData.index.length);
    };

    return (
        <div>
            <Typist
            loop
            onTypingDone={handleTypingDone}
            cursor={<span className='cursor'>|</span>}
            key={currentIndex}
            >
            {jsonData.index[currentIndex].hello}
            {/* {currentIndex} */}
            <Typist.Delay ms={1500} />
            <Typist.Backspace count={jsonData.index[currentIndex].hello.length} />
            <Typist.Delay ms={433} /> 
            </Typist>
        </div>
    );
};

export default DynamicMessageComponent;