// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";
import { HashRouter as Router, Route } from "react-router-dom";

import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import TabConfig from "./TabConfig";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
function App() {

  // Initialize the Microsoft Teams SDK
  microsoftTeams.initialize();

  microsoftTeams.settings.setSettings({
      contentUrl: "https://ennair.github.io/teams-app/#/tab", // Mandatory parameter
      entityId: "https://ennair.github.io/teams-app/#/tab", // Mandatory parameter
  });

  microsoftTeams.settings.setValidityState(true);

  microsoftTeams.settings.registerOnSaveHandler(function (saveEvent) {
    saveEvent.notifySuccess();
  });

  // Display the app home page hosted in Teams
  return (
    <Router>
      <Route exact path="/privacy" component={Privacy} />
      <Route exact path="/termsofuse" component={TermsOfUse} />
      <Route exact path="/tab" component={Tab} />
      <Route exact path="/config" component={TabConfig} />
    </Router>
  );
}

export default App;
