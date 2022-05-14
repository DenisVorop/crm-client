import { enterFields } from '../../../Arrays/fields'

import OutputFieldSwitch from '../../../hocs/OutputFieldSwitch'

import Output from '../../Pages/Reception/OutputItem/Output'



const OutputCommon = ({
    objToOutputSwitch, objToOutputColumnSwitch,
}) => {

    return (
        <>
            <Output
                objToOutputColumnSwitch={objToOutputColumnSwitch}
            />
            <div className='outputs'>
                {enterFields.map((field, index) => {
                    return <OutputFieldSwitch
                        key={`${field}_${index}`}
                        field={field}
                        index={index}
                        objToOutputSwitch={objToOutputSwitch}
                    />
                })}
            </div>
        </>
    )
}

export default OutputCommon
