import React from 'react';
import Card from './card/index.js'

const TitleBar = Card.TitleBar;
const Title = Card.Title;
const ContentBar = Card.ContentBar;
const Content = Card.Content;

var AntStudy2 = React.createClass({
    getInitialState : function(){
        return {
            current :2
        }
    },
    render : function(){
        return (
            <div>
                <Card current={this.state.current}>
                    <TitleBar>
                        <Title index={1} onClick={(e)=>this.setState({current:1})}>title-1</Title>
                        <Title index={2} onClick={(e)=>this.setState({current:2})}>title-2</Title>
                        <Title index={3} onClick={(e)=>this.setState({current:3})}>title-3</Title>
                    </TitleBar>
                    <ContentBar>
                        <Content index={1}>content-1</Content>
                        <Content index={2}>content-2</Content>
                        <Content index={3}>content-3</Content>
                    </ContentBar>
                </Card>
            </div>
        )
    }
})

export default AntStudy2;