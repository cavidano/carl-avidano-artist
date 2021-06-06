'use strict';

const e = React.createElement;

class SocialShare extends React.Component {

    state = {
        toggleButtonText: "Share"
    };
          
    shareToggle = (e) => {
        this.setState({
            toggleButtonText: "Thanks for sharing!"
        });
    }
   
  render() {

    // const url = window.location.href;
    const url = 'https://reactjs.org/';
    
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;

    return (
        <div className="share-this display-flex align-items-center font-size-md">
            <div className="button-group" onClick={this.shareToggle}>
                <a className="button button--icon-only" href={facebookUrl} target="_blank" aria-label="Facebook">
                    <span className="nyc_icon_facebook" aria-hidden="true"></span>
                </a>
                <a className="button button--icon-only" href={twitterUrl} target="_blank" aria-label="Twitter">
                    <span className="nyc_icon_twitter" aria-hidden="true"></span>
                </a>
                <a className="button button--icon-only" href={linkedinUrl} target="_blank" aria-label="Linked">
                    <span className="nyc_icon_linkedin" aria-hidden="true"></span>
                </a>
            </div>
            <span className="margin-left-2 opacity-50">
                <span className="nyc_icon_share" aria-hidden="true"></span>
                <span className="margin-x-1">{this.state.toggleButtonText}</span>
            </span>           
        </div>
    );
  }
}

const shareContainer = document.querySelector('#share_container');
ReactDOM.render(e(SocialShare), shareContainer);