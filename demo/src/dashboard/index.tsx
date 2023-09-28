import React from 'react';
import { Route, Routes } from 'react-router-dom';

import DesignEdit from './DesignEdit';
import DesignList from './DesignList';

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/" element={<DesignList />} />
      <Route path={`/design/new`} element={<DesignEdit />} />
      <Route path={`/design/edit/:designId`} element={<DesignEdit />} />
    </Routes>
  );
};

export default Dashboard;
