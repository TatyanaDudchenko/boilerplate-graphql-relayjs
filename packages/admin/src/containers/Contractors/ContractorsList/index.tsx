import * as React from 'react';

interface ContractorsListProps {
  readonly name?: string;
}

const ContractorsList: React.FC<ContractorsListProps> = props => {
  const { name } = props;
  return <>Здесь будет выводиться список подрядчиков</>;
};

export default ContractorsList;
