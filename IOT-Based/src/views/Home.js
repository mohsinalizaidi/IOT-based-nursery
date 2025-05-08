import React from 'react';
import SupervisorCard from '../components/Card/SupervisorCard';
import ProductCard from '../components/Card/ProductCard';
import SectionContainer from '../components/Layout/SectionContainer';
import InfoBox from '../components/Layout/InfoBox';

const Home = () => {
  return (
    <div className="home-view">
      {/* Section with children props */}
      <SectionContainer>
        <h2>Welcome to the Smart Home Nursery!</h2>
        <InfoBox>
          <strong>Tip:</strong> Keep the humidity level in check for better plant growth.
        </InfoBox>
      </SectionContainer>

      {/* SupervisorCard example */}
      <div className="supervisor-section">
        <h2>Meet Our Supervisors</h2>
        <SupervisorCard 
          title="Dr. John Doe" 
          description="Expert in horticulture and plant care" 
          image="/images/john_doe.jpg" 
          location="Greenhouse 1, Main Building" 
        />
      </div>

      {/* ProductCard example */}
      <div className="product-section">
        <h2>Our Best Smart Products</h2>
        <ProductCard 
          title="Smart Irrigation System" 
          price="$199" 
          description="Automated irrigation system for your plants." 
          image="/images/smart_irrigation.jpg" 
        />
      </div>
    </div>
  );
};

export default Home;
