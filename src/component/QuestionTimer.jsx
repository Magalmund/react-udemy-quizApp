import React, {useEffect, useState} from 'react';

const QuestionTimer = ({timeout, onTimeout, mode}) => {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        // console.log('SETTING TIMEOUT');
        const timer = setTimeout(onTimeout, timeout);

        return () => clearTimeout(timer);

    }, [timeout, onTimeout]);

    useEffect(() => {
        // console.log('SETTING INTERVAL');
        const interval = setInterval(() => {
            setRemainingTime(prevState => prevState - 100);
        }, 100)

        return () => clearInterval(interval);
    }, []);

    return (
        <progress id="question-time" className={mode} value={remainingTime} max={timeout} />
    );
};

export default QuestionTimer;
