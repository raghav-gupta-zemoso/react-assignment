

function CoverImage(props:any) {
    
    return (
        <div>
            <img src={require("./" + props.name + ".svg")}></img>
        </div>
    );
  }
  
  export default CoverImage;
  