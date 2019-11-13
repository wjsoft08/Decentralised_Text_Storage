import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addText } from '../actions'
import "../Custom.css"
import { Page, Grid, Card, Button } from "tabler-react";


const AddText = ({ dispatch }) => {
    let input

    return (

        <Card>
            <div class="viewContainer">
                <label class="form-label">Textarea</label>
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
        </Card>

    )
}

export default connect()(AddText)
