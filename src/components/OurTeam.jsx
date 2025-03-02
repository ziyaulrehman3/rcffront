import Header from './subCompOurTeam/Header';
import TeamSection from './subCompOurTeam/TeamSection';
import DonateSection from './subCompOurTeam/DonateSection';
import NewTeamSection from './subCompOurTeam/NewTeamSection';
import MainImgFrame from './subCompOurTeam/imageframe';


function App() {
  return (
    <div className="bg-white text-gray-800 w-full m-auto">
        <MainImgFrame/>
        <Header />
        <TeamSection/>
        <DonateSection/>
        <NewTeamSection/>
    </div>
  );
}

export default App;