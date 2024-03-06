import React from 'react';
import styled from 'styled-components';
import {Theme} from "../../providers/ThemeProvider/themes";

const ThemeToggle = styled.button<{ theme: Theme }>`
  background: ${ ({ theme }) => theme.background };
  color: ${ ({ theme }) => theme.text };
`;

export const MyComponent: React.FC = () => {
    return (
        <div>
            <ThemeToggle>Toggle Theme</ThemeToggle>
        </div>
    );
};