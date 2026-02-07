import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { MOBILE_WIDTH } from '../../Style';

export const PdfDownloadButton = styled.a`
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
  background-color: #38decb;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  margin-bottom: 24px;
  box-sizing: border-box;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2bc4b2;
  }

  &:visited {
    color: white;
  }

  svg {
    font-size: 20px;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: 16px;
    padding: 10px 16px;
    width: 100%;
    justify-content: center;
  }
`;

export const InstructionLink = styled(Link)`
  font-size: 22px;
  width: 100%;
  display: block;
  text-decoration: none;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-bottom: 2px solid #ccc;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: #38decb;
    background-color: #f9fffe;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: 18px;
  }
`;

export const TableOfContents = styled.nav`
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 30px;
  align-self: flex-start;

  h3 {
    margin: 0 0 12px 0;
    font-size: 16px;
    color: #555;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  ol {
    margin: 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 6px;
  }

  a {
    color: #1a7a6f;
    text-decoration: underline;
    font-size: 15px;

    &:hover {
      color: #38decb;
    }
  }

  @media only screen and (min-width: ${MOBILE_WIDTH + 1}px) {
    width: 300px;
    min-width: 300px;
    position: sticky;
    top: 80px;
    margin-bottom: 0;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const SideBySideLayout = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-start;

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  min-width: 0;
`;


export const VideoSection = styled.div`
  margin-bottom: 20px;
`;

export const VideoLabel = styled.h3`
  color: #555;
  font-size: 18px;
  margin-bottom: 5px;
  margin-top: 30px;
  scroll-margin-top: 80px;

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: 16px;
  }
`;

export const InstructionsLayout = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
  }
`;

export const MobileMenuToggle = styled.button`
  display: none;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 8px 14px;
  margin: 10px;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  align-items: center;
  gap: 8px;

  svg {
    font-size: 16px;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: inline-flex;
  }
`;

export const Sidebar = styled.nav`
  width: 250px;
  min-width: 250px;
  background-color: #f8f9fa;
  padding: 20px 0;
  border-right: 1px solid #e9ecef;

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
    width: 100%;
    min-width: 100%;
    border-right: none;
    border-bottom: 1px solid #e9ecef;
    padding: 0;
  }
`;

export const SidebarLink = styled(NavLink)`
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #555;
  font-size: 14px;
  line-height: 1.4;
  border-left: 3px solid transparent;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: #e9ecef;
    color: #333;
  }

  &.active {
    background-color: #e9ecef;
    border-left-color: #38decb;
    color: #333;
    font-weight: 600;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 12px 20px;
    border-left: 3px solid transparent;

    &.active {
      border-left-color: #38decb;
      background-color: #e9ecef;
    }
  }
`;

export const InstructionsContent = styled.div`
  flex: 1;
  background-color: white;
  padding: 40px 60px;
  min-width: 0;

  h1 {
    color: #444;
    text-align: left;
  }
  h2 {
    color: #888;
    text-align: left;
  }
  p {
    color: #333;
    text-align: justify;
  }

  ul,
  ol {
    color: #333;
  }

  hr {
    margin: 50px 0;
    border-top: none;
    border-top-color: currentcolor;
    border-color: #ddd;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 20px 10px;
  }
`;
