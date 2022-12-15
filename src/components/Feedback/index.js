import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {emojiHomeContainer: '', thankYouContainer: 'thankYouContainer'}

  Feedback = () => {
    this.setState({emojiHomeContainer: 'thankYouContainer'})
    this.setState({thankYouContainer: ''})
  }

  render() {
    const {resources} = this.props
    const {emojiHomeContainer, thankYouContainer} = this.state
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="FeedbackAppContainer">
        <div className="FeedbackAppHomeContainer">
          <div className={emojiHomeContainer}>
            <h1>How satisfied are you with our customer support performance</h1>
            <ul className="emojisList">
              <li>
                <button type="button" className="button">
                  <img
                    src={emojis[0].imageUrl}
                    alt={emojis[0].name}
                    className="emoji"
                    onClick={this.Feedback}
                  />
                </button>
                <p>{emojis[0].name}</p>
              </li>
              <li>
                <button type="button" className="button">
                  <img
                    src={emojis[1].imageUrl}
                    alt={emojis[1].name}
                    className="emoji"
                    onClick={this.Feedback}
                  />
                </button>
                <p>{emojis[1].name}</p>
              </li>
              <li>
                <button type="button" className="button">
                  <img
                    src={emojis[2].imageUrl}
                    alt={emojis[2].name}
                    className="emoji"
                    onClick={this.Feedback}
                  />
                </button>
                <p>{emojis[2].name}</p>
              </li>
            </ul>
          </div>
          <div className={thankYouContainer}>
            <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
