import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 4rem;
  background-color: #2b2b2b;
  max-width: 100%;
  margin: 0 auto;
  align-items: start;
  justify-content: center;
  overflow-x: hidden; /* Previene scroll horizontal */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 1.5rem;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const TestimonialCard = styled.div<{ expanded: boolean }>`
  background-color: #1a1a1a;
  border-radius: 1.5rem;
  padding: 2rem;
  color: white;
  position: relative;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  height: ${({ expanded }) => expanded ? 'auto' : '320px'};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem;
    height: ${({ expanded }) => expanded ? 'auto' : '280px'};
    max-width: 100%;
    overflow: hidden;
  }
`;

export const Stars = styled.div`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: 0.3rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
  }
`;

export const ExpandButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  z-index: 10;
  white-space: nowrap;

  &:hover {
    background-color: white;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    top: 1.5rem;
    right: 1.5rem;
    font-size: 0.75rem;
    padding: 0.4rem 0.7rem;
  }
`;

export const Header = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
  padding-right: 6rem;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    padding-right: 5.5rem;
    line-height: 1.4;
  }
`;

export const Text = styled.div<{ expanded: boolean }>`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #e0e0e0;
  font-style: italic;
  text-align: justify;
  display: ${({ expanded }) => expanded ? 'block' : '-webkit-box'};
  -webkit-line-clamp: ${({ expanded }) => expanded ? 'unset' : '6'};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  word-wrap: break-word;

  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.5;
    -webkit-line-clamp: ${({ expanded }) => expanded ? 'unset' : '5'};
  }
`;