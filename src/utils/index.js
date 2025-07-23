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

// Fungsi helper untuk memformat mata uang
const formatCurrency = (amount) => {
  if (typeof amount !== 'number') return amount;
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

const formatDateRange = (rangeString) => {
  if (!rangeString || !rangeString.includes(' - ')) {
    return rangeString; 
  }

  const parts = rangeString.split(' - ');
  const startDate = new Date(parts[0]);
  const endDate = new Date(parts[1]);

  const optionsFull = { day: 'numeric', month: 'long', year: 'numeric' };
  const optionsDayOnly = { day: 'numeric' };

  if (
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  ) {
    const startDay = startDate.toLocaleDateString('id-ID', optionsDayOnly);
    const endFull = endDate.toLocaleDateString('id-ID', optionsFull);
    return `${startDay} - ${endFull}`;
  } else {
    const startFull = startDate.toLocaleDateString('id-ID', optionsFull);
    const endFull = endDate.toLocaleDateString('id-ID', optionsFull);
    return `${startFull} - ${endFull}`;
  }
};

export { 
  formatDate, 
  formatDateLomba, 
  formatDateDetailHero, 
  formatCurrency,
  formatDateRange };
