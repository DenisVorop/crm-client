import React from 'react'

import Plan from '../../Common/Plan/Plan'

import Filter from './Filter/Filter'

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
