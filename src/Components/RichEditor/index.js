import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'


const initialValue = '<a href="https://khan.github.io/KaTeX/function-support.html">Como usar las formulas</a>'

class RichEditor extends Component {
    static propTypes = {
        readOnly: PropTypes.bool,
        hideToolbar: PropTypes.bool,
        content: PropTypes.string,
    }

    state = {
        text: initialValue,
        showToolbar: {
            formula: true,
            syntax: true,
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ header: [1, 2, 3, false] }],
                [{ align: [] }],
                [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                ['blockquote', 'code-block', 'formula'],
                ['link'],
                [{ color: [] }, { background: [] }],
                [{ script: 'sub' }, { script: 'super' }],
                ['clean'],
            ],
        },
        noShowToolbar: {
            toolbar: false,
        },
    }

    handleChange = (value) => {
        this.setState({ text: value })
    }

    render() {
        return (
            <ReactQuill
                style={{ width: '100%', height: '350px' }}
                defaultValue={this.props.content}
                value={this.state.text}
                onChange={this.handleChange}
                modules={this.props.hideToolbar ? this.state.noShowToolbar : this.state.showToolbar}
                readOnly={this.props.readOnly}
            />
        )
    }
}

RichEditor.defaultProps = {
    readOnly: false,
    hideToolbar: false,
    content: '',
}

export default RichEditor

