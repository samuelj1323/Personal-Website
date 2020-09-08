import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import CarouselQual from '../components/CarouselQual';
function QualPage(props){
    return(
    <div>
        <Hero title={props.title}/>
        <h1 style={{margin:40}}>My Interests: </h1>
        <CarouselQual/>
        <Content>
           Resume HERE
        </Content>

    </div>
    );
}
export default QualPage;