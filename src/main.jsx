import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { ClubApp } from './club.jsx';

hydrateRoot(document.getElementById('site'), <ClubApp page={document.body.dataset.page || 'home'} />);
