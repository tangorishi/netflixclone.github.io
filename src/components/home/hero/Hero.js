export default function Feature({ children }) {
  return (
    <div className='home_page_card hero_card'>
      <div className="hero_card_background"></div>
      <div className="background_img_gradient"></div>
      <div className='hero_card_text'>
        <h1 className='hero_card_title'>Unlimited films, TV programmes and more.</h1>
        <h2 className='hero_card_subtitle'>Watch anywhere. Cancel at any time.</h2>
      </div>
      {children}
    </div>
  )
}
