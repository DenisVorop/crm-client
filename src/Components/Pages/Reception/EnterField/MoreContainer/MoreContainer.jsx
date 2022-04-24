import AddMore from "./AddMore/AddMore"
import FieldMore from "./FieldMore/FieldMore"


const MoreContainer = ({ visible, setVisible, label, nextVisible, title }) => {
    return (
        <>
            {/* {!visible &&
                <AddMore
                    setVisible={setVisible}
                    label={label.label}
                />
            } */}
            {visible &&
                <FieldMore
                    deleteField={setVisible}
                    label={label.label}
                    nextVisible={nextVisible}
                    title={title}
                />
            }
        </>
    )
}

export default MoreContainer
