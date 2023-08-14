const Datee = () => {
  const date = new Date();
  const month = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const currentmonth = month[date.getMonth()];
  const displaydate = `${date.getDate()}/${currentmonth}/${date.getFullYear()}`;

  return (
    <input type="text" value={displaydate} readOnly />
  );
};

export default Datee;
