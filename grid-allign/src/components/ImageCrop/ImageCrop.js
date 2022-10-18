import React from "react";

const ImageCrop = ({image, width, height}) => {
    const [offsetX,setOffsetX] = React.useState(0);
    const [offsetY,setOffsetY] = React.useState(0);
    const [scale,setScale] = React.useState(1);
    const [gridSize,setGridSize] = React.useState(100);
    return(
        <div>
            <div className="mt-2 border p-5">
                <label for='offsetX'>Offset (X-axis):</label>
                <input 
                    type="number" 
                    step='1' 
                    min='0' 
                    id="offsetX" 
                    value={offsetX} 
                    onChange={(e) => {
                        setOffsetX(e.target.value);
                    }}
                />
                <button className="ml-[-70px] mt-[7px] hover:underline absolute" onClick={() => setOffsetX(0)}>reset</button>
                <label for='offsetY' className="ml-5">Offset (Y-axis):</label>
                <input 
                    type="number" 
                    step='1' 
                    min='0' 
                    id="offsetY" 
                    value={offsetY} 
                    onChange={(e) => {
                        setOffsetY(e.target.value);
                    }}
                />
                <button className="ml-[-70px] mt-[7px] hover:underline absolute" onClick={() => setOffsetY(0)}>reset</button>
                <hr className="my-5"/>
                <label for='scale'>Grid scale:</label>
                <input 
                    type="number"
                    step='0.01'
                    min='0'
                    id='scale'
                    value={scale}
                    onChange={(e) => {
                        setScale(e.target.value);
                    }}
                />
                <label for='gridSize' className="ml-5">Grid size:</label>
                <input 
                    type="number" 
                    step='1' 
                    min='0' 
                    id="gridSize" 
                    value={gridSize} 
                    onChange={(e) => {
                        setGridSize(e.target.value);
                    }}
                />
                <hr className="my-5"/>
                <p>
                    Original size: {width} x {height} <br/>
                    Scale by: {scale*(gridSize/100)} <br/>
                    New size: {Math.round(width*scale*(gridSize/100))} x {Math.round(height*scale*(gridSize/100))} <br/>
                    Grid offset: ({offsetX}px, {offsetY}px) <br/>
                    <i className="itallic">If you can't offset the grid, crop this much from (left, top) of the image!</i>
                </p>
            </div>
            <img 
                className="object-none h-full max-w-none mt-5"
                style={{
                    objectPosition: `-${offsetY}px -${offsetX}px`,
                    width: `${Math.round(100*scale)}px`,
                    height: `${Math.round(100*scale)}px`,
                }}
                src={image}
            />
            <div className="h-[500px]"/>
        </div>
    )
}

export default ImageCrop;