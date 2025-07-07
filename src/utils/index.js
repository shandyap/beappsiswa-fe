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

export { formatDate, formatDateLomba };