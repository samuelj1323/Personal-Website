import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ServicePage(props){
    return(
        <div fluid={true}>
            <Hero title={props.title}/>
            <Content>
                <h1>Current: </h1>
                <h2>Grace Bible Study Leader</h2>
                <p> I currently have the priviledge of serving as a bible study at a local church. This involves connecting with guys and investing in their lives.
                    This position also involves acts of community service throughout the year for the local population for outreach.
                </p>
                <h1>Growing up: </h1>
                <h2>Houston Flooding:</h2>
                <p> Being from Houston, I had the opportunity to help out when the city flooded during Harvey and the Tax day flood. 
                    My neighborhood flooded, and I and a team of my friends were able to help people escape their houses for the tax day flood, as well as help with demolition in the following days when the water subsided.
                    When neighborhoods recover from flooding, cars line the streets creating a one way road, during the desconstruction of my own house I was able to find the time to direct traffic for a few hours and communicate how to get support to needed areas.
                    I was able to direct crews to elderly houses, and move out their appliances and furniture as well. 
                </p>
                <h2> Boy Scouts of America</h2>
                <p> In the scouts, I was able to participate in a number of restoration projects as well as eagle projects. When It came time to do my own eagle project, I made a portable outdoor stage for the local middle school theater department.</p>
            </Content>
        </div>
    );
}
export default ServicePage;