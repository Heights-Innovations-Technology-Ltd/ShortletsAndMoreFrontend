import styled from "styled-components";

export const TableContainer = styled.div`
  background: white;
  border-radius: 4px;
  padding: 40px;
  gap: 32px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const TableCardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TableCardTitle = styled.p`
  font-weight: 600;
  font-size: 23px;
  color: #171b03;
`;
export const SeeAll = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #8ba00d;
  text-decoration: underline;
`;
export const TableWrapper = styled.table`
  width: 100%;
  color: #242627;
  border-spacing: 0;
  background: #fafafa;

  /* tr {
    width: 100%;
  } */

  th,
  td {
    font-size: clamp(12px, 1.4vw, 14px);
    line-height: 21px;
    text-align: left;
    padding: 20px 24px;
    margin: 0;
  }
`;

export const TableHeader = styled.thead`
  width: 100%;
  text-align: left;
`;
export const TableHeaderRow = styled.tr`
  border-bottom: 1px solid #e9edf7;
  width: 100%;
  /* background-color: #f3f6e7; */
`;
export const TableHeaderTitle = styled.th`
  font-weight: 600;
  font-size: clamp(18px, 1.4vw, 20px);
`;

export const TableBody = styled.tbody`
  width: 100%;
`;
export const TableBodyRow = styled.tr`
  :nth-of-type(even) {
    background: #fafafa;
  }
  :nth-of-type(odd) {
    background: #fff;
  }
`;
export const TableBodyData = styled.td`
  font-weight: 400;
`;

export const TableButton = styled.button`
  font-weight: 400;
  color: #8ba00d;
  padding: 10px 18px;
  border-radius: 4px;
  background: #f3f6e7;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LeftIconContainer = styled.div`
  background-color: #8ba00d;
  padding: 2px;
  border-radius: 4px;
`;
