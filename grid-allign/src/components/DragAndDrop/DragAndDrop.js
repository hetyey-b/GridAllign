import React from "react";
import './DragAndDrop.css';

const ALLOWED_FILE_TYPES = [
    '.png', '.jpeg', '.jpg'
];

const DragAndDrop = ({setFile}) => {
    const [dragActive, setDragActive] = React.useState(false);
    const inputRef = React.useRef(null);

    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else {
            setDragActive(false);
        }
    };

    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFiles(e.target.files);
        }
    }

    const handleFiles = function(files) {
        setFile(URL.createObjectURL(files[0]));
    }

    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <form 
            id="form-file-upload"
            onDragEnter={handleDrag}
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                ref={inputRef}
                type="file"
                id="input-file-upload"
                multiple={false}
                onChange={handleChange}
                accept={`${ALLOWED_FILE_TYPES.join(',')}`}
            />
            <label id="label-file-upload">
                <div>
                    <p>Drag and drop your map here ({ALLOWED_FILE_TYPES.join(', ')})</p>
                    <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
                </div>
            </label>
            {dragActive && 
                <div 
                    id="drag-file-element" 
                    onDragEnter={handleDrag} 
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                />
            }
        </form>
    );
}

export default DragAndDrop;