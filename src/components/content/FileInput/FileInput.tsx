import React from 'react';
import styles from './FileInput.module.scss';
import { useDropzone } from 'react-dropzone';

interface FileInputProps {
  files: File[];
  isMultiple?: boolean;
  onChange(files: File[]): void;
}

const FileInput: React.FC<FileInputProps> = ({
  files,
  onChange,
  isMultiple = false,
}) => {
  function onDeleteFile() {
    onChange([]);
  }

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Object.values(e?.target?.files || {});
    onChange(files);
  };

  const uploadDropFile = React.useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    [onChange]
  );

  function onDropFunc(files: File[]) {
    if (files.length > 1 && isMultiple === false) {
      uploadDropFile([files[0]]);
    } else {
      uploadDropFile(files);
    }
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFunc,
  });

  //обрезание строки
  const computedName = (file: string) => {
    if (file.length > 15) {
      const fileName = file.split('.')[0];
      const fileType = file.split('.')[1];
      const newStr = fileName.substring(0, 15);
      return newStr + '...' + '.' + fileType;
    }
    return file;
  };

  return (
    <>
      <div className={styles.FileInput}>
        <div className={styles.FileInput_Wrapper}>
          {files?.length > 0 ? (
            files.map((file) => {
              return (
                <div className={styles.Input} key={file?.name}>
                  <div className={styles.Input_Title}>
                    {computedName(file.name)}
                  </div>

                  <div
                    className={styles.Input_IconClose}
                    onClick={onDeleteFile}
                  >
                    <svg
                      viewBox="0 0 13 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6 0.0999997H10.58L6.58 4.54L2.58 0.0999997H0.52L5.52 5.52L0.48 11H2.5L6.54 6.52L10.58 11H12.64L7.62 5.5L12.6 0.0999997Z"
                        fill="black"
                        fillOpacity="0.39"
                      />
                    </svg>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              className={`${styles.Input} ${isDragActive ? styles.Active : ''}`}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <span className={styles.Input_Title}>
                {isDragActive ? 'Drop this file' : 'Attach File...'}
              </span>
            </div>
          )}
        </div>

        <label className={styles.FileInput_Btn}>
          <span>Select file</span>

          <input type="file" onChange={uploadFile} />
        </label>
      </div>
    </>
  );
};

export default FileInput;
