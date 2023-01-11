import './style.css'

function Slider(props){
    return(
        <>
        <div class="sliderContainer">
            <div class="sliderComponents">
                {props.children}
            </div>
            <div class="sliderIcon">
                <img ></img>
            </div>
        </div>
        </>
    );
}

export default Slider;