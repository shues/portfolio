import './App.css';
import { Block } from './Entities/block';
import { AboutMe } from './Features/aboutMe';
import { Contacts } from './Features/contacts';
import { Education } from './Features/education';
import { Hobby } from './Features/hobby';
import { Name } from './Features/name';
import { Photo } from './Features/photo';
import { Skills } from './Features/skills';
import { Specialization } from './Features/specialization';
import { TeamWork } from './Features/teamWork';
import { Technologies } from './Features/technologies';
import { Header } from './Widgets/Header';
import { Descktop } from './pages/descktop';
import { Mobile } from './pages/mobile';
// import { MainInfo } from './Widgets/MainInfo';
// import { Side } from './Widgets/Side';

function App() {
  return (
    <div className="App">
      <Header />
      <Mobile />
      <Descktop />
    </div>
  );
}

export default App;
