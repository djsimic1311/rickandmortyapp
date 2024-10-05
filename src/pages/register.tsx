import { FunctionComponent } from "react";
import { AuthLayout } from "../core/layouts";
import { H1 } from "../styles";
import { AuthButton, AuthForm, AuthFormInput } from "../styles/auth";
import {  useForm } from "react-hook-form";
import { AuthFormData } from "../utils/types/auth";
import { Link } from "react-router-dom";
import { useAuthReroute } from "../utils/hooks/useReroute";
import { useAuth } from "../utils/hooks/useAuth";

export const RegisterPage: FunctionComponent = () => {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthFormData>();

  useAuthReroute();

	const { register: handleRegistration } = useAuth();

	return (
		<AuthLayout>
			<AuthForm onSubmit={handleSubmit(handleRegistration)}>
				<H1>Register</H1>
				<label htmlFor="email">
					Email*:
					<AuthFormInput
						{...register("email", { required: "Email is required" })}
						type="email"
						placeholder="Email"
						autoComplete="your-email"
					/>
          <span className="error">&nbsp;{errors.email && errors.email.message}</span>
				</label>
				<label htmlFor="password">
					Password*:
					<AuthFormInput
						{...register("password", { required: "Password is required", pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}
						type="password"
						placeholder="Password"
						autoComplete="current-password"
					/>
          <span className="error">&nbsp;{errors.password && errors.password.message}</span>
				</label>
				<AuthButton type="submit">Register</AuthButton>
        <span>or if you have an account, <Link to={'/'}>Log In!</Link></span>
			</AuthForm>
		</AuthLayout>
	);
};