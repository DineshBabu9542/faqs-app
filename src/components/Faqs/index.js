// Write your code here.

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div>
        <div className="faq-items-container">
          <h1 className="heading">FAQs</h1>
          <ul className="un-order-container">
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} faqsDetails={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Faqs
