import './style.css'

function NewsDetailsBar(props){
    return (
      <>
        <div class="newsDetailsContainer">
          <div class="newsShareBtn">
            <button>Share</button>
          </div>
          <div class="newsViews">Total views: {props.views}</div>
          <div class="newsDateTime">{props.dateTime}</div>
        </div>
      </>
    );
}

export default NewsDetailsBar;