  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  
    const formatDateLomba = (dateString) => {
    if (!dateString) return { day: 'N/A', monthYear: '' };
    const date = new Date(dateString);
    const day = date.getDate();
    const monthYear = date.toLocaleDateString('id-ID', {
      month: 'long',
      year: 'numeric',
    });
    return { day, monthYear };
  };

  /**
 * Fungsi untuk memformat tanggal dari format ISO (2025-03-31T...) menjadi "31 Maret 2025"
 */
const formatDateDetailHero = (dateString) => {
  if (!dateString) return 'N/A';
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

export { formatDate, formatDateLomba, formatDateDetailHero };