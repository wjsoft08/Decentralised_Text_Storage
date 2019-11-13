import React from 'react'
import PropTypes from 'prop-types'
import TextPreview from '../components/TextPreview';
import { connect } from 'react-redux'
import { toggleSave } from '../actions'
import "../Custom.css"
import { Page, Grid, Card, Button } from "tabler-react";

const mapStateToProps = state => ({
    reducer: state
})

const mapDispatchToProps = dispatch => ({
    toggleSave: (id, text) => dispatch({ type: "TOGGLE_SAVE_UP", id: id, text: text })
})

const TextList = ({ reducer, toggleSave }) => (
    <Card>
        <Card.Header>
            <Card.Title>My Text</Card.Title>
        </Card.Header>
        <Card.Body>
        {reducer.map(text =>
            <TextPreview
                key={text.id}
                {...text}
                onClick={() => toggleSave(text.id, text)}
            />
        )}
        </Card.Body>
    </Card>
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TextList)