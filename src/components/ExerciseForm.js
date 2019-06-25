import React, { Component } from 'react'


class ExerciseForm extends Component {
    state={}
    // // // // // // constructor(props){
    //     super(props)
    //     this.handleClick=this.handleClick.bind(this)
    // }
    // handleClick() {
    //     console.log(this.props)
    // }

    // handleClick = () => {
    //     console.log("clicked")
    // }


    onSubmitw=e=>{
        e.preventDefault()
        //console.log(form)
    }
    render() {
        const {onChange,form}=this.props
        return (
            <div className="container">
                <form
                onSubmit={this.onSubmitw}
                >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title"
                            name="title"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="img"
                            name="img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="leftColor"
                                name="leftColor"
                                onChange={onChange}
                                value={form.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="rightColor"
                                name="rightColor"
                                onChange={onChange}
                                value={form.rightColor}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary float-right"
                    >
                        Submit
                </button>
                </form>
            </div>
            // <button onClick={this.handleClick}>
            //     Send
            // </button>
        )
    }
}
export default ExerciseForm