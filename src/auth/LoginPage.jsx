import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginWithEmailAndPassword, startSignInWithGoogle } from './tunksAuth';
import { useRegister } from './hook/useRegister';



export const LoginPage = () => {

    const { authentication } = useSelector(state => state.auth)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { onInputChange, email, password } = useRegister()

    const onSignInWithGoogle = () => {
        dispatch(startSignInWithGoogle());

        if (authentication === 'authenticated') {
            navigate('/Gifs-Stickers-trending', {
                replace: true
            })
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginWithEmailAndPassword(email, password));
    }

    return (
        <div className="auth-page animate__animated animate__fadeIn">

            <form onSubmit={onSubmit} className="auth-page-form">
                <div className="auth-page-label-input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={onInputChange} />
                </div>

                <div className="auth-page-label-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={onInputChange} />
                </div>

                <div className="auth-page-button">
                    <button type='submit'>Login</button>
                    <button type='button' onClick={onSignInWithGoogle}>Google</button>
                </div>

                <div className='auth-page-link'>
                    <p>don't you have an account?</p>
                    <Link to="/auth/register">Register here</Link>
                </div>

            </form>
        </div>

    )
}
