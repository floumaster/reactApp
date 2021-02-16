import React, { useState, useEffect } from 'react';
import {useRouteMatch,Route,Switch,Redirect, BrowserRouter as Router} from "react-router-dom"; 
import HomePage from './components/home/home'
import Shop from './components/shop/shop'
import Context from './components/context'
import MostPopular from './components/shop/mostPopular'
import LowCost from './components/shop/lowCost'
import CustomizeMain from './components/customize/customize-main' 
import Header from './components/header-footer/header/header';
import Footer from './components/header-footer/footer';
import UniqueBox from './components/customize/uniqueBox/uniqueBox';

function App() {
  const [menu_flag, setFlag] = useState(false);
  const [curr_links, setLinks] = useState([]);
  const [curr_ending, setEnding] = useState('love'); 
  const shop = [
    ['Shop', [['Shop All Gifts', '/shop'], ['Most Popular','/popular'], ['Gifts under $100','/low-cost'], ['Limited Editions','']]],
    ['Design your own gift', [['Choose Your Layout!','/customize']]],
    ['Occasions', [['Corporate & Client',''], ['Realtor & Housewarming',''], ['Wedding Party','']]]
  ]
  const corporate = [
    ['Work with your own design team', [['Corparate and business']]],
    ['See your work', [['Case Study: Zendesk'], ['Branding & Custom Packaging']]],
  ]
  const custom = [
    ['Design your own gift', []],
  ]
  const about = [
    ['About', [['Meet the team'], ['Contact us'], ['Press'], ['Learn from us: Product Businesses']]],
  ]
  const endings = ['talk about', 'keep', 'share', 'remember', 'love']
  const wayBoxes = 
  [['The Collection', 'box1.png','See all of our gift designs in one place: you`ll find gifts for clients, employees, friends, birthdays, babies, foodies, and your impossible-to-shop-for aunt ;) Some gift designs are seasonal, while others have been bestsellers for years (looking at you The Executive!)', 'SHOP THE COLLECTION'],
  ['Client + Team Gifts', 'box2.png', 'Now it`s more important than ever to show appreciation. Shop our most popular client and team gifts.', 'SHOP CLIENT + TEAM GIFTS'],
  ['Work with Our Team', 'box3.png', `Looking for a gift that is as creative as the work that you do? Tired of forgettable branded swag? Whether you're looking for 50 elevated client gifts or a fulfillment partner for 50,000, were here to help!`, 'LEARN MORE']]
  const popularBoxes = [['box4.png', 'Corporate & Client Gifts', 'LEARN MORE!'], ['box5.png', 'Gifts Under $100', 'SHOP THESE GIFTS']]
  const allBoxes = [['https://manage.teakandtwine.com/storage/images/29010/2bd7b1b528910040ea4e97c52bd37bff.png', 'The Office Essentials', '$130.00'],
  ['https://manage.teakandtwine.com/storage/images/27726/199bca292726754538ee8c4e8e954e7d.png', 'The Sweet & Salty', '$48.00'],
  ['https://manage.teakandtwine.com/storage/images/30600/ef45decddd93c414189fc4b97743ff30.png', 'The Old Fashioned', '$135.00'],
  ['https://manage.teakandtwine.com/storage/images/13177/297ab4a448dfce470a0da03cb76fa3de.jpg', 'The Gazebo', '$74.00'],
  ['https://manage.teakandtwine.com/storage/images/27961/0cdc74fc4e7287cac5f94475491df44c.png', 'The Foodie', '$130.00'],
  ['https://manage.teakandtwine.com/storage/images/13178/f9f5b6fd4bdb8288017ac81d1781dbaf.jpg', 'Limited Edition: The Joshua Tree', '$145.00'],
  ['https://manage.teakandtwine.com/storage/images/28366/2d3bbd3c4f1e30245cad370b26da97bf.png', 'The Claw Foot Tub', '$147.00'],
  ['https://manage.teakandtwine.com/storage/images/29649/599f05c3589a0242514fc050d215bb86.png', 'The Home Office - Chambray', '$102.00'],
  ['https://manage.teakandtwine.com/storage/images/25312/2e6698c7208e632db41427c0061e4d05.jpg', 'The Spa Day', '$123.00'],
  ['https://manage.teakandtwine.com/storage/images/28003/39f78245161eb878d18ab2f27e1baaf8.png', 'The Desk Mate', '$88.00'],
  ['https://manage.teakandtwine.com/storage/images/29010/2bd7b1b528910040ea4e97c52bd37bff.png', 'The Office Essentials', '$130.00'],
  ['https://manage.teakandtwine.com/storage/images/27726/199bca292726754538ee8c4e8e954e7d.png', 'The Sweet & Salty', '$48.00'],
  ['https://manage.teakandtwine.com/storage/images/30600/ef45decddd93c414189fc4b97743ff30.png', 'The Old Fashioned', '$135.00'],
  ['https://manage.teakandtwine.com/storage/images/13177/297ab4a448dfce470a0da03cb76fa3de.jpg', 'The Gazebo', '$74.00'],
  ['https://manage.teakandtwine.com/storage/images/27961/0cdc74fc4e7287cac5f94475491df44c.png', 'The Foodie', '$130.00'],
  ['https://manage.teakandtwine.com/storage/images/13178/f9f5b6fd4bdb8288017ac81d1781dbaf.jpg', 'Limited Edition: The Joshua Tree', '$145.00'],
  ['https://manage.teakandtwine.com/storage/images/28366/2d3bbd3c4f1e30245cad370b26da97bf.png', 'The Claw Foot Tub', '$147.00'],
  ['https://manage.teakandtwine.com/storage/images/29649/599f05c3589a0242514fc050d215bb86.png', 'The Home Office - Chambray', '$102.00'],
  ['https://manage.teakandtwine.com/storage/images/25312/2e6698c7208e632db41427c0061e4d05.jpg', 'The Spa Day', '$123.00'],
  ['https://manage.teakandtwine.com/storage/images/28003/39f78245161eb878d18ab2f27e1baaf8.png', 'The Desk Mate', '$88.00'],
  ['https://manage.teakandtwine.com/storage/images/29010/2bd7b1b528910040ea4e97c52bd37bff.png', 'The Office Essentials', '$130.00'],
  ['https://manage.teakandtwine.com/storage/images/27726/199bca292726754538ee8c4e8e954e7d.png', 'The Sweet & Salty', '$48.00'],
  ['https://manage.teakandtwine.com/storage/images/30600/ef45decddd93c414189fc4b97743ff30.png', 'The Old Fashioned', '$135.00'],
  ['https://manage.teakandtwine.com/storage/images/13177/297ab4a448dfce470a0da03cb76fa3de.jpg', 'The Gazebo', '$74.00'],
  ['https://manage.teakandtwine.com/storage/images/27961/0cdc74fc4e7287cac5f94475491df44c.png', 'The Foodie', '$130.00'],
  ['https://manage.teakandtwine.com/storage/images/13178/f9f5b6fd4bdb8288017ac81d1781dbaf.jpg', 'Limited Edition: The Joshua Tree', '$145.00'],
  ['https://manage.teakandtwine.com/storage/images/28366/2d3bbd3c4f1e30245cad370b26da97bf.png', 'The Claw Foot Tub', '$147.00'],
  ['https://manage.teakandtwine.com/storage/images/29649/599f05c3589a0242514fc050d215bb86.png', 'The Home Office - Chambray', '$102.00'],
  ['https://manage.teakandtwine.com/storage/images/25312/2e6698c7208e632db41427c0061e4d05.jpg', 'The Spa Day', '$123.00'],
  ['https://manage.teakandtwine.com/storage/images/28003/39f78245161eb878d18ab2f27e1baaf8.png', 'The Desk Mate', '$88.00']]
  const allTemplates = [['https://manage.teakandtwine.com/storage/images/1037/f44186293c995a554013376e28bc17e7.jpg', 'Customize: Alex', '$140.00', '/customize/unique-box'],
  ['https://manage.teakandtwine.com/storage/images/981/1c5c44694ed125451a22948722df3e1f.jpg', 'Customize: Melissa', '$130.00', '/products/unique-box'],
  ['https://manage.teakandtwine.com/storage/images/11743/0f212c53f8a7003f1030bf0b092c27af.jpg', 'Customize: Taylor', '$120.00', '/products/unique-box'],
  ['https://manage.teakandtwine.com/storage/images/11764/9b74c4b3103b3e12510d6672c0ddaafa.jpg', 'Customize: Sam', '$110.00', '/products/unique-box'],
  ['https://manage.teakandtwine.com/storage/images/984/232ebe982701a1e77914f1a877951291.jpg', 'Customize: Cassidy', '$80.00', '/products/unique-box'],
  ['https://manage.teakandtwine.com/storage/images/979/5d56b833dc37206d47b1de5d6acb43fe.jpg', 'Customize: Billy', '$60.00', '/products/unique-box'],
  ['https://manage.teakandtwine.com/storage/images/11679/e2d3ebcd699895e870790614249146be.jpg', 'Customize: Charlie', '$50.00', '/products/unique-box']]
  const links = {
    Shop: shop,
    Corporate: corporate,
    Custom: custom,
    About: about
  }
  function show_menu(){
    setFlag(true);
  }
  function hide_menu(){
    setFlag(false);
  }
  function changeLinks(name){
    setLinks(links[name]);
  }
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setEnding(endings[i])
      i++;
      if(i===endings.length){ 
        i=0;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []); 
  return (
    <Context.Provider value={{menu_flag, show_menu, hide_menu, curr_links, changeLinks, curr_ending, wayBoxes, popularBoxes, allBoxes, allTemplates}}>
      <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={Shop}/>
          <Route exact path="/popular" component={MostPopular}/>
          <Route exact path="/low-cost" component={LowCost}/>
          <Route exact path="/customize" component={CustomizeMain}/>
          <Route exact path="/customize/unique-box" component={UniqueBox}/>
        </Switch>
        <Footer/>
      </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
