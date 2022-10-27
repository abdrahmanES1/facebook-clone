import Container from '@mui/material/Container';
import './index.css'
import { Formik , Field, Form} from 'formik';
import { Link } from 'react-router-dom'

interface login {
    email: string;
    password: string;
}
interface loginError {
    email?: string;
    password?: string;
}

function Login() {
    const validate = (values: login): login | loginError => {
        const errors: loginError = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }

    return (
        <main>

            <Container maxWidth="md">
                <div className='login__content'>
                    <div className='login__content--left'>
                        <h1>facebook</h1>
                        <p>Avec Facebook, partagez et restez en contact avec votre entourage.</p>
                    </div>
                    <div className='login__content--right'>
                        <div className="form-container">
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validate={values => validate(values)}
                                validateOnBlur={false}
                                onSubmit={(values, { setSubmitting }) => {
                                    console.log(values)
                                    // setTimeout(() => {
                                    //     alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                    // }, 400);
                                }}
                            >
                                {({
                                    isSubmitting,
                                    /* and other goodies */
                                }) => (
                                    <Form>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder='Adresse e-mail'
                                        />

                                        <Field
                                            type="password"
                                            name="password"
                                            placeholder='Mot de passe'
                                        />

                                        <button type="submit" disabled={isSubmitting}>
                                            Se connecter
                                        </button>

                                        <Link to="/lds">
                                            Mot de passe oublié ?
                                        </Link>
                                        <div className='hr-bar'></div>

                                        <button>
                                            Créer nouveau compte
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <p>Créer une Page pour une célébrité, une marque ou une entreprise.</p>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Login;