
function Welcome(){
    return alert("Hello Good Morning Raghav");
}
export const Greet=()=>{
    return(
        <div>
            <button name="button" value="OK" type="button" onClick={Welcome}>Click Here</button>
        </div>
    );
}