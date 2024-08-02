import React from 'react';
import Header from "./component/Header.jsx";
import Quiz from "./component/Quiz.jsx";

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Quiz/>
            </main>
        </>
    );
};

export default App;
