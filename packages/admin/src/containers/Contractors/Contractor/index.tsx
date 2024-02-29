import * as React from 'react';
import { useParams } from 'react-router-dom';

const Contractor: React.FC = () => {
  const { id } = useParams();

  return <>{id}</>;
};

export default Contractor;
