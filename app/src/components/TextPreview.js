import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "../Custom.css"

class TextPreview extends Component {

    render() {
        return (
            <div class="TextPreviewContainer">
                <p>
                    {this.props.text}
                </p>
                <button className="save" type="submit" disabled={this.props.saved} onClick={() => this.props.onClick()}>
                    Save
                    </button>
            </div>
        )
    }


}

TextPreview.propTypes = {
    onClick: PropTypes.func.isRequired,
    saved: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
export default TextPreview
