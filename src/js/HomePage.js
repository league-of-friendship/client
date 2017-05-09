import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import PlayerCard from './PlayerCard';

class HomePage extends React.Component {
  render() {
    const admins = [{
      name: 'Treebeard',
      steamId: '76561198055842701',
      steamImage: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8e/8e58931e6ebdcba904a645f318d892a5fc9e54d2_full.jpg',
      title: '<strike>Benevolent</strike> Dictator',
      description: 'Better known as Saltbeard, Tree is a notorious dictator who operated the USYee discord before staging a mutiny against RD2L.',
    }, {
      name: 'Tyrannosaurus X',
      steamId: '76561198024078776',
      steamImage: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/23/23ed7ec6cb33ae16194565aa0b94abbfe5466f61_full.jpg',
      title: 'Sentient Banhammer',
      description: 'I once saw TX smite a mighty troll with just one finger.',
    }, {
      name: 'Bloodninja',
      steamId: '76561198025557652',
      steamImage: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00a71614f4c0e8b99292335aa8f84799fdcd3ce0_full.jpg',
      title: 'Secret Asian Man',
      description: 'I saw him play Batrider pos 4 once. It was... not great.',
    }];

    const nerds = [{
      name: 'littlepinkrose12',
      steamId: '76561198060607123',
      steamImage: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a1/a18592ce83bf44507996e4cd68ec349d0cd0f59a_full.jpg',
      title: 'Dirty Lich Spammer',
      description: "Actual software professional by day, highest pitched voice you've ever heard in Discord by night.",
    }, {
      name: 'Viuebabiurbehats',
      steamId: '76561198025174405',
      steamImage: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/fa/facd65e8000505d06d78e01c756193974c6bc648_full.jpg',
      title: '2k Captain AMA',
      description: "Actual software professional by day, worst captain you've ever played with by night.",
    }];

    const turboNerds = [{
      name: 'Truckwaffle',
      steamId: '76561198041984535',
      steamImage: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4d/4d2e5c701ceacd139090c4f6488cb8375845bd2e_full.jpg',
      title: 'Canadian',
      description: "don't &#x1F44F; claim &#x1F44F; to &#x1F44F; be &#x1F44F; truckwaffle &#x1F44F; unless &#x1F44F; you &#x1F44F; can &#x1F44F; shove &#x1F44F; your &#x1F44F; entire &#x1F44F; hero &#x1F44F; pool &#x1F44F; up &#x1F44F; your &#x1F44F; ass &#x1F44F;"
    }];
  
    return (
      <Grid>
        <Row>
          <Col md={12} className="home-icon">
            <Image src="https://raw.githubusercontent.com/seal-dota/seal-dota.github.io/master/seal.png" responsive />
          </Col>
        </Row>
        <Row className="main-info">
          <Col md={4}>
            <h3>
              <span className="icon">
                <i className="fa fa-calendar"></i>
              </span>
              Schedule
            </h3>
            <ul>
              <li>Sundays</li>
              <li>9 PM Pacific Time</li>
              <li>Season 1 begins July 4, 2017</li>
              <li>Run for 10 weeks</li>
              <li>3 week breaks between seasons</li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>
              <span className="icon">
                <i className="fa fa-users"></i>
              </span>
              Format
            </h3>
            <ul>
              <li>7 weeks of BO2s</li>
              <li>2 weeks of playoffs</li>
              <li>Balanced draft format</li>
              <li>Swiss matchings</li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>
              <span className="icon">
                <i className="fa fa-trophy"></i>
              </span>
              SEAL <strong>DOTA</strong>
            </h3>
            <ul>
              <li>No entry fee</li>
              <li>No prizes</li>
              <li>No skill</li>
              <li>Absolutely no reason to join!</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2><span className="icon">
              <i className="fa fa-lock"></i>
            </span>
            League <strong>Admins</strong></h2>
          </Col>
        </Row>
        {admins.map(({ name, steamId, steamImage, title, description }) => 
          <PlayerCard
            key={steamId}
            name={name}
            steamId={steamId}
            steamImage={steamImage}
            title={title}
            description={description}
          />
        )}
        <Row>
          <Col md={12}>
            <h2>
              <span className="icon is-medium">
                <i className="fa fa-laptop"></i>
              </span>
              NERRRRRDSSSSS
            </h2>
          </Col>
        </Row>
        {nerds.map(({ name, steamId, steamImage, title, description }) =>
          <PlayerCard
            key={steamId}
            name={name}
            steamId={steamId}
            steamImage={steamImage}
            title={title}
            description={description}
          />
        )}
        <Row>
          <Col md={12}>
            <h2>
              <span className="icon is-medium">
                <i className="fa fa-table"></i>
              </span>
              Turbo <strong>Nerd</strong>
            </h2>
          </Col>
        </Row>
        {turboNerds.map(({ name, steamId, steamImage, title, description }) =>
          <PlayerCard
            key={steamId}
            name={name}
            steamId={steamId}
            steamImage={steamImage}
            title={title}
            description={description}
          />
        )}
      </Grid>
    );
  }
}

export default HomePage;