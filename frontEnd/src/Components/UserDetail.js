/*
UserDetail.js

UserDetail takes in one prop: currentLogin
-currentLogin is an object that stores the account information for the person who is currently logged in.

*/

import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';
import Image from 'react-bootstrap/lib/Image.js';
import EmbedSong from './EmbedSong.js';

const UsernameRow = styled(Row)`
  color: #ff7700;
  font-size: 24px;
  padding: 0;
`;

const UserDetailRow = styled(Row)`
  font-weight: bold;
`;

function UserDetail(props){
  return (


    <Grid >
      <Row>
        <Col lg={2} sm={2} >
          <Image src="https://pbs.twimg.com/profile_images/503711643378155522/yi8jEioQ.jpeg"  circle bsStyle="margin:10px;" width="114px" height="114px" />
        </Col>
        <Col lg={7} sm={3} >
          <Grid>
            <UsernameRow >{props.currentLogin['username']}</UsernameRow>
            <UserDetailRow >Genre: {props.currentLogin['genre']}</UserDetailRow>
            <UserDetailRow >Karma Rating: {props.currentLogin['karma']}</UserDetailRow>
            <UserDetailRow >Followers: {props.currentLogin['numFollowers']}</UserDetailRow>
            <UserDetailRow >see more:  {props.currentLogin['profileURL']}</UserDetailRow>
          </Grid>
        </Col>
        </Row>
        <Col lg={9}>
        <EmbedSong songURL="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/106276300&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true" ></EmbedSong>
        <EmbedSong songURL="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/196990901&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></EmbedSong>
        <EmbedSong songURL="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274807237&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></EmbedSong>
        </Col>
    </Grid>


  );
};


export default UserDetail;
