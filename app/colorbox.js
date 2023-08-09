
const ColorBox =()=>{
    return(
        <>
            <div className="colorbox">  
                <div className="colorcount">
                    <div className="innercolorbox">Click the color button:-</div>
                </div>           
                <div className="colorcount">
                    <div className="color">RED:-</div>
                    <div className="color" >GREEN:-</div>
                    <div className="color">YELLOW:-</div>
                    <div className="color">BLACK:-</div>
                </div>
            </div>



            <div className="colorbox2">
                <div className="redbox"></div>
                <div className="greenbox"></div>
                <div className="yellowbox"></div>
                <div className="blackbox"></div>

                
            </div>
            
        </>
    );
};

export default ColorBox;
