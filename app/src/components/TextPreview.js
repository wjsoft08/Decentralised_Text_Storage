import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "../Custom.css"

class TextPreview extends Component {

    render() {
        return (
            <div class="TextPreviewContainer">
            <div class="myTextInfo">
                <p>
                    {this.props.text}
                </p>
                <p>
                Text Link: <a href={this.props.hash}>{this.props.hash}</a>
                </p>
                </div>
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
    text: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired
}
export default TextPreview
