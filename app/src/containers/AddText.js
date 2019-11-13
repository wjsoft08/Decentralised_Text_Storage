import React from 'react'
import { connect } from 'react-redux'
import { addText } from '../actions'
import "../Custom.css"
import { Card } from "tabler-react";


const AddText = ({ dispatch }) => {
    let input

    return (

        <Card>
            <Card.Header>
                <Card.Title>Decentralised Text Storage</Card.Title>
            </Card.Header>
            <Card.Body>
                <div class="viewContainer">
                    <form class="formContainer" onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                            return
                        }
                        dispatch(addText(input.value))
                        input.value = ''
                    }}>
                        <textarea class="textInput" rows="10" ref={node => input = node} placeholder="Content.."></textarea>
                        <button className="create" type="submit">
                            Submit Text
                    </button>

                    </form>
                </div>
            </Card.Body>
        </Card>

    )
}

export default connect()(AddText)
