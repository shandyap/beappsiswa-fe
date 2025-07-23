import { Container } from 'react-bootstrap';

const FooterComponent = () => {
  // Mengambil tahun saat ini secara dinamis
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <Container fluid="md">
        <p className="footer-text">
          &copy; {currentYear} BeAppsiswa. Hak Cipta Dilindungi.
        </p>
      </Container>
    </footer>
  );
};

export default FooterComponent;