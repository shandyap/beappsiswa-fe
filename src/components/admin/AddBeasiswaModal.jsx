import React, { useState } from 'react';
import { Modal, Button, Form, Spinner, Row, Col } from 'react-bootstrap';
import { addScholarship } from '../../services/api'; 

const AddBeasiswaModal = ({ show, onHide, onSuccess }) => {
  const [formData, setFormData] = useState({
    judul: '',
    penyelenggara: '',
    deskripsi: '',
    jenis_beasiswa: '',
    durasi: '',
    status: '',
    link_pendaftaran: '',
    jumlah_pendaftar: 0,
    tingkat_pendidikan: '', 
    bidang_studi: '',
    lokasi: '',
    cakupan: '',
    syarat_ketentuan: '',
    dokumen_dibutuhkan: '',
    timeline: {
      pendaftaran_mulai: '',
      pendaftaran_berakhir: '',
    },
    kontak: {
      email: '',
      telepon: '',
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({ ...prev, [parent]: { ...prev[parent], [child]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      jumlah_pendaftar: parseInt(formData.jumlah_pendaftar, 10),
      tingkat_pendidikan: formData.tingkat_pendidikan.split(',').map(item => item.trim()),
      bidang_studi: formData.bidang_studi.split(',').map(item => item.trim()),
      lokasi: formData.lokasi.split(',').map(item => item.trim()),
      cakupan: formData.cakupan.split(',').map(item => item.trim()),
      syarat_ketentuan: formData.syarat_ketentuan.split(',').map(item => item.trim()),
      dokumen_dibutuhkan: formData.dokumen_dibutuhkan.split(',').map(item => item.trim()),
      timeline: {
        pendaftaran_mulai: new Date(formData.timeline.pendaftaran_mulai).toISOString(),
        pendaftaran_berakhir: new Date(formData.timeline.pendaftaran_berakhir).toISOString(),
      },
    };
    
    try {
      await addScholarship(payload);
      alert('Beasiswa berhasil ditambahkan!');
      onSuccess();
      onHide();
    } catch (error) {
      alert('Gagal menambahkan beasiswa: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Tambah Beasiswa Baru</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Judul Beasiswa</Form.Label>
                <Form.Control type="text" name="judul" onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Penyelenggara</Form.Label>
                <Form.Control type="text" name="penyelenggara" onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group className="mb-3">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control as="textarea" rows={3} name="deskripsi" onChange={handleChange} required />
          </Form.Group>
          
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Jenis Beasiswa</Form.Label>
                <Form.Control type="text" name="jenis_beasiswa" placeholder="Contoh: Penuh, Parsial" onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Durasi</Form.Label>
                <Form.Control type="text" name="durasi" placeholder="Contoh: 2 tahun" onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group className="mb-3">
            <Form.Label>Tingkat Pendidikan (pisahkan dengan koma)</Form.Label>
            <Form.Control type="text" name="tingkat_pendidikan" placeholder="Contoh: S1, S2" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Bidang Studi (pisahkan dengan koma)</Form.Label>
            <Form.Control type="text" name="bidang_studi" placeholder="Contoh: Teknik, Ekonomi" onChange={handleChange} required />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Cakupan Beasiswa (pisahkan dengan koma)</Form.Label>
            <Form.Control as="textarea" rows={2} name="cakupan" placeholder="Contoh: Biaya kuliah, Biaya hidup" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Syarat & Ketentuan (pisahkan dengan koma)</Form.Label>
            <Form.Control as="textarea" rows={2} name="syarat_ketentuan" placeholder="Contoh: WNI, IPK minimal 3.0" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Dokumen Dibutuhkan (pisahkan dengan koma)</Form.Label>
            <Form.Control as="textarea" rows={2} name="dokumen_dibutuhkan" placeholder="Contoh: KTP, Ijazah" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Lokasi (pisahkan dengan koma)</Form.Label>
            <Form.Control type="text" name="lokasi" placeholder="Contoh: Dalam Negeri, Luar Negeri" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Kuota Peserta</Form.Label>
            <Form.Control type="number" name="jumlah_pendaftar" placeholder="1000" onChange={handleChange} required />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tanggal Pendaftaran Mulai</Form.Label>
                <Form.Control
                  type="date"
                  name="timeline.pendaftaran_mulai"
                  value={formData.timeline.pendaftaran_mulai}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tanggal Pendaftaran Berakhir</Form.Label>
                <Form.Control
                  type="date"
                  name="timeline.pendaftaran_berakhir"
                  value={formData.timeline.pendaftaran_berakhir}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Link Pendaftaran</Form.Label>
                <Form.Control type="url" name="link_pendaftaran" placeholder="https://contoh.com" onChange={handleChange} required />
              </Form.Group>
            </Col>
             <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select name="status" onChange={handleChange} value={formData.status}>
                  <option value="" disabled>Pilih Status</option>
                  <option value="pendaftaran">Pendaftaran</option>
                  <option value="berlangsung">Berlangsung</option>
                  <option value="ditutup">Ditutup</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
             <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Email Kontak</Form.Label>
                    <Form.Control type="email" name="kontak.email" placeholder="info@email.com" onChange={handleChange} required />
                </Form.Group>
             </Col>
             <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Telepon Kontak</Form.Label>
                    <Form.Control type="tel" name="kontak.telepon" placeholder="+62..." onChange={handleChange} required />
                </Form.Group>
             </Col>
          </Row>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} disabled={isSubmitting}>Batal</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? <Spinner as="span" animation="border" size="sm" /> : 'Simpan Beasiswa'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddBeasiswaModal;