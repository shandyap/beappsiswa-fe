import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Spinner, Row, Col } from 'react-bootstrap';
import { updateCompetitionById } from '../../services/api';

const EditPerlombaanModal = ({ show, onHide, competitionData, onSuccess }) => {
    const [formData, setFormData] = useState({
    judul: '',
    penyelenggara: '',
    deskripsi: '',
    tema: '',
    jenis_lomba: '',
    tingkat: '',
    batas_usia: '',
    target_peserta: '',
    lokasi: '',
    link_pendaftaran: '',
    maksimal_anggota: 0,
    biaya_pendaftaran: 0,
    jumlah_pendaftar: 0,
    kategori: '',
    syarat_ketentuan: '',
    cara_mendaftar: '',
    timeline: {},
    kontak: {},
    hadiah: [],
    media_promosi: [],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
    if (competitionData) {
      const formatForDateInput = (dateString) => dateString ? new Date(dateString).toISOString().split('T')[0] : '';
      
      setFormData({
        ...competitionData,
        // Ubah kembali array menjadi string koma untuk ditampilkan di input
        kategori: competitionData.kategori?.join(', ') || '',
        syarat_ketentuan: competitionData.syarat_ketentuan?.join(', ') || '',
        cara_mendaftar: competitionData.cara_mendaftar?.join(', ') || '',
        // Format tanggal agar bisa tampil di input type="date"
        timeline: {
            pendaftaran_mulai: formatForDateInput(competitionData.timeline?.pendaftaran_mulai),
            pendaftaran_selesai: formatForDateInput(competitionData.timeline?.pendaftaran_selesai),
            pengumpulan_karya: formatForDateInput(competitionData.timeline?.pengumpulan_karya),
            deadline_karya: formatForDateInput(competitionData.timeline?.deadline_karya),
            penjurian: competitionData.timeline?.penjurian || '',
            pengumuman: formatForDateInput(competitionData.timeline?.pengumuman),
        },
      });
    }
  },[competitionData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({ ...prev, [parent]: { ...prev[parent], [child]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDynamicChange = (index, event, fieldName, key) => {
    const newArray = [...formData[fieldName]];
    newArray[index][key] = event.target.value;
    setFormData({ ...formData, [fieldName]: newArray });
  };

  const addDynamicItem = (fieldName, newItem) => {
    setFormData({
        ...formData,
        [fieldName]: [...formData[fieldName], newItem]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

        const { 
        id, 
        timeline_id, 
        kontak_id, 
        hadiah, 
        media_promosi,
        ...dataToSubmit
    } = formData;

    const payload = {
      ...dataToSubmit,
      maksimal_anggota: parseInt(formData.maksimal_anggota, 10) || 0,
      biaya_pendaftaran: parseInt(formData.biaya_pendaftaran, 10) || 0,
      jumlah_pendaftar: parseInt(formData.jumlah_pendaftar, 10) || 0,
      kategori: typeof dataToSubmit.kategori === 'string' 
        ? dataToSubmit.kategori.split(',').map(item => item.trim()) 
        : dataToSubmit.kategori,
      syarat_ketentuan: typeof dataToSubmit.syarat_ketentuan === 'string' 
        ? dataToSubmit.syarat_ketentuan.split(',').map(item => item.trim())
        : dataToSubmit.syarat_ketentuan,
      cara_mendaftar: typeof dataToSubmit.cara_mendaftar === 'string' 
        ? dataToSubmit.cara_mendaftar.split(',').map(item => item.trim())
        : dataToSubmit.cara_mendaftar,
      timeline: {
        pendaftaran_mulai: new Date(dataToSubmit.timeline.pendaftaran_mulai).toISOString(),
        pendaftaran_selesai: new Date(dataToSubmit.timeline.pendaftaran_selesai).toISOString(),
        pengumpulan_karya: new Date(dataToSubmit.timeline.pengumpulan_karya).toISOString(),
        deadline_karya: new Date(dataToSubmit.timeline.deadline_karya).toISOString(),
        penjurian: dataToSubmit.timeline.penjurian, // Ini sudah benar sebagai string
        pengumuman: new Date(dataToSubmit.timeline.pengumuman).toISOString(),
      },
      kontak: {
        email: dataToSubmit.kontak.email,
        whatsapp: dataToSubmit.kontak.whatsapp,
        instagram: dataToSubmit.kontak.instagram || '',
      },
    };
    console.log("Payload yang dikirim:", payload);

    try {
      await updateCompetitionById(competitionData.id, payload);
      alert('Perlombaan berhasil diedit!');
      onSuccess();
      onHide();
    } catch (error) {
      alert('Gagal menambahkan perlombaan: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
}

  return (
    <Modal show={show} onHide={onHide} size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Perlombaan: {formData?.judul}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {/* --- Bagian Utama --- */}
          <Row>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Judul Lomba</Form.Label><Form.Control type="text" name="judul" value={formData.judul || ''} onChange={handleChange} required /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Penyelenggara</Form.Label><Form.Control type="text" name="penyelenggara" value={formData.penyelenggara || ''} onChange={handleChange} required /></Form.Group></Col>
          </Row>
          <Form.Group className="mb-3"><Form.Label>Deskripsi</Form.Label><Form.Control as="textarea" rows={2} name="deskripsi" value={formData.deskripsi || ''} onChange={handleChange} required /></Form.Group>
          <Row>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Tema Lomba</Form.Label><Form.Control type="text" name="tema" value={formData.tema || ''} onChange={handleChange} required /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Jenis Lomba</Form.Label><Form.Control type="text" name="jenis_lomba" value={formData.jenis_lomba || ''} placeholder="Contoh: Desain Grafis" onChange={handleChange} required /></Form.Group></Col>
          </Row>

          {/* --- Bagian Peserta & Kategori --- */}
          <Form.Group className="mb-3"><Form.Label>Kategori (pisahkan dengan koma)</Form.Label><Form.Control type="text" name="kategori" value={formData.kategori || ''} placeholder="Contoh: Pelajar, Mahasiswa" onChange={handleChange} required /></Form.Group>
          <Row>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Tingkat</Form.Label><Form.Control type="text" name="tingkat" value={formData.tingkat || ''} placeholder="Contoh: Nasional" onChange={handleChange} required /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Lokasi</Form.Label><Form.Control type="text" name="lokasi" value={formData.lokasi || ''} placeholder="Contoh: Jakarta" onChange={handleChange} required /></Form.Group></Col>
          </Row>
          <Row>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Batas Usia</Form.Label><Form.Control type="text" name="batas_usia" value={formData.batas_usia || ''} placeholder="Contoh: Maks 25 tahun" onChange={handleChange} required /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Maksimal Anggota per Tim</Form.Label><Form.Control type="number" name="maksimal_anggota" value={formData.maksimal_anggota || ''} onChange={handleChange} required /></Form.Group></Col>
          </Row>
          <Form.Group className="mb-3"><Form.Label>Target Peserta</Form.Label><Form.Control type="text" name="target_peserta" value={formData.target_peserta || ''} onChange={handleChange} required /></Form.Group>
          
          {/* --- Bagian Pendaftaran --- */}
          <Row>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Biaya Pendaftaran</Form.Label><Form.Control type="number" name="biaya_pendaftaran" value={formData.biaya_pendaftaran || ''} onChange={handleChange} required /></Form.Group></Col>
            <Col md={6}><Form.Group className="mb-3"><Form.Label>Link Pendaftaran</Form.Label><Form.Control type="url" name="link_pendaftaran" value={formData.link_pendaftaran || ''} placeholder="https://..." onChange={handleChange} required /></Form.Group></Col>
          </Row>

          {/* --- Bagian Detail (Array) --- */}
          <Form.Group className="mb-3"><Form.Label>Syarat & Ketentuan (pisahkan dengan koma)</Form.Label><Form.Control as="textarea" rows={2} name="syarat_ketentuan" value={formData.syarat_ketentuan || ''} onChange={handleChange} required /></Form.Group>
          <Form.Group className="mb-3"><Form.Label>Cara Mendaftar (pisahkan dengan koma)</Form.Label><Form.Control as="textarea" rows={2} name="cara_mendaftar" value={formData.cara_mendaftar || ''} onChange={handleChange} required /></Form.Group>

          {/* --- Bagian Timeline --- */}
          <hr/>
          <h5>Timeline</h5>
          <Row>
            <Col><Form.Group className="mb-2"><Form.Label>Mulai Daftar</Form.Label><Form.Control type="date" name="timeline.pendaftaran_mulai" value={formData.timeline.pendaftaran_mulai || ''} onChange={handleChange} required /></Form.Group></Col>
            <Col><Form.Group className="mb-2"><Form.Label>Selesai Daftar</Form.Label><Form.Control type="date" name="timeline.pendaftaran_selesai" value={formData.timeline.pendaftaran_selesai || ''} onChange={handleChange} required /></Form.Group></Col>
            <Col><Form.Group className="mb-2"><Form.Label>Mulai Karya</Form.Label><Form.Control type="date" name="timeline.pengumpulan_karya" value={formData.timeline.pengumpulan_karya || ''} onChange={handleChange} required /></Form.Group></Col>
          </Row>
          <Row>
            <Col><Form.Group className="mb-3"><Form.Label>Deadline Karya</Form.Label><Form.Control type="date" name="timeline.deadline_karya" value={formData.timeline.deadline_karya || ''} onChange={handleChange} required /></Form.Group></Col>
            <Col><Form.Group className="mb-3"><Form.Label>Penjurian</Form.Label><Form.Control type="text" name="timeline.penjurian" value={formData.timeline.penjurian || ''} placeholder="Contoh: 2025-08-16 - 2025-08-20" onChange={handleChange} required /></Form.Group></Col>
            <Col><Form.Group className="mb-3"><Form.Label>Pengumuman</Form.Label><Form.Control type="date" name="timeline.pengumuman" value={formData.timeline.pengumuman || ''} onChange={handleChange} required /></Form.Group></Col>
          </Row>

          {/* --- Bagian Kontak --- */}
          <hr/>
          <h5>Kontak</h5>
          <Row>
            <Col><Form.Group className="mb-3"><Form.Label>Email</Form.Label><Form.Control type="email" name="kontak.email" value={formData.kontak.email || ''} onChange={handleChange} required /></Form.Group></Col>
            <Col><Form.Group className="mb-3"><Form.Label>WhatsApp</Form.Label><Form.Control type="tel" name="kontak.whatsapp" value={formData.kontak.whatsapp || ''} onChange={handleChange} required /></Form.Group></Col>
            <Col><Form.Group className="mb-3"><Form.Label>Instagram</Form.Label><Form.Control type="text" name="kontak.instagram" value={formData.kontak.instagram || ''} placeholder="@username" onChange={handleChange} /></Form.Group></Col>
          </Row>

          {/* --- Bagian Dinamis --- */}
          <hr />
          <h5>Hadiah</h5>
          {formData.hadiah.map((item, index) => (
            <Row key={index} className="mb-2">
              <Col><Form.Control type="text" placeholder={`Juara ${index + 1}`} value={item.juara || ''} onChange={(e) => handleDynamicChange(index, e, 'hadiah', 'juara')} /></Col>
              <Col><Form.Control type="text" placeholder="Deskripsi Hadiah" value={item.hadiah || ''} onChange={(e) => handleDynamicChange(index, e, 'hadiah', 'hadiah')} /></Col>
            </Row>
          ))}
          <Button variant="outline-secondary" size="sm" onClick={() => addDynamicItem('hadiah', { juara: '', hadiah: '' })}>+ Tambah Hadiah</Button>
          
          <hr />
          <h5>Media Promosi</h5>
          {formData.media_promosi.map((item, index) => (
            <Row key={index} className="mb-2">
              <Col><Form.Control type="text" placeholder="Platform" value={item.platform || ''} onChange={(e) => handleDynamicChange(index, e, 'media_promosi', 'platform')} /></Col>
              <Col><Form.Control type="url" placeholder="Link Promosi" value={item.link || ''} onChange={(e) => handleDynamicChange(index, e, 'media_promosi', 'link')} /></Col>
            </Row>
          ))}
          <Button variant="outline-secondary" size="sm" onClick={() => addDynamicItem('media_promosi', { platform: '', link: '' })}>+ Tambah Media</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} disabled={isSubmitting}>Batal</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? <Spinner as="span" animation="border" size="sm" /> : 'Simpan Perlombaan'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default EditPerlombaanModal;
