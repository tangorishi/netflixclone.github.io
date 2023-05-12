import jumboJson from '../../../fixtures/jumbo.json'

export default function Jumbotron() {
  return (
    <>
      {
        jumboJson.map(json => (
          <div
            key={json.id}
            className="home_page_card">
            <div className="jumbo_card_container" style={{ flexDirection: json.direction }}>
              <div
                className={`jumbo_card_text padding_placement_${json.id}`}>
                <h1 className='jumbo_card_title'>
                  {json.title}
                </h1>
                <h2 className='jumbo_card_subtitle'>
                  {json.subTitle}
                </h2>
              </div>
              <div className="jumbo_card_img_container">
                <div className={`jumbo_card_animation_container_${json.id}`}>
                  <img
                    src={json.image}
                    alt={json.alt}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
