import { FunctionComponent } from "react";
import { SiteLayoutPropsType } from "../../utils/types/core/layouts/layout";
import { PageWrapper } from "../../styles";
import { Header } from "../components/header";

export const SiteLayout: FunctionComponent<SiteLayoutPropsType> = ({
	children,
	status,
	wrap = true,
}) =>
	wrap ? (
		<>
			<Header></Header>
			<PageWrapper>
				{status === "loading" ? (
					<div>Im Pickle Rick!</div>
				) : status === "error" ? (
					<div>...</div>
				) : (
					<>{children}</>
				)}
			</PageWrapper>
		</>
	) : status === "loading" ? (
		<div>Im Pickle Rick!</div>
	) : status === "error" ? (
		<div>...</div>
	) : (
		<>{children}</>
	);
