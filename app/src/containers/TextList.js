import React from 'react'
import TextPreview from '../components/TextPreview';
import { connect } from 'react-redux'
import "../Custom.css"
import { Card } from "tabler-react";

const mapStateToProps = state => ({
    reducer: state
})

const mapDispatchToProps = dispatch => ({
    toggleSave: (id, text) => dispatch({ type: "TOGGLE_SAVE_UP", id: id, text: text })
})

const TextList = ({ reducer, toggleSave }) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>My Text</Card.Title>
            </Card.Header>
            <Card.Body>
                {reducer.map((text, hash) =>
                    <TextPreview
                        key={text.id}
                        hash={hash}
                        {...text}
                        onClick={() => toggleSave(text.id, text)}
                    />
                )}
            </Card.Body>
        </Card>
    )
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextList)