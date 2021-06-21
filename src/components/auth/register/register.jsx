import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { register } from '../../../services/';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   axios
  //     .post('https://reqres.in/api/register', {
  //       email: data.email,
  //       password: data.email,
  //     })
  //     .then(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // };

  const history = useHistory();

  const onSubmit = async (formData) => {
    const loggedIn = await register(formData);
    localStorage.setItem('auth.token', JSON.stringify(loggedIn.token));
    history.replace('/profile');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-danger form-text">
              {errors.email.type === 'required' && 'Email is required'}
            </span>
          )}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-danger form-text">
              {errors.password.type === 'required' && 'Password is required'}
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
