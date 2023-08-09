import { Routes, Route } from 'react-router-dom';
import Blocks from '../states/Blocks';
import Contact from '../states/Contact';
import Root from '../states/Root';

const routes = () => {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Blocks />} />
      <Route path="/" element={<Root />} />
    </Routes>
  );
};

export default routes;
