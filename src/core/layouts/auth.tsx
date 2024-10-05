import { FunctionComponent } from "react";
import { LayoutType } from "../../utils/types/core/layouts/layout";
import { PageWrapper } from "../../styles";

export const AuthLayout: FunctionComponent<LayoutType> = ({ children }) => (
	<PageWrapper>{children}</PageWrapper>
);
