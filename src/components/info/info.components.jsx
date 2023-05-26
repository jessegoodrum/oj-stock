import './info.styles.css'
import { Card,Button } from 'react-bootstrap'

export default function Info(){

    const searchWholeFoodsNearMe = () => {
        window.open("https://www.google.com/search?q=whole+foods+near+me");
      }


    return(
        <>
        <Card className="text-center">
        <Card.Header>Info</Card.Header>
        <Card.Body>
          <Card.Title>Whole Foods OJ</Card.Title>
          <Card.Text>
            This app was created for Whole Foods guests to have an idea of how much fresh squeezed orange juice is in stock. 
          </Card.Text>
          <Card.Text>Whole Foods Oj works for all locations, just create a login and add your location!</Card.Text>
          <Card.Text>WholeFoodsOJ.com is not created or maintained by Whole Foods Market. The information is not always accurate, so please check when the product was last updated.</Card.Text>
          <Card.Text>If you would like to be sure OJ is in stock, call your local Whole Foods.</Card.Text>
          <Button variant="primary" onClick={searchWholeFoodsNearMe}>Find Whole Foods Near You</Button>
        </Card.Body>
        <Card.Footer className="text-muted">WholeFoodsOJ was created by Jesse Goodrum, a Whole Foods employee as a portforlio project. 2023 If you are interested in contacting Jesse for any questions, comments, or other inquries please email jessegoodrum@me.com </Card.Footer>
      </Card>
        </>
    )
}