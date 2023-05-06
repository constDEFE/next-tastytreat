import type { FC } from "react"
import Container from "@/shared/Container";

import "./styles/PageHeader.scss";

interface Props {
  title: string
}

const PageHeader: FC<Props> = ({ title }) => {
  return (
    <section aria-labelledby="page-title" className="page-header">
      <Container>
        <h1 id="page-title">{title}</h1>
      </Container>
    </section>
  );
};

export default PageHeader;