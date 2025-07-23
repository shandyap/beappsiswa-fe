import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Spinner, Row, Col } from 'react-bootstrap';
import { updateScholarshipById } from '../../services/api';

const EditBeasiswaModal = ({ show, onHide, onSuccess, scholarshipData }) => {
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

  useEffect(() => {
    if (scholarshipData) {
      const formatForDateInput = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toISOString().split('T')[0];
      };
      
      setFormData({
        ...scholarshipData,
        tingkat_pendidikan: scholarshipData.tingkat_pendidikan?.join(', ') || '',
        bidang_studi: scholarshipData.bidang_studi?.join(', ') || '',
        lokasi: scholarshipData.lokasi?.join(', ') || '',
        cakupan: scholarshipData.cakupan?.join(', ') || '',
        syarat_ketentuan: scholarshipData.syarat_ketentuan?.join(', ') || '',
        dokumen_dibutuhkan: scholarshipData.dokumen_dibutuhkan?.join(', ') || '',
        timeline: {
            pendaftaran_mulai: formatForDateInput(scholarshipData.timeline?.pendaftaran_mulai),
            pendaftaran_berakhir: formatForDateInput(scholarshipData.timeline?.pendaftaran_berakhir)
        },
        kontak: {
            email: scholarshipData.kontak?.email ?? '',
            telepon: scholarshipData.kontak?.telepon ?? '',
        },
        timeline_id: scholarshipData.timeline_id,
        kontak_id: scholarshipData.kontak_id,
      });
    }
  }, [scholarshipData]);

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

    const { id, timeline_id, kontak_id, ...dataToSend } = formData;

    const payload = {
      ...dataToSend,
      jumlah_pendaftar: parseInt(dataToSend.jumlah_pendaftar, 10),
      tingkat_pendidikan: dataToSend.tingkat_pendidikan.split(',').map(item => item.trim()),
      bidang_studi: dataToSend.bidang_studi.split(',').map(item => item.trim()),
      lokasi: dataToSend.lokasi.split(',').map(item => item.trim()),
      cakupan: dataToSend.cakupan.split(',').map(item => item.trim()),
      syarat_ketentuan: dataToSend.syarat_ketentuan.split(',').map(item => item.trim()),
      dokumen_dibutuhkan: dataToSend.dokumen_dibutuhkan.split(',').map(item => item.trim()),
      timeline: {
        pendaftaran_mulai: new Date(dataToSend.timeline.pendaftaran_mulai).toISOString(),
        pendaftaran_berakhir: new Date(dataToSend.timeline.pendaftaran_berakhir).toISOString(),
      },
    };   
    
    try {
        console.log("Payload:", payload);
      await updateScholarshipById(scholarshipData.id, payload);
      alert('Beasiswa berhasil diperbarui!');
      onSuccess();
      onHide();
    } catch (error) {
      alert('Gagal memperbarui beasiswa: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Beasiswa: {formData?.judul}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Judul Beasiswa</Form.Label>
                <Form.Control type="text" name="judul" value={formData.judul || ''} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Penyelenggara</Form.Label>
                <Form.Control type="text" name="penyelenggara" value={formData.penyelenggara || ''} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group className="mb-3">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control as="textarea" rows={3} name="deskripsi" value={formData.deskripsi || ''} onChange={handleChange} required />
          </Form.Group>
          
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Jenis Beasiswa</Form.Label>
                <Form.Control type="text" name="jenis_beasiswa" value={formData.jenis_beasiswa || ''} placeholder="Contoh: Penuh, Parsial" onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Durasi</Form.Label>
                <Form.Control type="text" name="durasi" value={formData.durasi || ''}  placeholder="Contoh: 2 tahun" onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          
          <Form.Group className="mb-3">
            <Form.Label>Tingkat Pendidikan (pisahkan dengan koma)</Form.Label>
            <Form.Control type="text" name="tingkat_pendidikan" value={formData.tingkat_pendidikan || ''}  placeholder="Contoh: S1, S2" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Bidang Studi (pisahkan dengan koma)</Form.Label>
            <Form.Control type="text" name="bidang_studi" value={formData.bidang_studi || ''} placeholder="Contoh: Teknik, Ekonomi" onChange={handleChange} required />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Cakupan Beasiswa (pisahkan dengan koma)</Form.Label>
            <Form.Control as="textarea" rows={2} name="cakupan" value={formData.cakupan || ''} placeholder="Contoh: Biaya kuliah, Biaya hidup" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Syarat & Ketentuan (pisahkan dengan koma)</Form.Label>
            <Form.Control as="textarea" rows={2} name="syarat_ketentuan" value={formData.syarat_ketentuan || ''} placeholder="Contoh: WNI, IPK minimal 3.0" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Dokumen Dibutuhkan (pisahkan dengan koma)</Form.Label>
            <Form.Control as="textarea" rows={2} name="dokumen_dibutuhkan" value={formData.dokumen_dibutuhkan || ''} placeholder="Contoh: KTP, Ijazah" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Lokasi (pisahkan dengan koma)</Form.Label>
            <Form.Control type="text" name="lokasi" value={formData.lokasi || ''} placeholder="Contoh: Dalam Negeri, Luar Negeri" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Kuota Peserta</Form.Label>
            <Form.Control type="number" name="jumlah_pendaftar" value={formData.jumlah_pendaftar || ''} placeholder="1000" onChange={handleChange} required />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tanggal Pendaftaran Mulai</Form.Label>
                <Form.Control
                  type="date"
                  name="timeline.pendaftaran_mulai"
                  value={formData.timeline?.pendaftaran_mulai || ''}
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
                  value={formData.timeline?.pendaftaran_berakhir || ''}
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
                <Form.Control type="url" name="link_pendaftaran" value={formData.link_pendaftaran || ''} placeholder="https://contoh.com" onChange={handleChange} required />
              </Form.Group>
            </Col>
             <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select name="status" onChange={handleChange} value={formData.status || ''}>
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
                    <Form.Control type="email" name="kontak.email" value={formData.kontak.email || ''} placeholder="info@email.com" onChange={handleChange} required />
                </Form.Group>
             </Col>
             <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Telepon Kontak</Form.Label>
                    <Form.Control type="tel" name="kontak.telepon" value={formData.kontak.telepon || ''} placeholder="+62..." onChange={handleChange} required />
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

export default EditBeasiswaModal;