import React from "react";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  FacebookMessengerIcon,
  WhatsappIcon,
  FacebookShareCount,
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton
} from "react-share";
import "./ShareButton.scss"

export default function ShareButton(props) {
  const params = props.url
  const lat = props.loc.lat
  const long = props.loc.lan
  const shareUrl = `https://app-foodee.herokuapp.com//restaurant/${params}/${lat}/${long}`
  const title = 'Checkout This Place!'
  return (
    <div className="shareLinkButtonClass">

      {/* ----------------------------- Facebook ------------------------------------ */}
      <div className="Demo__some-network">
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <div>
          <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
            {count => count}
          </FacebookShareCount>
        </div>
      </div>

      {/* ----------------------------- Facebook Messenger ------------------------------------ */}
      <div className="Demo__some-network">
        <FacebookMessengerShareButton
          url={shareUrl}
          appId="521270401588372"
          className="Demo__some-network__share-button"
        >
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
      </div>
      <div className="Demo__some-network">

        {/* ----------------------------- Twitter ------------------------------------ */}
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <div className="Demo__some-network__share-count">&nbsp;</div>
      </div>

      {/* ----------------------------- Whats App ------------------------------------ */}
      <div className="Demo__some-network">
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <div className="Demo__some-network__share-count">&nbsp;</div>
      </div>

      {/* ----------------------------- Email ------------------------------------ */}
      <div className="Demo__some-network">
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body="body"
          className="Demo__some-network__share-button"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>

    </div>
  )
}