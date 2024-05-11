import React, { useState } from 'react';

const Item = () => {
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const riddles = [
        {
            id: 1,
            description: "Год выхода анимэ 7 смертных грехов",
            option1: "2014",
            option2: "2006",
            option3: "2013",
            option4: "2018",
            correct: 1
        },
        {
            id: 2,
            description: "Кто главный герой анимэ 7 смертных грехов?",
            option1: "Милиодас",
            option2: "Майк Тайсон",
            option3: "Криштиано Роналду",
            option4: "Кони Спрингер",
            correct: 1
        },
        {
            id: 3,
            description: "Кто был бессмертным",
            option1: "Бан",
            option2: "Леди Диана",
            option3: "Эрен",
            option4: "Фалько",
            correct: 1
        },
        {
            id: 4,
            description: "Кому был присущ грех похоти",
            option1: "Гаутер",
            option2: "Мария",
            option3: "Роза",
            correct: 1
        },
        {
            id: 5,
            description: "Греет душу",
            option1: "любовь",
            option2: "автомат на экзамене",
            option3: "костер",
            option4: "деньги",
            correct: 2
        }
    ];

    const handleAnswerClick = (riddleId, selectedOption) => {
        setSelectedAnswers({ ...selectedAnswers, [riddleId]: selectedOption });
    };

    const checkAnswer = (riddleId, selectedOption) => {
        return selectedAnswers[riddleId] === selectedOption;
    };

    return (
        <div style={{ 
            fontFamily: 'Arial, sans-serif',
            background: 'url("https://gas-kvas.com/uploads/posts/2023-02/1675434317_gas-kvas-com-p-fonovii-risunok-serii-9.jpg")',
            backgroundSize: 'cover',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '20px'
        }}>
            {riddles.map(riddle => (
                <div key={riddle.id} style={{ 
                    borderRadius: '10px',
                    padding: '20px',
                    marginBottom: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    width: '50%'
                }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{riddle.description}</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {[1, 2, 3, 4].map(optionId => (
                            riddle[`option${optionId}`] && (
                                <li key={optionId} style={{ 
                                    marginBottom: '5px', 
                                    cursor: 'pointer', 
                                    border: '1px solid black', 
                                    borderRadius: '5px', 
                                    padding: '5px', 
                                    backgroundColor: selectedAnswers[riddle.id] === optionId ? '#f0f0f0' : 'inherit' 
                                }} onClick={() => handleAnswerClick(riddle.id, optionId)}>
                                    {riddle[`option${optionId}`]}
                                </li>
                            )
                        ))}
                    </ul>
                    {selectedAnswers[riddle.id] && (
                        <p style={{ color: checkAnswer(riddle.id, riddle.correct) ? 'green' : 'red' }}>
                            {checkAnswer(riddle.id, riddle.correct) ? 'Правильно!' : 'Неправильно!'}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Item;
