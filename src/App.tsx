import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Home } from './pages/Home';

export function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rayyan Travels &amp; Cab Service | Cab Rental in Navsari &amp; Surat</title>
        <meta
          name="description"
          content="Rayyan Travels &amp; Cab Service offers cab rental enquiries, airport pickup and drop, local city travel, outstation trips, sightseeing, tour packages, corporate rides, and group transportation in Navsari and Surat, Gujarat."
        />
        <link rel="canonical" href="https://rayyantravels.com" />
      </Helmet>
      <Home />
    </HelmetProvider>
  );
}

export default App;
