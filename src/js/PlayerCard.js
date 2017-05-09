import React from 'react';

import { Row, Media } from 'react-bootstrap';

class PlayerCard extends React.Component {
  render() {
    const { steamId, name, steamImage, title, description } = this.props;

    return (
      <Row className="box">
        <a href={"https://steamcommunity.com/profiles/" + steamId} title={name + "'s Steam Profile"}>
          <Media>
            <Media.Left align="top">
              <img width={64} height={64} src={steamImage} alt={name + "image"} />
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                <div>
                  <strong>{name}</strong>
                </div>
                <small dangerouslySetInnerHTML={{__html: title}}></small>
              </Media.Heading>
              <span dangerouslySetInnerHTML={{__html: description}}/>
            </Media.Body>
          </Media>
        </a>
      </Row>
    );
  }
}

export default PlayerCard;