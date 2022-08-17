
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRegister } from './hook/useRegister';
import { startRegisterUserWithEmailAndPassword } from './tunksAuth';

export const RegisterPage = () => {

    const { onInputChange, displayName, email, password, error } = useRegister();

    const dispatch = useDispatch();

    const onRegister = (event) => {
        event.preventDefault();
        dispatch(startRegisterUserWithEmailAndPassword(email, password, displayName));
    }


    return (
        <div className="auth-page animate__animated animate__fadeIn">

            <form onSubmit={onRegister} className="auth-page-form-register">

                <div className="auth-page-label-input-register">
                    <label htmlFor="displayName">Name</label>
                    <input type="text" id="displayName" name="displayName" onChange={onInputChange} />
                    <p
                        className='error'
                        style={
                            {
                                display: `${error.displayName === null ? "none" : ""}`
                            }}
                    >
                        {error.displayName}
                    </p>
                </div>

                <div className="auth-page-label-input-register">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={onInputChange} />
                    <p
                        className='error'
                        style={
                            {
                                display: `${error.email === null ? "none" : ""}`
                            }}
                    >
                        {error.email}
                    </p>
                </div>

                <div className="auth-page-label-input-register">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={onInputChange} />
                    <p
                        className='error'
                        style={
                            {
                                display: `${error.password === null ? "none" : ""}`
                            }}
                    >
                        {error.password}
                    </p>
                </div>

                <div className="auth-page-button">
                    <button>Create Account</button>
                </div>

                <Link to="/login">Do you have an account?</Link>
            </form>
        </div>

    )
}