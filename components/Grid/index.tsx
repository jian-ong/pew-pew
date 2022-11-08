import styled from "styled-components";

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  border: 1px solid grey;
`;

const createArray = (length: number) => Array(length).fill(null);

type Props = {
  height: number;
  width: number;
};

const Grid = ({ height, width }: Props) => {
  return (
    <div>
      {createArray(height).map((_, rowIndex) => (
        <Row key={rowIndex}>
          {createArray(width).map((_, colIndex) => (
            <Col key={colIndex} />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Grid;
