const Datee = () => {
  const date = new Date();
  const month = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const currentmonth = month[date.getMonth()];
  const displaydate = `${currentmonth} ${date.getDate()}, ${date.getFullYear()}`;
  return (
    <p className="date">{displaydate}</p>
  );
};

export default Datee;
// Happy Coding!
