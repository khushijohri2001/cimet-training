import React from 'react'
import { useToggle } from '../context/ToggleContext';
import Heading from './Heading';

const Popular = ({ firstData, secondData }) => {
    const { state: { isPopular } } = useToggle();

    const toggle = {
        headingName: "Popular",
        key1: {
            name: "Movie",
            data: firstData
        },
        key2: {
            name: "Tv Show",
            data: secondData
        }
    }

    return (
        <Heading title="Popular" toggle={toggle} isLoading={isPopular} />
    )
}

export default Popular