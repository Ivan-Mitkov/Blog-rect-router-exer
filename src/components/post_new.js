import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

class PostNew extends Component {
    renderField(field) {
        //destructure field.meta.
        const { meta: { touched, error } } = field;
        const className = `form-group${touched && error ? ' has-danger' : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className='form-control' type='text' {...field.input}></input>
                {/* {console.log(field.meta)} */}
                <div className='text-help'>
                    {touched ? error : ''}
                </div>

            </div>
        )

    }
    onSubmit(values) {
        // console.log(values);
        //because post_new is part of Route in index.js we have additional props

        // console.log(this.props.history);

        //callback iss needed in order to be sure that we are been navigating back
        //AFTER the post is created we need to add this callback in aACTION to
        //this is action creator
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label='Title' name='title' component={this.renderField} />

                <Field label='Categories' name='categories' component={this.renderField} />

                <Field label='Post Content' name='content' component={this.renderField} />

                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link to='/' className='btn btn-danger'>Cancel</Link>
            </form>

        )

    }
}
function validate(values) {
    const errors = {}
    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter a category';
    }
    if (!values.content) {
        errors.content = 'Enter a content';
    }
    //if errors are empty the form is fine to submit
    return errors;
}
export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostNew)
);