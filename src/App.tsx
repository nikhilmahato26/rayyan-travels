import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Home } from './pages/Home';

export function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rayyan Travels &amp; Cab Service | All India Tour &amp; Cab Service</title>
        <meta
          name="description"
          content="Rayyan Travels &amp; Cab Service offers All India Tour packages and commercial taxi passing cabs. Fleet includes Force Urbania, Tempo Traveller, Toyota Innova Crysta, Toyota Rumion, SUVs (Hyundai Venue), and Sedans."
        />
        <link rel="canonical" href="https://rayyantravels.com" />
      </Helmet>
      <Home />
    </HelmetProvider>
  );
}

export default App;
