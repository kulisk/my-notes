import React from 'react';
import styled from 'styled-components';

interface FileInputInterface {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    files?: FileList | null
}

const StyledFileInput = styled.input<FileInputInterface>`
  display: block;
  margin-bottom: 6rem;
`;

const FileInput: React.FC<FileInputInterface> = ({
  onChange,
  files,
}) => (
  <StyledFileInput
    type="file"
    multiple
    onChange={onChange}
    files={files}
  />
);

export default FileInput;
