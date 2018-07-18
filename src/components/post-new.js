import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostForm extends React.Component {
  renderField = ({label, input, meta: {touched, error}}) => {
    const classForm = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={classForm}>
        <label>{label}</label>
        <input
          className="form-control"
          type="text"
          {...input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit = async (values) => {
    const { payload: { status, error }} = await this.props.createPost(values);

    if (status === 201) {
      this.props.history.push('/');
    }
  }

  render = () => {

    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            component={this.renderField}
          />

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required';
  } else if (values.title.length < 3) {
    errors.title = 'Title must be at least 3 characters';
  }

  if (!values.categories) {
    errors.categories = 'Categories is required';
  }

  if (!values.content) {
    errors.content = 'Content is required';
  }

  return errors;
}

export default reduxForm({
  form: 'PostNewForm',
  validate,
})(
  connect(null, { createPost })(PostForm)
);
