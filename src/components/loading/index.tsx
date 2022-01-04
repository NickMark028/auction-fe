import React from 'react';
import { Row, Spinner } from 'react-bootstrap';

interface Props {}

const Loading = (props: Props) => {
  return (
    <Row className="justify-content-center">
      <Spinner className="my-5" animation="border" />
    </Row>
  );
};

export default Loading;
