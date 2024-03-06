import React from 'react';
import styled from 'styled-components';
import {inputStyles} from "../../providers/ThemeProvider/themeStyles";
import {Theme} from "../../providers/ThemeProvider/themes";

const DefaultContainer = styled.div<{ theme: Theme }>`${ inputStyles }`;
const UploadContainer = styled(DefaultContainer)<{ theme: Theme }>`
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ theme }) => theme.borders.width} dashed ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borders.radius};
    cursor: pointer;
    
    &:hover > label{
        color: ${({ theme }) => theme.colors.input.hover.text};
    }
`;

const HiddenInput = styled.input`
    display: none;
`;

const Label = styled.label`
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

type ImageUploaderProps = {
    onFilesSelected: (selectedFiles: FileList | null) => void;
    label: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onFilesSelected, label }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFilesSelected(event.target.files);
    };

    return (
        <UploadContainer>
            <HiddenInput
                id="photo-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleChange}
            />
            <Label htmlFor="photo-upload">{label}</Label>
        </UploadContainer>
    );
};