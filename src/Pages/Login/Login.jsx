import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';



const Login = () => {

    const { signInWithGoogle, signIn } = useContext(AuthContext)

    // const location = useLocation();
    // const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                toast.success('You logged in successfully');
                // navigate(location?.state ? location.state : '/');
            })
            .catch(err => console.log(err))
    }


    //sign in with email and password
    const handlelogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email, password);

        // login user by created user and pass  
        signIn(email, password)
            .then(res => {

                console.log(res.user);
                toast.success('You logged in successfully');

                // private route navigate after login
                // navigate(location?.state ? location.state : '/');
            })
            .catch(error => {

                toast.error("your email and password doesn't match please check and try again!")
                toast.error('Login failed: ' + error.message);

            })



    }

    return (
        <div>
            <Helmet>
                <title>Forum | Login</title>
            </Helmet>

            <div className="w-full mx-auto mt-10 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

                <form onSubmit={handlelogin} className="space-y-6">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Please Login</h5>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
                    <hr />

                    <div onClick={handleGoogleSignIn} className='flex gap-3 btn'>
                        <FcGoogle></FcGoogle>
                        <h2>Log In With Google</h2>
                    </div>


                </form>
            </div>
        </div>

    );
};

export default Login;