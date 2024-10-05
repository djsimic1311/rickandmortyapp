import { FunctionComponent, useEffect } from "react";
import { AuthLayout } from "../core/layouts";
import { H1 } from "../styles";
import { AuthButton, AuthForm, AuthFormInput } from "../styles/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthFormData } from "../utils/types/auth";
import { firebaseAuth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setToken, getToken } from "../utils/helpers";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage: FunctionComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthFormData>();

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getToken();

    if (accessToken) {
      navigate('/characters')
    }
  }, [])

	const onSubmit: SubmitHandler<AuthFormData> = ({ email, password }) => {
		signInWithEmailAndPassword(firebaseAuth, email, password)
			.then(({ user }) => {
				user.getIdToken().then((token) => {
					setToken(token);
          navigate('/characters');
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<AuthLayout>
			<AuthForm onSubmit={handleSubmit(onSubmit)}>
				<H1>LOGIN</H1>
				<label htmlFor="email">
					Email*:
					<AuthFormInput
						{...register("email", { required: "Email is required" })}
						type="email"
						placeholder="Email"
						autoComplete="your-email"
					/>
					<span className="error">
						&nbsp;{errors.email && errors.email.message}
					</span>
				</label>
				<label htmlFor="password">
					Password*:
					<AuthFormInput
						{...register("password", {
							required: "Password is required",
							pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
						})}
						type="password"
						placeholder="Password"
						autoComplete="current-password"
					/>
					<span className="error">
						&nbsp;{errors.password && errors.password.message}
					</span>
				</label>
				<AuthButton type="submit">Log In</AuthButton>
        <span>or if you dont have an account, <Link to={'/register'}>Sign up!</Link></span>
			</AuthForm>
		</AuthLayout>
	);
};
