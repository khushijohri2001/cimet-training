import React from 'react'
import { useState } from 'react';
import { shuffleData } from '../utils/helper-functions';
import FlipCard from "./FlipCard"
import { useEffect } from 'react';

const StartGame = ({ isGameOn, overGameHandler }) => {
    const [data, setData] = useState(shuffleData());
    const [cardClickedOne, setCardClickedOne] = useState(null);
    const [cardClickedTwo, setCardClickedTwo] = useState(false);
    const [totalClicks, setTotalClicks] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [countDown, setCountDown] = useState(60);


    const flipHandler = (cardData) => {
        // Checking if any card is already open
        if (cardClickedOne) {
            setCardClickedTwo(cardData);
            setData(data.map(elem => elem.id === cardData.id ? { ...elem, isOpen: true } : elem))
        } else {
            setCardClickedOne(cardData);
            setData(data.map(elem => elem.id === cardData.id ? { ...elem, isOpen: true } : elem))
        }

        setTotalClicks((prevTotalClick) => prevTotalClick + 1)
    }


    const resetHandler = () => {
        setCardClickedOne(null);
        setCardClickedTwo(null);
    }



    useEffect(() => {
        const countDownHandler = () => {
            const timer = setInterval(() => {
                setCountDown((prevCountDown) => {
                    if (prevCountDown === 1) {
                        clearInterval(timer)
                        overGameHandler()
                    }
                    return (prevCountDown - 1)
                })

            }, 1000)
        }

        isGameOn && countDownHandler()
    }, [])


    useEffect(() => {
        if (cardClickedOne && cardClickedTwo) {
            if (cardClickedOne.imageUrl === cardClickedTwo.imageUrl) {
                setTotalScore((prevTotalScore) => prevTotalScore + 1);
                resetHandler();
            } else {
                setTimeout(() => setData(data.map((elem) => elem.id === cardClickedOne.id || elem.id === cardClickedTwo.id ? { ...elem, isOpen: false } : elem))
                    , 1000)
                resetHandler();
            }
        }
    }, [cardClickedOne, cardClickedTwo])



    return (
        <div className='bg-green-700 rounded-md h-[40rem] w-[60rem] flex p-3'>
            <div className='flex flex-wrap gap-2'>
                {
                    data.map((data) => <FlipCard key={data.id} data={data} flipHandler={flipHandler} />)
                }
            </div>
            <div>
                <p className="px-3 py-2 rounded-full bg-black text-white font-extrabold text-xl">{countDown}</p>
                <div>
                    <p>CLicks:</p>
                    <p className="p-2 text-center rounded-full bg-red-500 text-white font-extrabold text-xl">{totalClicks}</p>
                </div>
                <div>
                    <p>Score:</p>
                    <p className="p-2 text-center rounded-full bg-red-500 text-white font-extrabold text-xl">{totalScore}</p>
                </div>
            </div>
        </div>
    )
}

export default StartGame