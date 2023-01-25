import React from 'react';
import Layout from '../Components/layout';
import Navbar from '../Components/nav/Navbar';
import TaskList from '../Components/task/TaskList';

function Home() {
  return (
    <Layout>
      <Navbar />
      <TaskList />
    </Layout>
  );
}

export default Home;
