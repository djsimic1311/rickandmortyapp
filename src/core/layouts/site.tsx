import { FunctionComponent } from "react";
import { LayoutType } from "../../utils/types/layout";
import { PageWrapper } from "../../styles";
import { Header } from "../components/header";

export const SiteLayout: FunctionComponent<LayoutType> = ({ children }) => 
(
  <>
    <Header></Header>
    <PageWrapper>
      { children }
    </PageWrapper>
  </>
)