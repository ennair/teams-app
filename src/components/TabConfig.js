// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * The 'Config' component is used to display your group tabs
 * user configuration options.  Here you will allow the user to 
 * make their choices and once they are done you will need to validate
 * thier choices and communicate that to Teams to enable the save button.
 */
class TabConfig extends React.Component {
    constructor(props) {
      super(props);

      microsoftTeams.settings.setValidityState(true);

      microsoftTeams.settings.registerOnSaveHandler(function (saveEvent) {
        saveEvent.notifySuccess();
      });
    }

    render() {
      return (
        <div>
          <h1>Tab Configuration</h1>
          <div>
            This is where you will add your tab configuration options the user
            can choose when the tab is added to your team/group chat.            
          </div>
        </div>
      );
    }
  }

  export default TabConfig;
