import styled from "styled-components";
import { motion } from "framer-motion";

export const ProfileContainer = styled(motion.div)`
  border: 1px solid #edf1f7;
  width: 216px;
  background-color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 80px;
  z-index: 10;
  top: 84px;
`;
export const ProfileLists = styled.div`
  list-style-type: none;
  display: flex;
  padding: 16px;
  cursor: pointer;
  gap: 16px;
  align-items: center;
  &:hover {
    background-color: #fafafa;
  }
`;
export const ProfileListss = styled.div`
  list-style-type: none;
  display: flex;
  padding: 16px;
  cursor: pointer;
  gap: 16px;
  border-top: 1px solid #edf1f7;
  border-bottom: 1px solid #edf1f7;
  align-items: center;
  &:hover {
    background-color: #fafafa;
  }
`;

export const ProfileList = styled.li`
  list-style-type: none;
  /* color: #727474; */
  font-size: 14px;
`;

export const Delete = styled.p`
  list-style-type: none;
  color: #ed4e3a;
  font-size: 14px;
`;

export const StaffProfileContainer = styled(motion.div)`
  border: 1px solid #edf1f7;
  width: 216px;
  background-color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 40px;
  z-index: 10;
  top: 100px;
`;
