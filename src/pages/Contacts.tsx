import React from "react"
import ExternalLink from "../components/ExternalLink"

import contactImg from "../styles/img/contact.jpg"


class Contacts extends React.Component<{}, {}> {
  render = () =>
    <div className="Contacts">
      <img src={contactImg} alt="" className="lev-img" /><br /><br />
      <ExternalLink newTab to="https://t.me/ssmarta">
        Telegram
      </ExternalLink>,<br />
      <ExternalLink newTab to="https://www.facebook.com/marta.shilova.7">
        facebook
      </ExternalLink>,<br />
      <ExternalLink newTab to="https://t.me/ssmarta">
        VK
      </ExternalLink>,<br />
      <ExternalLink newTab to="https://www.instagram.com/slipper0">
        Instagram
      </ExternalLink><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      site by: <ExternalLink newTab to="https://t.me/the_sociophobic">
        @the_sociophobic
      </ExternalLink>

    </div>
}


export default Contacts