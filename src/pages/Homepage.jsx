import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import styled from 'styled-components'
const Homepage = () => {
    return (
        <Container>
            <Header />
            <Section
              title = "Model S"
              description="Order Online for Touchless Delivery"
              backgroundImg = "model-s.jpg"
              leftBtnText = "CUSTOM ORDER"
              rightBtnText = "EXISTING INVENTORY"
          />
          <Section
            title = "Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg = "model-y.jpg"
            leftBtnText = "CUSTOM ORDER"
            rightBtnText = "EXISTING INVENTORY"
          />
          <Section
            title = "Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg = "model-3.jpg"
            leftBtnText = "CUSTOM ORDER"
            rightBtnText = "EXISTING INVENTORY"
          />
          <Section
            title = "Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg = "model-x.jpg"
            leftBtnText = "CUSTOM ORDER"
            rightBtnText = "EXISTING INVENTORY"
          />
          <Section
            title = "Solar Roof"
            description="Produce Clean Energy From Your Roof"
            backgroundImg = "solar-roof.jpg"
            leftBtnText = "ORDER NOW"
            rightBtnText = "LEARN MORE"
          />
          <Section
            title = "Lowest Cost Solar Panel"
            description="Money-back gurantee"
            backgroundImg = "solar-panel.jpg"
            leftBtnText = "ORDER NOW"
            rightBtnText = "LEARN MORE"
          />
          <Section
            title = "Accessories"
            backgroundImg = "accessories.jpg"
            leftBtnText = "SHOP NOW"
          />
        </Container>
  )
}

export default Homepage

const Container = styled.div`
    height: 100vh;
`