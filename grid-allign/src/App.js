import React from "react";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import ImageCrop from "./components/ImageCrop/ImageCrop";

function App() {
  const [file,setFile] = React.useState(null);
  const [resolution,setResolution] = React.useState([null,null]); 
  
  React.useEffect(() => {
    if (file === null) {
      setResolution([null,null]);
      return;
    }

    var image = document.createElement('img');
    image.src = file;
    image.onload = function() {
      setResolution([image.width,image.height]);
    }
  }, [file]);


  return (
    <div>
      {
        resolution[0] !== null &&
        <div className="flex justify-between">
          <span>Resolution: {resolution[0]} x {resolution[1]}</span>
          <button 
            className="hover:underline"
            onClick={() => {setFile(null)}}
          >
            Clear image
          </button>
        </div>
      }
      <img src={file} className="w-[50%] ml-auto mr-auto"/>
      {
        file !== null &&
        <ImageCrop image={file} width={resolution[0]} height={resolution[1]} />
      }
      {
        file === null &&
        <DragAndDrop setFile={setFile}/>
      }
    </div>
  );
}

export default App;
