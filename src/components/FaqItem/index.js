// Write your code here.

import {Component} from 'react'

import './index.css'

const faqPlus =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const faqMinus =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqsDetails} = this.props

    const {answerText} = faqsDetails

    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="hr-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickToggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const faqPlusAndMinusImg = isActive ? faqMinus : faqPlus

    const isActiveText = isActive ? 'minus' : 'plus'

    const {faqsDetails} = this.props

    const {questionText} = faqsDetails

    return (
      <li className="list-item">
        <div className="irc-img-container">
          <h1 className="irc-heading">{questionText}</h1>
          <button
            className="plus-minus-btn"
            type="button"
            onClick={this.onClickToggle}
          >
            <img src={faqPlusAndMinusImg} alt={isActiveText} />
          </button>
        </div>
        <div>{this.renderAnswer()}</div>
      </li>
    )
  }
}

export default FaqItem
