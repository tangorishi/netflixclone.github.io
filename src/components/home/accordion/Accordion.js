import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import faqsJson from '../../../fixtures/faqs.json'

export default function Accordion({ children }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='home_page_card'>
      <div className="faq_wrapper">
        <div className="faq_card_text">
          <h1 className="faq_card_title">
            Frequently Asked Questions
          </h1>
          <ul className="faq_list">

            {faqsJson.map((faq, i) => (
              <li
                key={faq.id}
                className="faq_list_item">

                <button
                  onClick={() => isActive === i ? setIsActive(false) : setIsActive(i)}
                  className="faq_question">
                  {faq.header}
                  <span className={isActive === i ? 'active_faq faq_question_icon' : 'faq_question_icon'}>
                    <AiOutlinePlus />
                  </span>
                </button>

                <div className={isActive === i ? 'faq_open faq_body_content' : 'faq_close faq_body_content'}>
                  <span className='faq_body'>
                    {faq.body}
                  </span>
                </div>
              </li>
            ))}

          </ul>
        </div>
        {children}
      </div>
    </div >
  )
}
