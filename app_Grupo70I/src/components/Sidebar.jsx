import sideBar from '../assets/img/side-bar.jpg';
import sideBar2 from '../assets/img/side-bar2.jpg';
import sideBar3 from '../assets/img/side-bar3.jpg';
import sideBar5 from '../assets/img/side-bar5.jpg';
import sideBar6 from '../assets/img/side-bar6.jpg';
const Sidebar = () => {
  return (
    <>
        <div
            className="container mx-auto md:grid md:grid-cols-4 mt-12 gap-10 p-5 text-center items-center md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white"
        >
            <div>
                <img className="bg-gradient-to-tr mx-auto" src={sideBar} alt="sideBar"/>   
            </div>
            <div>
                <img className="bg-gradient-to-tr mx-auto" src={sideBar2} alt="sideBar2"/>   
            </div>
            <div>
                <img className="bg-gradient-to-tr mx-auto" src={sideBar3} alt="sideBar3"/>   
            </div>
            <div>
                <img className="bg-gradient-to-tr mx-auto" src={sideBar5} alt="sideBar5"/>   
            </div>
            <div>
                <img className="bg-gradient-to-tr mx-auto" src={sideBar6} alt="sideBar6"/>   
            </div>
        </div>
    </>
  )
}

export default Sidebar