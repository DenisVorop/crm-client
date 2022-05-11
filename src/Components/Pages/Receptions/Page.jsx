import React from 'react';

import Filter from './Filter/Filter';
import Plan from '../../Common/Plan/Plan';

const Page = ({ startReception }) => {
    return (
        <>
            <Plan
                label='План амбулаторного приема'
            />
            <Filter
                startReception={startReception}
            />
        </>
    )
}

export default Page
