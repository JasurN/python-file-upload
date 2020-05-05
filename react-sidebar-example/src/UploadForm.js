import React, {Component} from 'react';
import axios from 'axios';

class Upload extends Component {
    state = {
        selectedFile: null
    };

    render() {
        return (
            <div>
                <input type="file" name="file" onChange={this.onChangeHandler}/>
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload
                </button>

            </div>
        )
    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    };
    onClickHandler = () => {
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        axios.post("http://localhost:8000/upload/", data, { // receive two parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.log(res)
            })
    }
}

export default Upload;