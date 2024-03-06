import {FC, memo, useState} from "react";
import {InputLabel} from "../InputLabel/InputLabel";
import {ErrorText} from "../ErrorText/ErrorInput";
import styled from "styled-components";
import {Theme} from "../../providers/ThemeProvider/themes";
import {Validation} from "../../types/Validation";
import {ImageUploader} from "../ImageUploader/ImageUploader";

type LabeledImageUploaderProps = {
    onFilesSelected: (selectedFiles: FileList | null) => void;
    label: string;
    uploaderLabel: string,
    validation?: Validation,
    name: string;
    className?: string,
    id?: string;
}

const Div = styled.div<{ theme: Theme }>`
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.small};
    `;

export const LabeledFileUploader: FC<LabeledImageUploaderProps> = memo(({
    label,
    onFilesSelected,
    uploaderLabel,
    validation,
    name,
    className,
    id
}) => {
    const [error, setError] = useState<string | null>(null);

    return (
        <Div className={className} id={id}>
            <InputLabel
                htmlFor={name}
                label={label}
            />
            <ImageUploader onFilesSelected={onFilesSelected} label={uploaderLabel}
            />
            <ErrorText
                error={error}
            />
        </Div>
    );
});