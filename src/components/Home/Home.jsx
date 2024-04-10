import { Button } from "react-bootstrap";
import videoHero from "../../assets/hero.webm";
const Home = () => {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div>
          <h1 className="mb-4 ">There's a better way to ask</h1>
          <p className="mb-3">
            You don't want to make a boring form. And your audience won't answer
            one. Create a typeform instead-and make everyone happy.
          </p>
          <Button className="mb-4 " variant="dark">
            Get started - it's free
          </Button>
          <div className="d-flex flex-column justify-content-center ">
            <span>&#10003; No credit card required</span>
            <span>&#10003; No time limit on Free plan</span>
          </div>
        </div>
        <div>
          <video src={videoHero} loop muted autoPlay></video>
        </div>
      </div>
    </div>
  );
};

export default Home;
