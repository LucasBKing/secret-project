import React from 'react'
import styled from 'styled-components'

const Post = props => {
  const { name, content } = props
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>
          <PostBox>
            <Name>{name}</Name>
            <Content>{content}</Content>
            <WidgetsSection>
              <Widget>heart</Widget>
              <Widget>balon</Widget>
            </WidgetsSection>
          </PostBox>
        </div>
      </div>
    </div>
  )
}

const PostBox = styled.div`
  display: flex;
  justify-content: flex-start;
`
const Name = styled.h2``
const Content = styled.p``
const WidgetsSection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`
const Widget = styled.h3``

export default Post
