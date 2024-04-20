import { Button } from "react-bootstrap";
import videoHero from "../../assets/hero.webm";
import { useSelector } from "react-redux";

const Home = () => {
  const { account, isAuth } = useSelector((state) => state.user);
  console.log(account, isAuth);
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div>
          <h1 className="mb-4 ">There&apos;s a better way to ask</h1>
          <p className="mb-3">
            You don&apos;t want to make a boring form. And your audience
            won&apos;t answer one. Create a typeform instead-and make everyone
            happy.
          </p>
          <Button className="mb-4 " variant="dark">
            Get started - it&apos;s free
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
