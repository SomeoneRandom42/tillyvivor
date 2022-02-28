import React from 'react';
import Logo from '../../assets/logo.png'

export default function Home() {
    return (
      <div>
        <p>
          An amazing new org that is based on the thought that playing Survivor is better with friends!
          <br/><br/>
          Every season is aimed to be some sort of Blood v Water. Our first being in pairs of 2 set in a decaying world.  
        </p>
        <img class="season-logo-large" src={Logo}></img>
      </div>
    );
  }